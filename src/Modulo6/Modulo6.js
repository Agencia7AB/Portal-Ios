import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Alert, SafeAreaView, ScrollView, Image, StatusBar, ActivityIndicator, PermissionsAndroid } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from 'react-native-toast-message';
import { collection, query, where, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { getDownloadURL, getStorage, uploadBytes, ref } from "firebase/storage";
import styles from "./style";


export default function Modulo6({ navigation }) {

    const auth = getAuth();
    const user = auth.currentUser;
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState("");
    const [referencia, setReferencia] = useState(null);
    const [consulta, setConsulta] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [grupo, setGrupo] = useState("");
    const [open, setOpen] = useState("");
    const [openModal, setOpenModal] = useState(false)
    const [refImg, setRefImg] = useState("");
    const [numero, setNumero] = useState("")
    const [excluido, setExcluido] = useState("")

    

    const [f1, setF1] = useState("");
    const [f2, setF2] = useState("");
    const [f3, setF3] = useState("");
    const [f4, setF4] = useState("");
    const [f5, setF5] = useState("");
    const [f6, setF6] = useState("");
    const [f7, setF7] = useState("");
    const [f8, setF8] = useState("");
    const [f9, setF9] = useState("");
    const [f10, setF10] = useState("");
    const [f11, setF11] = useState("");
    const [f12, setF12] = useState("");
    const [f13, setF13] = useState("");
    const [f14, setF14] = useState("");
    const [f15, setF15] = useState("");
    const [f16, setF16] = useState("");
    const [f17, setF17] = useState("");
    const [f18, setF18] = useState("");
    const [f19, setF19] = useState("");
    const [f20, setF20] = useState("");
    const [f21, setF21] = useState("");
    const [f22, setF22] = useState("");
    const [f23, setF23] = useState("");
    const [f24, setF24] = useState("");
    const [f25, setF25] = useState("");

    

    const UploadResumos = async () => {

        try {
            const db = getFirestore();
            const form = "Módulo 6"
            const docRef = await addDoc(collection(db, "Resumos"), {
                to: [email],
                message: {
                    subject: 'Soporte Rayane Pinto!',
                    html: '<p>Hola Doc. ' + (consulta.nome).split(' ')[0] + ', ¡saludos! </p><p>Recibimos su resumen del ' + form + '.</p><p>Seguimos en contacto.</p><p>Equipo de Soporte Profª Rayane Pinto<br/>Odontología Sin Fronteras Cursos e Treinamentos LTDA</p> <div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/teste-5e945.appspot.com/o/Logos%2FLogo-OSF---PRETO%26VERDE%20(1).png?alt=media&token=4f22b716-ec57-4c71-bcfb-de67ef56b94d" width="150"></div>',
                },
                pagina: counter,
                nomeForm: form,
                email: email,
                ifoUsuario: consulta,
                urlImg: [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21, f22, f23, f24, f25],
                grupo: grupo,
                status: ""
            });

        } catch (e) {
            console.error("Error adding document: ", e);
        }

        navigation.navigate("Escolha")
        Alert.alert("¡Formulario enviado con éxito!", "Se envió un mensaje de confirmación a tu correo electrónico")

        Toast.show({
            type: "success",
            position: 'top',
            text1: 'Formulario enviado con éxito',
            text2: '.',
            visibilityTime: 50,
        })
    }


    useEffect(() => {
        (async () => {
                if (user !== null) {
                    user.providerData.forEach((profile) => {
                        setEmail(profile.email)
                    });
                }
            }
        )();

    }, []);

    const pickImage = async () => {
        const { status } =  await ImagePicker.requestCameraPermissionsAsync();
        if (counter === 25) {
            Alert.alert("Alcanzaste el máximo de fotos", "Máximo de fotos permitidas: 25");
        } else {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [30, 40],
                quality: 0.6,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
              }

            if (result.canceled == true) {
                //Alert.alert("Imagen descartada", "...")
                Toast.show({
                    type: "error",
                    position: 'top',
                    text1: 'Imagen descartada',
                    text2: ' ',
                })

            } else {
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
                    xhr.open("GET", result.assets[0].uri, true);
                    xhr.send(null);
                    setUploading(true);
                });

                var url = Math.floor(Math.random() * 655366545782);

                const storage = getStorage();

                const fileImageRef = ref(storage, 'gs://teste-5e945.appspot.com/Resumos/' + url);
                const upload = await uploadBytes(fileImageRef, blob);


                let UrlDownload = await getDownloadURL(fileImageRef);
                //console.log(UrlDownload)
                setReferencia(UrlDownload)

                blob.close();
                //Alert.alert("Imagen cargada", "...");
                Toast.show({
                    type: "success",
                    position: 'top',
                    text1: 'Imagen cargada',
                    text2: ' ',
                })


                if (UrlDownload) {
                    setCounter(counter + 1);

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

                    });

                    setUploading(false);

                    if (counter == 0) {
                        setF1(UrlDownload);
                    }

                    if (counter == 1) {
                        setF2(UrlDownload);
                    }

                    if (counter == 2) {
                        setF3(UrlDownload);
                    }

                    if (counter == 3) {
                        setF4(UrlDownload);
                    }

                    if (counter == 4) {
                        setF5(UrlDownload);
                    }

                    if (counter == 5) {
                        setF6(UrlDownload);
                    }

                    if (counter == 6) {
                        setF7(UrlDownload);
                    }

                    if (counter == 7) {
                        setF8(UrlDownload);
                    }

                    if (counter == 8) {
                        setF9(UrlDownload);
                    }

                    if (counter == 9) {
                        setF10(UrlDownload);
                    }

                    if (counter == 10) {
                        setF11(UrlDownload);
                    }

                    if (counter == 11) {
                        setF12(UrlDownload);
                    }

                    if (counter == 12) {
                        setF13(UrlDownload);
                    }

                    if (counter == 13) {
                        setF14(UrlDownload);
                    }

                    if (counter == 14) {
                        setF15(UrlDownload);
                    }

                    if (counter == 15) {
                        setF16(UrlDownload);
                    }

                    if (counter == 16) {
                        setF17(UrlDownload);
                    }

                    if (counter == 17) {
                        setF18(UrlDownload);
                    }

                    if (counter == 18) {
                        setF19(UrlDownload);
                    }

                    if (counter == 19) {
                        setF20(UrlDownload);
                    }

                    if (counter == 20) {
                        setF21(UrlDownload);
                    }

                    if (counter == 21) {
                        setF22(UrlDownload);
                    }

                    if (counter == 22) {
                        setF23(UrlDownload);
                    }

                    if (counter == 23) {
                        setF24(UrlDownload);
                    }

                    if (counter == 24) {
                        setF25(UrlDownload);
                    }
                }
            }
        }
    };

    const pickImage2 = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (counter === 25) {
            Alert.alert("Alcanzaste el máximo de fotos ", "máximo de fotos permitido: 25");
        } else {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [30, 40],
                quality: 0.6,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
              }

            if (result.canceled == true) {
                //Alert.alert("Imagen descartada", "...")
                Toast.show({
                    type: "error",
                    position: 'top',
                    text1: 'Imagen descartada',
                    text2: ' ',
                })

            } else {
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
                    xhr.open("GET", result.assets[0].uri, true);
                    xhr.send(null);
                    setUploading(true);
                });

                var url = Math.floor(Math.random() * 655366545782);

                const storage = getStorage();

                const fileImageRef = ref(storage, 'gs://teste-5e945.appspot.com/Resumos/' + url);
                const upload = await uploadBytes(fileImageRef, blob);


                let UrlDownload = await getDownloadURL(fileImageRef);
                //console.log(UrlDownload)
                setReferencia(UrlDownload)

                blob.close();
                //Alert.alert("Imagen cargada", "...");
                Toast.show({
                    type: "success",
                    position: 'top',
                    text1: 'Imagen cargada',
                    text2: ' ',
                })


                if (UrlDownload) {
                    setCounter(counter + 1);

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

                    });

                    setUploading(false);

                    if (counter == 0) {
                        setF1(UrlDownload);
                    }

                    if (counter == 1) {
                        setF2(UrlDownload);
                    }

                    if (counter == 2) {
                        setF3(UrlDownload);
                    }

                    if (counter == 3) {
                        setF4(UrlDownload);
                    }

                    if (counter == 4) {
                        setF5(UrlDownload);
                    }

                    if (counter == 5) {
                        setF6(UrlDownload);
                    }

                    if (counter == 6) {
                        setF7(UrlDownload);
                    }

                    if (counter == 7) {
                        setF8(UrlDownload);
                    }

                    if (counter == 8) {
                        setF9(UrlDownload);
                    }

                    if (counter == 9) {
                        setF10(UrlDownload);
                    }

                    if (counter == 10) {
                        setF11(UrlDownload);
                    }

                    if (counter == 11) {
                        setF12(UrlDownload);
                    }

                    if (counter == 12) {
                        setF13(UrlDownload);
                    }

                    if (counter == 13) {
                        setF14(UrlDownload);
                    }

                    if (counter == 14) {
                        setF15(UrlDownload);
                    }

                    if (counter == 15) {
                        setF16(UrlDownload);
                    }

                    if (counter == 16) {
                        setF17(UrlDownload);
                    }

                    if (counter == 17) {
                        setF18(UrlDownload);
                    }

                    if (counter == 18) {
                        setF19(UrlDownload);
                    }

                    if (counter == 19) {
                        setF20(UrlDownload);
                    }

                    if (counter == 20) {
                        setF21(UrlDownload);
                    }

                    if (counter == 21) {
                        setF22(UrlDownload);
                    }

                    if (counter == 22) {
                        setF23(UrlDownload);
                    }

                    if (counter == 23) {
                        setF24(UrlDownload);
                    }

                    if (counter == 24) {
                        setF25(UrlDownload);
                    }
                }
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8FF', }}>
            <ScrollView style={{ backgrounColor: ' #28D2DE' }}>

                <StatusBar barStyle="light-content" backgroundColor="#054A59" />
                {openModal ===  false &&
<>
                <Text style={styles.titulo}>
                    Envío de Resúmenes
                </Text>
                <Toast />

                <Text style={styles.descricao}>
                    Hola Doc.!, estamos encantados con tu entrega de resumen.
                    Si tienes alguna pregunta puedes hacerla en la plataforma de clases (Hotmart)
                </Text>



                <TouchableOpacity style={styles.buttomFoto} onPress={pickImage2}>

                    <MaterialCommunityIcons
                        name="animation"
                        size={24}
                        color="#ffffff" />

                    <Text style={{
                        color: "#ffffff",
                        textAlign: 'center',
                        marginLeft: 5,
                    }}> Tomar fotos de la galería
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity style={styles.buttomFoto} onPress={pickImage}>

                    <MaterialCommunityIcons
                        name="camera-image"
                        size={24}
                        color="#ffffff" />

                    <Text style={{
                        color: "#ffffff",
                        textAlign: 'center',
                        marginLeft: 5,
                    }}> Tomar fotos con la cámara
                    </Text>

                </TouchableOpacity>



                {/*<ActivityIndicator style={{ marginTop: 25 }} animating={uploading} size={60} color="#054A59" />*/}

                {uploading == true &&
                    <LottieView source={require('../../assets/lf20_6i4bjfle.json')} autoPlay loop  duration={4500}
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

                {uploading == true &&
                <View>
                    <Text style={{fontSize: 10, textAlign: "center", }}>Cargando foto</Text>
                </View>
                }

                <Text style={styles.textCounter}>Total de fotos tomadas: {counter} de 25</Text>

                {referencia != null &&

                    <Text style={styles.textImg}> Total de fotos tomadas:</Text>

                }



                <View style={{ flexDirection: 'row' }}>

                    {f1 != "" &&
                    <>
                        <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f1), setNumero("0")}}>
                            <Image style={styles.img} source={{
                                uri: f1,
                            }} />
                        </TouchableOpacity>
                    </>
                    }
                    
                    {f2 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f2), setNumero("1")}}>
                        <Image style={styles.img} source={{
                            uri: f2,
                        }} />
                    </TouchableOpacity>
                    }

                
                    {f3 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f3), setNumero("2")}}>
                        <Image style={styles.img} source={{
                            uri: f3,
                        }} />
                    </TouchableOpacity>
                    }

                    {f4 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f4), setNumero("3")}}>
                        <Image style={styles.img} source={{
                            uri: f4,
                        }} />
                    </TouchableOpacity>
                    }

                    {f5 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f5), setNumero("4")}}>
                        <Image style={styles.img} source={{
                            uri: f5,
                        }} />
                    </TouchableOpacity>
                    }

                </View>

                <View style={{ flexDirection: 'row' }}>

                    {f6 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f6), setNumero("5")}}>
                        <Image style={styles.img} source={{
                            uri: f6,
                        }} />
                    </TouchableOpacity>
                    }

                    {f7 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f7), setNumero("6")}}>
                        <Image style={styles.img} source={{
                            uri: f7,
                        }} />
                    </TouchableOpacity>
                    }

                    {f8 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f8), setNumero("7")}}>
                        <Image style={styles.img} source={{
                            uri: f8,
                        }} />
                    </TouchableOpacity>
                    }

                    {f9 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f9), setNumero("8")}}>
                        <Image style={styles.img} source={{
                            uri: f9,
                        }} />
                    </TouchableOpacity>
                    }


                    {f10 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f10), setNumero("9")}}>
                        <Image style={styles.img} source={{
                            uri: f10,
                        }} />
                    </TouchableOpacity>
                    }

                </View>

                <View style={{ flexDirection: 'row' }}>

                    {f11 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f11), setNumero("10")}}>
                        <Image style={styles.img} source={{
                            uri: f11,
                        }} />
                    </TouchableOpacity>
                    }

                    {f12 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f12), setNumero("11")}}>
                        <Image style={styles.img} source={{
                            uri: f12,
                        }} />
                    </TouchableOpacity>
                    }

                    {f13 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f13), setNumero("12")}}>
                        <Image style={styles.img} source={{
                            uri: f13,
                        }} />
                    </TouchableOpacity>
                    }

                    {f14 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f14), setNumero("13")}}>
                        <Image style={styles.img} source={{
                            uri: f14,
                        }} />
                    </TouchableOpacity>
                    }

                    {f15 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f15), setNumero("14")}}>
                        <Image style={styles.img} source={{
                            uri: f15,
                        }} />
                    </TouchableOpacity>
                    }

                </View>

                <View style={{ flexDirection: 'row' }}>


                    {f16 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f16), setNumero("15")}}>
                        <Image style={styles.img} source={{
                            uri: f11,
                        }} />
                    </TouchableOpacity>
                    }

                    {f17 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f17), setNumero("16")}}>
                        <Image style={styles.img} source={{
                            uri: f17,
                        }} />
                    </TouchableOpacity>
                    }

                    {f18 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f18), setNumero("17")}}>
                        <Image style={styles.img} source={{
                            uri: f18,
                        }} />
                    </TouchableOpacity>
                    }

                    {f19 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f19), setNumero("18")}}>
                        <Image style={styles.img} source={{
                            uri: f19,
                        }} />
                    </TouchableOpacity>
                    }

                    {f20 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f20), setNumero("19")}}>
                        <Image style={styles.img} source={{
                            uri: f20,
                        }} />
                    </TouchableOpacity>
                    }

                </View>

                <View style={{ flexDirection: 'row' }}>

                    {f21 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f21), setNumero("20")}}>
                        <Image style={styles.img} source={{
                            uri: f21,
                        }} />
                    </TouchableOpacity>
                    }

                    {f22 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f22), setNumero("21")}}>
                        <Image style={styles.img} source={{
                            uri: f22,
                        }} />
                    </TouchableOpacity>
                    }

                    {f23 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f23), setNumero("22")}}>
                        <Image style={styles.img} source={{
                            uri: f23,
                        }} />
                    </TouchableOpacity>
                    }


                    {f24 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f24), setNumero("23")}}>
                        <Image style={styles.img} source={{
                            uri: f24,
                        }} />
                    </TouchableOpacity>
                    }

                    {f25 != "" &&
                    <TouchableOpacity onPress={() => {setOpenModal(true), setRefImg(f25), setNumero("24")}}>
                        <Image style={styles.img} source={{
                            uri: f25,
                        }} />
                    </TouchableOpacity>
                    }

                </View>

                {f1 == "" &&

                    <TouchableOpacity style={styles.buttomEnviarDisable}>

                        <Text style={{
                            color: "#000000",
                            textAlign: 'center',
                        }}>
                            Enviar
                        </Text>

                    </TouchableOpacity>

                }

                {referencia != null && f1 != "" &&

                    <TouchableOpacity style={styles.buttomEnviar} onPress={UploadResumos}>

                        <Text style={{
                            color: "#000000",
                            textAlign: 'center',
                        }}>
                            Enviar
                        </Text>

                    </TouchableOpacity>

                }
        </>

        }

