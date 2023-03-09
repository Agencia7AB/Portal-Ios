import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Alert, SafeAreaView, ScrollView, Image, StatusBar, ActivityIndicator } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from 'react-native-toast-message';
import { collection, query, where, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import LottieView from 'lottie-react-native';
import { getDownloadURL, getStorage, uploadBytes, ref } from "firebase/storage";
import styles from "./style";
import  * as DocumentPicker from 'expo-document-picker';



export default function AnalisisFacial({ navigation }) {

    const auth = getAuth();
    const user = auth.currentUser;
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [counter, setCounter] = useState(0);
    const [referencia, setReferencia] = useState(null);
    const [consulta, setConsulta] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [grupo, setGrupo] = useState("");
    const [nme, setnme] = useState("");


    const UploadResumos = async () => {

        try {
            const db = getFirestore();
            const form = "Cefalometría (pdf webceph)"
            const docRef = await addDoc(collection(db, "Resumos"), {
                to: [email],
                message: {
                    subject: 'Soporte Rayane Pinto!',
                    html: '<p>Hola Doc. ' + (consulta.nome).split(' ')[0] + ', ¡saludos! </p><p>Recibimos su resumen de ' + form + '.</p><p>Seguimos en contacto.</p><p>Equipo de Soporte Profª Rayane Pinto<br/>Odontología Sin Fronteras Cursos e Treinamentos LTDA</p> <div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/teste-5e945.appspot.com/o/Logos%2FLogo-OSF---PRETO%26VERDE%20(1).png?alt=media&token=4f22b716-ec57-4c71-bcfb-de67ef56b94d" width="150"></div>',
                },
                nomeForm: form,
                email: email,
                ifoUsuario: consulta,
                url: referencia,
                grupo: grupo,
                status: "",
                nameA: nme,
            });

        } catch (e) {
            console.error("Error adding document: ", e);
        }

        navigation.navigate("Escolha")
        Alert.alert("¡Formulario enviado con éxito!", "Se envió un mensaje de confirmación a tu correo electrónico")

        Toast.show({
            type: "success",
            position: 'top',
            text1: '¡Formulario enviado con éxito!',
            text2: ' ',
            visibilityTime: 50,
        })
    }


    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                if (user !== null) {
                    user.providerData.forEach((profile) => {
                        setEmail(profile.email)
                    });
                }
            }

        })();

    }, []);

    
    const pickImage = async () => {
        
        try{
            let result = await DocumentPicker.getDocumentAsync({
                type: "*/*",
                copyToCacheDirectory: true,
                multiple: false,
            });
          console.log(result);
        
          var lastThree = result.name.substr(result.name.length - 3);

          if(lastThree == 'pdf')
          {
            setUploading(true);
            if(result.type == 'success')
            {
                Toast.show({
                    type: "success",
                    position: 'top',
                    text1: 'Archivo cargado',
                    text2: ' ',
                })
                setImage(result.name)
                const blob = await new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        resolve(xhr.response);
                    };
                    xhr.onerror = function (e) {
                        console.log(e);
                        reject(new TypeError("Network request failed"));
                    };
                    xhr.responseType = "blob";
                    xhr.open("GET", result.uri, true);
                    xhr.send(null);
                    setUploading(true);
                });
              
                        var url = Math.floor(Math.random() * 655366545782);
        
                        const storage = getStorage();
        
                        const fileImageRef = ref(storage, 'gs://teste-5e945.appspot.com/Resumos/' + url);
                        const upload = await uploadBytes(fileImageRef, blob);
        
                        let UrlDownload = await getDownloadURL(fileImageRef);
                        setReferencia(UrlDownload)
                        setnme(url)
        
                        blob.close();
        
                        for (var i = 0; i <= 2; i++) {
                            const db = getFirestore();
                            const citiesRef = collection(db, "Usuarios");
                            const q = query(citiesRef, where("email", "==", email));
        
                            const querySnapshot = await getDocs(q);
                            querySnapshot.forEach((doc) => {
                            console.log(doc.id, " => ", doc.data());
        
                            setGrupo(doc.data().grupo);
        
                            const obj = {
                            email: doc.data().email,
                            grupo: doc.data().grupo,
                            nome: doc.data().nome
                        }
        
                    setConsulta(obj);
                    setUploading(false);
                });
                }
            }
            
    
          }
          else
          {
            alert('Please select PDF File')
          }
        
            } catch (error) {
                Toast.show({
                    type: "error",
                    position: 'top',
                    text1: 'Archivo descartado',
                    text2: ' ',
                })
            }
    };
 
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8FF', }}>

            <ScrollView style={{ backgrounColor: ' #28D2DE' }}>

                <StatusBar barStyle="light-content" backgroundColor="#054A59" />

                <Text style={styles.titulo}>
                    Envío de Resúmenes
                </Text>
                <Toast />

                <Text style={styles.descricao}>
                    Hola Doc.!, estamos encantados con tu entrega de resumen.
                    Si tienes alguna pregunta puedes hacerla en la plataforma de clases (Hotmart)
                </Text>

                

                <TouchableOpacity style={styles.buttomFoto} onPress={pickImage}>

                    <MaterialCommunityIcons
                        name="file-export"
                        size={24}
                        color="#ffffff" />

                    <Text style={{
                        color: "#ffffff",
                        textAlign: 'center',
                        marginLeft: 5,
                    }}> Sellar un archivo
                    </Text>

                </TouchableOpacity>

               {/*<ActivityIndicator style={{ marginTop: 25 }} animating={uploading} size={60} color="#054A59" />*/}

               {uploading == true &&
                    <LottieView source={require('../../../assets/lf20_6i4bjfle.json')} autoPlay loop  duration={4500}
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'transparent',
                        alignContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        marginTop: 20
                      }}/>
                }

                {image === "" &&
                <Text style={styles.textCounter}>Total de archivos seleccionados: 0 de 1</Text>
                }
                {image !== "" &&
                <Text style={styles.textCounter}>Total de archivos seleccionados: 1 de 1</Text>
                }
           {image !== "" &&
            <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                <MaterialCommunityIcons
                        name="file-document-outline"
                        size={30}
                        color="#000" />

                <Text style={styles.textImg}>{image}</Text>
                <TouchableOpacity style={{backgroundColor: "#EB1300", width: 25, height: 25, borderRadius: 0.5, justifyContent: "center", marginTop: 7, marginLeft: 50}}
                onPress={() =>{setReferencia(null), setCounter(0), setImage("")}}
                >
                    <Text style={{color: '#FFF', fontSize: 17, textAlign: "center", fontWeight: "bold"}}>X</Text>
                </TouchableOpacity>
            </View>}

                {referencia === null &&

                    <TouchableOpacity style={styles.buttomEnviarDisable}>

                        <Text style={{
                            color: "#000000",
                            textAlign: 'center',
                        }}>
                            Enviar
                        </Text>

                    </TouchableOpacity>

                }

                {referencia != null &&

                    <TouchableOpacity style={styles.buttomEnviar} onPress={UploadResumos}>

                        <Text style={{
                            color: "#000000",
                            textAlign: 'center',
                        }}>
                            Enviar
                        </Text>

                    </TouchableOpacity>

                }



            </ScrollView>

        </SafeAreaView >

    );


} 