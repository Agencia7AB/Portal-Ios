import React, {useState, useEffect}from "react"
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Alert } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from "expo-linear-gradient";
import { collection, query, where, getDocs, getFirestore, } from "firebase/firestore";
import { getAuth } from "firebase/auth";


import styles from "./style"

export default function Home({ navigation }) {

    const auth = getAuth();
    const user = auth.currentUser;
    const [email, setEmail]= useState("");

    const [retorno2, setRetorno2] = useState([]);
    const [retorno3, setRetorno3] = useState([]);
    const [retorno4, setRetorno4] = useState([]);

    const [retorno5, setRetorno5] = useState([]);
    const [retorno6, setRetorno6] = useState([]);
    const [retorno7, setRetorno7] = useState([]);
    

    useEffect(() => {
        if (user !== null) {
            user.providerData.forEach((profile) => {
                setEmail(profile.email)
            });
        } 
    },[]);

    const getM1A = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Análisis Facial'), where("email", "==", email));
        let array = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());

            const Obj = {
                id: doc.id,
                email: doc.data().email,
                nome: doc.data().ifoUsuario.nome,
                grupo: doc.data().ifoUsuario.grupo,
                urlImg: doc.data().urlImg,
                form: doc.data().nomeForm,
                status: doc.data().status
            };
            array.push(Obj)
        });

        setRetorno2(array)
    }

    useEffect(() => {
        getM1A();
    }, [email])

    const getM1C = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Cefalometría'), where("email", "==", email));
        let array = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());

            const Obj = {
                id: doc.id,
                email: doc.data().email,
                nome: doc.data().ifoUsuario.nome,
                grupo: doc.data().ifoUsuario.grupo,
                urlImg: doc.data().urlImg,
                form: doc.data().nomeForm,
                status: doc.data().status
            };
            array.push(Obj)
        });

        setRetorno3(array)
    }

    useEffect(() => {
        getM1C();
    }, [email])


    const getM1CPDF = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Cefalometría (pdf webceph)'), where("email", "==", email));
        let array = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());

            const Obj = {
                id: doc.id,
                email: doc.data().email,
                nome: doc.data().ifoUsuario.nome,
                grupo: doc.data().ifoUsuario.grupo,
                urlImg: doc.data().urlImg,
                form: doc.data().nomeForm,
                status: doc.data().status
            };
            array.push(Obj)
        });

        setRetorno4(array)
    }

    useEffect(() => {
        getM1CPDF();
    }, [email])

    const getM1A2 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Análisis Facial'), where("email", "==", email));
        let array = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());

            const Obj = {
                email: doc.data().email,
                form: doc.data().nomeForm,
                status: doc.data().status
            };
            array.push(Obj)
        });

        setRetorno5(array)
    }

    useEffect(() => {
        getM1A2();
    }, [email])


    const getM1C2 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Cefalometría'), where("email", "==", email));
        let array = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());

            const Obj = {
                email: doc.data().email,
                form: doc.data().nomeForm,
                status: doc.data().status
            };
            array.push(Obj)
        });

        setRetorno6(array)
    }

    useEffect(() => {
        getM1C2();
    }, [email])

    const getM1CPDF2 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Cefalometría (pdf webceph)'), where("email", "==", email));
        let array = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());

            const Obj = {
                email: doc.data().email,
                form: doc.data().nomeForm,
                status: doc.data().status
            };
            array.push(Obj)
        });

        setRetorno7(array)
    }

    useEffect(() => {
        getM1CPDF2();
    }, [email])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#054A59' }}>
            <StatusBar barStyle="light-content" backgroundColor="#054A59" />
            <LinearGradient style={{  borderTopLeftRadius: 70, borderTopRightRadius: 70, height: 900}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#021D24', '#03303B', '#044352', '#055669', '#07768F',]}>
            <ScrollView >

           
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, }}>
                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginRight: 55,
                        }}
                        onPress={() => {
                            if(retorno2.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno5.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                            navigation.navigate("AnalisisFacial")
                            }
                            }}>
                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />
                        <Text style={styles.textButton}>
                            Análisis Facial
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginLeft: 55,
                        }}
                        onPress={() => {
                            if(retorno3.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno6.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                            navigation.navigate("Cefalometria")
                            }
                        }
                        }>

                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Cefalometría
                        </Text>

                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 30, }}>
                    <TouchableOpacity

                        onPress={() => {
                            if(retorno4.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno7.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                            navigation.navigate("TareadeCefalometria")
                            }
                        
                        }}>
                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"

                            style={{
                                marginLeft: 55
                            }}
                        />
                        <View style={{ textAlign: 'center', }}>
                            <Text style={{
                                color: "#f8f8ff",
                                fontSize: 20,
                                textAlign: 'center',
                                marginLeft: 30
                            }}>
                                Cefalometría {'\n'}(pdf webceph)
                            </Text>

                        </View>
                    </TouchableOpacity>
                </View>
           
            </ScrollView>
            </LinearGradient>
        </SafeAreaView >

    );
}