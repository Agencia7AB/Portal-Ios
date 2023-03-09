import React, {useState, useEffect} from "react"
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign} from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, getFirestore} from "firebase/firestore";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./style"


export default function Modulo8C({ navigation }) {

    const auth = getAuth();
    const user = auth.currentUser;
    const [email, setEmail] = useState("");
    const [grupo, setGrupo] = useState("");
    const [retorno2, setRetorno2] = useState([]);
    const [retorno3, setRetorno3] = useState([]);
    const [retorno4, setRetorno4] = useState([]);
    const [retorno5, setRetorno5] = useState([]);
    const [retorno6, setRetorno6] = useState([]);
    const [retorno7, setRetorno7] = useState([]);
    const [retorno8, setRetorno8] = useState([]);
    const [retorno9, setRetorno9] = useState([]);
   
    useEffect(() => {
                if (user !== null) {
                    user.providerData.forEach((profile) => {
                        setEmail(profile.email)
                    });
                } 
            },[]);
            
           
           async function getGrupo () {
                    const db = getFirestore();
                    const citiesRef = collection(db, "Usuarios");
                    const q = query(citiesRef, where("email", "==", email));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data());
                        setGrupo(doc.data().grupo)
                    });
            } 
       
            
              async function Grupo2() {
                  
                    const db = getFirestore();
                    const citiesRef = collection(db, "Resumos");
                    const q = query(citiesRef, where("formÇ", "==", 'Módulo 8'), where("email", "==", email));
                    let array = [];

                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data());

                        const Obj = {
                            id: doc.id,
                            email: doc.data().email,
                            nome: doc.data().nome,
                            grupo: doc.data().ifoUsuario,
                            urlImg: doc.data().urlImg,
                            form: doc.data().formÇ,
                            status: doc.data().status
                        };
                        array.push(Obj)
                    });

                    setRetorno2(array)
            }
            
             useEffect(() => {
                Grupo2();
                getGrupo();
            }, [email])

            async function Grupo3() {
                    
                const db = getFirestore();
                const citiesRef = collection(db, "Resumos");
                const q = query(citiesRef, where("formT", "==", 'Módulo 8'), where("email", "==", email));
                let array = [];

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());

                    const Obj = {
                        id: doc.id,
                        email: doc.data().email,
                        nome: doc.data().nome,
                        grupo: doc.data().ifoUsuario,
                        urlImg: doc.data().urlImg,
                        form: doc.data().nomeForm,
                        status: doc.data().status
                    };
                    array.push(Obj)
                });

                setRetorno3(array)
            }

            useEffect(() => {
                Grupo3();
                getGrupo();
            }, [email])

            async function Grupo4() {
                    
                const db = getFirestore();
                const citiesRef = collection(db, "Resumos");
                const q = query(citiesRef, where("formX", "==", 'Módulo 8'), where("email", "==", email));
                let array = [];

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());

                    const Obj = {
                        id: doc.id,
                        email: doc.data().email,
                        nome: doc.data().nome,
                        grupo: doc.data().ifoUsuario,
                        urlImg: doc.data().urlImg,
                        form: doc.data().nomeForm,
                        status: doc.data().status
                    };
                    array.push(Obj)
                });
                
                setRetorno4(array)
            }

            useEffect(() => {
                Grupo4();
                getGrupo();
            }, [email])


            async function Grupo5() {
                    
                const db = getFirestore();
                const citiesRef = collection(db, "Resumos");
                const q = query(citiesRef, where("formK", "==", 'Módulo 8'), where("email", "==", email));
                let array = [];

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());

                    const Obj = {
                        id: doc.id,
                        email: doc.data().email,
                        nome: doc.data().nome,
                        grupo: doc.data().ifoUsuario,
                        urlImg: doc.data().urlImg,
                        form: doc.data().nomeForm,
                        status: doc.data().status
                    };
                    array.push(Obj)
                });
                
                setRetorno5(array)
            }

            useEffect(() => {
                Grupo5();
                getGrupo();
            }, [email])

            async function Grupo6() {
                    
                const db = getFirestore();
                const citiesRef = collection(db, "Resumos");
                const q = query(citiesRef, where("formP", "==", 'Módulo 8'), where("email", "==", email));
                let array = [];

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());

                    const Obj = {
                        id: doc.id,
                        email: doc.data().email,
                        nome: doc.data().nome,
                        grupo: doc.data().ifoUsuario,
                        urlImg: doc.data().urlImg,
                        form: doc.data().nomeForm,
                        status: doc.data().status
                    };
                    array.push(Obj)
                });
                
                setRetorno6(array)
            }

            useEffect(() => {
                Grupo6();
                getGrupo();
            }, [email])

            async function Grupo7() {
                    
                const db = getFirestore();
                const citiesRef = collection(db, "Resumos");
                const q = query(citiesRef, where("formW", "==", 'Módulo 8'), where("email", "==", email));
                let array = [];

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());

                    const Obj = {
                        id: doc.id,
                        email: doc.data().email,
                        nome: doc.data().nome,
                        grupo: doc.data().ifoUsuario,
                        urlImg: doc.data().urlImg,
                        form: doc.data().nomeForm,
                        status: doc.data().status
                    };
                    array.push(Obj)
                });
                
                setRetorno7(array)
            }

            useEffect(() => {
                Grupo7();
                getGrupo();
            }, [email])

            async function Grupo8() {
                    
                const db = getFirestore();
                const citiesRef = collection(db, "Resumos");
                const q = query(citiesRef, where("formG", "==", 'Módulo 8'), where("email", "==", email));
                let array = [];

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());

                    const Obj = {
                        id: doc.id,
                        email: doc.data().email,
                        nome: doc.data().nome,
                        grupo: doc.data().ifoUsuario,
                        urlImg: doc.data().urlImg,
                        form: doc.data().nomeForm,
                        status: doc.data().status
                    };
                    array.push(Obj)
                });
                
                setRetorno8(array)
            }

            useEffect(() => {
                Grupo8();
                getGrupo();
            }, [email])

            async function Grupo9() {
                    
                const db = getFirestore();
                const citiesRef = collection(db, "Resumos");
                const q = query(citiesRef, where("formAB", "==", 'Módulo 8'), where("email", "==", email));
                let array = [];

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());

                    const Obj = {
                        id: doc.id,
                        email: doc.data().email,
                        nome: doc.data().nome,
                        grupo: doc.data().ifoUsuario,
                        urlImg: doc.data().urlImg,
                        form: doc.data().nomeForm,
                        status: doc.data().status
                    };
                    array.push(Obj)
                });
                
                setRetorno9(array)
            }

            useEffect(() => {
                Grupo9();
                getGrupo();
            }, [email])


        return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#054A59' }}>
            <StatusBar barStyle="light-content" backgroundColor="#054A59" />
            <LinearGradient style={{  borderTopLeftRadius: 70, borderTopRightRadius: 70, flex: 1}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#021D24', '#03303B', '#044352', '#055669', '#07768F',]}>
            <ScrollView>

                <View style={{alignItems: 'center', alignContent: 'center', marginTop: 80}}>

                    {grupo === 'Grupo2' && 
                        <>
                                <View>
                                    <Text style ={{color: '#fff', fontSize: 25, textAlign: 'center'}}> Resúmenes Enviados</Text>
                                </View>

                                {retorno2.length === 0 && 
                                            <View>
                                                <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center', marginTop: 100, fontWeight: 'bold'}}> Su tarea aún no está disponible para su visualización o aún no ha enviado esta actividad</Text>
                                            </View>
                                }

                                {retorno2 && retorno2.map((item, index) => {
                                    return(
                                        <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                            
                                        {item.urlImg[0] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[0],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[1] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[1],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[2] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[2],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[3] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[3],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[4] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[4],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[5] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[5],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[6] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[6],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[7] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[7],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[8] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[8],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[9] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[9],
                                                }} />
                                
                                            </View>
                                        }

                                        {item.urlImg[10] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[10],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[11] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[11],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[12] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[12],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[13] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[13],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[14] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[14],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[15] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[15],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[16] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[16],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[17] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[17],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[18] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[18],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[19] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[19],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[20] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[20],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[21] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[21],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[22] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[22],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[23] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[23],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[24] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[24],
                                                }} />
                                            </View>
                                        }
                                    </ScrollView>
                                    
                                    )
                                })}

                                {retorno2 && retorno2.map((item, index) => {
                                    return (
                                        <View>

                                        {item.urlImg[0] !== "" &&
                                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginTop: 30 , marginBottom: 30}}>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center'}}> 
                                            <AntDesign
                                                name="caretleft"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginRight: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center', marginLeft: 40}}> 
                                            <AntDesign
                                                name="caretright"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginLeft: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>
                                        </View>
                                    }

                                    </View>
                                    )

                                })}

                                </>
                            }


                            {grupo === 'Grupo3' && 
                                <>
                                <View>
                                    <Text style ={{color: '#fff', fontSize: 25, textAlign: 'center'}}> Resúmenes Enviados</Text>
                                </View>

                                {retorno3.length === 0 && 
                                            <View>
                                                <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center', marginTop: 100, fontWeight: 'bold'}}> Su tarea aún no está disponible para su visualización o aún no ha enviado esta actividad</Text>
                                            </View>
                                }

                                {retorno3 && retorno3.map((item, index) => {
                                    return(
                                        <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                            
                                        {item.urlImg[0] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[0],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[1] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[1],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[2] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[2],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[3] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[3],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[4] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[4],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[5] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[5],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[6] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[6],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[7] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[7],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[8] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[8],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[9] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[9],
                                                }} />
                                
                                            </View>
                                        }

                                        {item.urlImg[10] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[10],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[11] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[11],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[12] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[12],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[13] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[13],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[14] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[14],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[15] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[15],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[16] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[16],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[17] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[17],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[18] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[18],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[19] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[19],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[20] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[20],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[21] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[21],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[22] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[22],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[23] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[23],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[24] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[24],
                                                }} />
                                            </View>
                                        }
                                    </ScrollView>
                                    
                                    )
                                })}

                                {retorno3 && retorno3.map((item, index) => {
                                    return (
                                        <View>

                                        {item.urlImg[0] !== "" &&
                                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginTop: 30 , marginBottom: 30}}>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center'}}> 
                                            <AntDesign
                                                name="caretleft"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginRight: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center', marginLeft: 40}}> 
                                            <AntDesign
                                                name="caretright"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginLeft: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>
                                        </View>
                                    }

                                    </View>
                                    )

                                })}

                                </>
                            }

                            {grupo === 'Grupo4' && 
                                <>
                                <View>
                                    <Text style ={{color: '#fff', fontSize: 25, textAlign: 'center'}}> Resúmenes Enviados</Text>
                                </View>

                                {retorno4.length === 0 && 
                                            <View>
                                                <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center', marginTop: 100, fontWeight: 'bold'}}> Su tarea aún no está disponible para su visualización o aún no ha enviado esta actividad</Text>
                                            </View>
                                }

                                {retorno4 && retorno4.map((item, index) => {
                                    return(
                                        <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                            
                                        {item.urlImg[0] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[0],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[1] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[1],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[2] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[2],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[3] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[3],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[4] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[4],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[5] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[5],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[6] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[6],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[7] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[7],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[8] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[8],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[9] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[9],
                                                }} />
                                
                                            </View>
                                        }

                                        {item.urlImg[10] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[10],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[11] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[11],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[12] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[12],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[13] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[13],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[14] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[14],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[15] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[15],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[16] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[16],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[17] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[17],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[18] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[18],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[19] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[19],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[20] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[20],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[21] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[21],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[22] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[22],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[23] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[23],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[24] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[24],
                                                }} />
                                            </View>
                                        }
                                    </ScrollView>
                                    
                                    )
                                })}

                                {retorno4 && retorno4.map((item, index) => {
                                    return (
                                        <View>

                                        {item.urlImg[0] !== "" &&
                                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginTop: 30 , marginBottom: 30}}>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center'}}> 
                                            <AntDesign
                                                name="caretleft"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginRight: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center', marginLeft: 40}}> 
                                            <AntDesign
                                                name="caretright"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginLeft: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>
                                        </View>
                                    }

                                    </View>
                                    )

                                })}

                                </>
                            }

                                {grupo === 'Grupo5' && 
                                <>
                                <View>
                                    <Text style ={{color: '#fff', fontSize: 25, textAlign: 'center'}}> Resúmenes Enviados</Text>
                                </View>

                                {retorno5.length === 0 && 
                                            <View>
                                                <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center', marginTop: 100, fontWeight: 'bold'}}> Su tarea aún no está disponible para su visualización o aún no ha enviado esta actividad</Text>
                                            </View>
                                }

                                {retorno5 && retorno5.map((item, index) => {
                                    return(
                                        <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                            
                                        {item.urlImg[0] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[0],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[1] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[1],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[2] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[2],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[3] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[3],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[4] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[4],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[5] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[5],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[6] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[6],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[7] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[7],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[8] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[8],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[9] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[9],
                                                }} />
                                
                                            </View>
                                        }

                                        {item.urlImg[10] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[10],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[11] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[11],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[12] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[12],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[13] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[13],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[14] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[14],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[15] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[15],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[16] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[16],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[17] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[17],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[18] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[18],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[19] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[19],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[20] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[20],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[21] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[21],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[22] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[22],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[23] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[23],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[24] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[24],
                                                }} />
                                            </View>
                                        }
                                    </ScrollView>
                                    
                                    )
                                })}

                                {retorno5 && retorno5.map((item, index) => {
                                    return (
                                        <View>

                                        {item.urlImg[0] !== "" &&
                                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 30}}>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center'}}> 
                                            <AntDesign
                                                name="caretleft"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginRight: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center', marginLeft: 40}}> 
                                            <AntDesign
                                                name="caretright"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginLeft: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>
                                        </View>
                                    }

                                    </View>
                                    )

                                })}

                                </>
                            }

                            {grupo === 'Grupo6' && 
                                <>
                                <View>
                                    <Text style ={{color: '#fff', fontSize: 25, textAlign: 'center'}}> Resúmenes Enviados</Text>
                                </View>

                                {retorno6.length === 0 && 
                                            <View>
                                                <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center', marginTop: 100, fontWeight: 'bold'}}> Su tarea aún no está disponible para su visualización o aún no ha enviado esta actividad</Text>
                                            </View>
                                }

                                {retorno6 && retorno6.map((item, index) => {
                                    return(
                                        <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                            
                                        {item.urlImg[0] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[0],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[1] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[1],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[2] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[2],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[3] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[3],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[4] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[4],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[5] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[5],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[6] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[6],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[7] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[7],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[8] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[8],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[9] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[9],
                                                }} />
                                
                                            </View>
                                        }

                                        {item.urlImg[10] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[10],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[11] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[11],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[12] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[12],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[13] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[13],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[14] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[14],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[15] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[15],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[16] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[16],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[17] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[17],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[18] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[18],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[19] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[19],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[20] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[20],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[21] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[21],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[22] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[22],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[23] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[23],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[24] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[24],
                                                }} />
                                            </View>
                                        }
                                    </ScrollView>
                                    
                                    )
                                })}

                                {retorno6 && retorno6.map((item, index) => {
                                    return (
                                        <View>

                                        {item.urlImg[0] !== "" &&
                                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 30}}>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center'}}> 
                                            <AntDesign
                                                name="caretleft"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginRight: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center', marginLeft: 40}}> 
                                            <AntDesign
                                                name="caretright"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginLeft: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>
                                        </View>
                                    }

                                    </View>
                                    )

                                })}

                                </>
                            }

                            {grupo === 'Grupo7' && 
                                <>
                                <View>
                                    <Text style ={{color: '#fff', fontSize: 25, textAlign: 'center'}}> Resúmenes Enviados</Text>
                                </View>

                                {retorno7.length === 0 && 
                                            <View>
                                                <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center', marginTop: 100, fontWeight: 'bold'}}> Su tarea aún no está disponible para su visualización o aún no ha enviado esta actividad</Text>
                                            </View>
                                }

                                {retorno7 && retorno7.map((item, index) => {
                                    return(
                                        <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                            
                                        {item.urlImg[0] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[0],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[1] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[1],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[2] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[2],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[3] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[3],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[4] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[4],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[5] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[5],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[6] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[6],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[7] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[7],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[8] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[8],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[9] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[9],
                                                }} />
                                
                                            </View>
                                        }

                                        {item.urlImg[10] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[10],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[11] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[11],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[12] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[12],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[13] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[13],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[14] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[14],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[15] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[15],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[16] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[16],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[17] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[17],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[18] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[18],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[19] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[19],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[20] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[20],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[21] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[21],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[22] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[22],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[23] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[23],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[24] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[24],
                                                }} />
                                            </View>
                                        }
                                    </ScrollView>
                                    
                                    )
                                })}

                                {retorno7 && retorno7.map((item, index) => {
                                    return (
                                        <View>

                                        {item.urlImg[0] !== "" &&
                                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 30}}>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center'}}> 
                                            <AntDesign
                                                name="caretleft"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginRight: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center', marginLeft: 40}}> 
                                            <AntDesign
                                                name="caretright"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginLeft: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>
                                        </View>
                                    }

                                    </View>
                                    )

                                })}

                                </>
                            }


                            {grupo === 'Grupo8' && 
                                <>
                                <View>
                                    <Text style ={{color: '#fff', fontSize: 25, textAlign: 'center'}}> Resúmenes Enviados</Text>
                                </View>

                                {retorno8.length === 0 && 
                                            <View>
                                                <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center', marginTop: 100, fontWeight: 'bold'}}> Su tarea aún no está disponible para su visualización o aún no ha enviado esta actividad</Text>
                                            </View>
                                }

                                {retorno8 && retorno8.map((item, index) => {
                                    return(
                                        <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                            
                                        {item.urlImg[0] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[0],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[1] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[1],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[2] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[2],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[3] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[3],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[4] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[4],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[5] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[5],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[6] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[6],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[7] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[7],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[8] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[8],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[9] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[9],
                                                }} />
                                
                                            </View>
                                        }

                                        {item.urlImg[10] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[10],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[11] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[11],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[12] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[12],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[13] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[13],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[14] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[14],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[15] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[15],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[16] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[16],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[17] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[17],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[18] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[18],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[19] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[19],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[20] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[20],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[21] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[21],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[22] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[22],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[23] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[23],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[24] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[24],
                                                }} />
                                            </View>
                                        }
                                    </ScrollView>
                                    
                                    )
                                })}

                                {retorno8 && retorno8.map((item, index) => {
                                    return (
                                        <View>

                                        {item.urlImg[0] !== "" &&
                                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 30}}>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center'}}> 
                                            <AntDesign
                                                name="caretleft"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginRight: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center', marginLeft: 40}}> 
                                            <AntDesign
                                                name="caretright"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginLeft: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>
                                        </View>
                                    }

                                    </View>
                                    )

                                })}

                                </>
                            }

                            {grupo === 'Grupo9' && 
                                <>
                                <View>
                                    <Text style ={{color: '#fff', fontSize: 25, textAlign: 'center'}}> Resúmenes Enviados</Text>
                                </View>

                                {retorno9.length === 0 && 
                                            <View>
                                                <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center', marginTop: 100, fontWeight: 'bold'}}> Su tarea aún no está disponible para su visualización o aún no ha enviado esta actividad</Text>
                                            </View>
                                }

                                {retorno9 && retorno9.map((item, index) => {
                                    return(
                                        <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                            
                                        {item.urlImg[0] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[0],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[1] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[1],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[2] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[2],
                                                }} />
                                            </View>

                                        }

                                        {item.urlImg[3] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[3],
                                                }} />

                                            </View>
                                        }

                                        {item.urlImg[4] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[4],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[5] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[5],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[6] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[6],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[7] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[7],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[8] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[8],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[9] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[9],
                                                }} />
                                
                                            </View>
                                        }

                                        {item.urlImg[10] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[10],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[11] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[11],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[12] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[12],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[13] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[13],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[14] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[14],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[15] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[15],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[16] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[16],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[17] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[17],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[18] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[18],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[19] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[19],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[20] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[20],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[21] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[21],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[22] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[22],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[23] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[23],
                                                }} />
                                            </View>
                                        }

                                        {item.urlImg[24] !== "" &&
                                            <View>
                                                <Text style={{color: 'transparent'}}>key == {index}</Text>
                                                <Image style={styles.img} source={{
                                                    uri: item.urlImg[24],
                                                }} />
                                            </View>
                                        }
                                    </ScrollView>
                                    
                                    )
                                })}

                                {retorno9 && retorno9.map((item, index) => {
                                    return (
                                        <View>

                                        {item.urlImg[0] !== "" &&
                                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 30}}>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center'}}> 
                                            <AntDesign
                                                name="caretleft"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginRight: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>

                                            <Text style={{color: '#FFF', forntSize: 20, textAlign: 'center', marginLeft: 40}}> 
                                            <AntDesign
                                                name="caretright"
                                                size={40}
                                                color="#ffffff"
                                                style={{ marginLeft: 5, justifyContent: 'center', alignContent: 'center' }}
                                            />
                                            </Text>
                                        </View>
                                    }

                                    </View>
                                    )

                                })}

                                </>
                            }
                </View>

            </ScrollView>
            </LinearGradient>
        </SafeAreaView >

    );
}