{openModal === true &&
        <Animatable.View animation="fadeIn">
        <View style={{alignContent: 'center', alignItems: "center", justifyContent: 'center', backgroundColor: '#054A59'}}>
            
            <LinearGradient style={{  borderTopLeftRadius: 70, borderTopRightRadius: 70}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#021D24', '#03303B', '#044352', '#055669', '#07768F',]}>
            <Image style={styles.img2} source={{
                uri: refImg,
            }} />

            <View style={{flexDirection: 'row', alignContent: 'center', alignItems: "center", justifyContent: 'center', marginTop: 30, marginBottom: 170}}>

                <TouchableOpacity style={styles.buttomCancelar} onPress={() => {setOpenModal(false)}}> 
                    <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Cancelar</Text>
                    </TouchableOpacity>


            {numero === "0" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF1("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            {numero === "1" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF2("")
                    setCounter2(numero)
                    setCounter(counter - 1)

                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            {numero === "2" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF3("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            {numero === "3" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF4("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            {numero === "4" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF5("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            {numero === "5" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF6("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }            
            
            {numero === "6" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF7("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }            
            
            {numero === "7" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF8("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }


            {numero === "8" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF9("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }            
            
            {numero === "9" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF10("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }            
            
            {numero === "10" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF11("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
            
            {numero === "11" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF12("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            {numero === "12" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF13("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            {numero === "13" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF14("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
            
            {numero === "14" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF15("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            {numero === "15" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF16("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
            
            {numero === "16" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF17("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
        
            {numero === "17" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF18("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
            
            {numero === "18" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF19("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
            
            {numero === "19" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF20("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
            
            {numero === "20" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF21("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            {numero === "21" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF22("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
            
            {numero === "22" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF23("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
            
            {numero === "23" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF24("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }
            
            {numero === "24" &&
                <TouchableOpacity style={styles.buttomExcluir}
                onPress={() => {
                    setOpenModal(false)
                    setF25("")
                    setCounter2(numero)
                    setCounter(counter - 1)
                }
                }
           
               > 
                <Text style={{color: "#FFF", textAlign: "center", fontSize: 20}}>Eliminar</Text>
                </TouchableOpacity>
            }

            </View>
            </LinearGradient>
            
        </View>
        </Animatable.View>

        }

            </ScrollView>

        </SafeAreaView >

    );


} 