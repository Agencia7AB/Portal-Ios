import React, {useState, useEffect} from "react"
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Alert} from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'//ícones
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
    const [retorno8, setRetorno8] = useState([]);
    const [retorno9, setRetorno9] = useState([]);
    const [retorno10, setRetorno10] = useState([]);

    const [retorno12, setRetorno12] = useState([]);
    const [retorno13, setRetorno13] = useState([]);
    const [retorno14, setRetorno14] = useState([]);
    const [retorno15, setRetorno15] = useState([]);
    const [retorno16, setRetorno16] = useState([]);
    const [retorno17, setRetorno17] = useState([]);
    const [retorno18, setRetorno18] = useState([]);
    const [retorno19, setRetorno19] = useState([]);
    const [retorno20, setRetorno20] = useState([]);

    useEffect(() => {
        if (user !== null) {
            user.providerData.forEach((profile) => {
                setEmail(profile.email)
            });
        } 
    },[]);

    const getM1G2 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 2'), where("email", "==", email));
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
        getM1G2();
    }, [email])

    const getM1G3 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 3'), where("email", "==", email));
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
        getM1G3();
    }, [email])


    const getM1G4 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 4'), where("email", "==", email));
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
        getM1G4();
    }, [email])

    const getM1G5 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 5'), where("email", "==", email));
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

        setRetorno5(array)
    }

    useEffect(() => {
        getM1G5();
    }, [email])

    const getM1G6 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 6'), where("email", "==", email));
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

        setRetorno6(array)
    }

    useEffect(() => {
        getM1G6();
    }, [email])

    const getM1G7 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 7'), where("email", "==", email));
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

        setRetorno7(array)
    }

    useEffect(() => {
        getM1G7();
    }, [email])


    const getM1G8 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 8'), where("email", "==", email));
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

        setRetorno8(array)
    }

    useEffect(() => {
        getM1G8();
    }, [email])

    const getM1G9 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 9'), where("email", "==", email));
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

        setRetorno9(array)
    }

    useEffect(() => {
        getM1G9();
    }, [email])

    const getM1G10 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Resumos");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 10'), where("email", "==", email));
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

        setRetorno10(array)
    }

    useEffect(() => {
        getM1G10();
    }, [email])

    const getM1G2_1 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 2'), where("email", "==", email));
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

        setRetorno12(array)
    }

    useEffect(() => {
        getM1G2_1();
    }, [email])

    const getM1G3_1 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 3'), where("email", "==", email));
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

        setRetorno13(array)
    }

    useEffect(() => {
        getM1G3_1();
    }, [email])

    const getM1G4_1 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 4'), where("email", "==", email));
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

        setRetorno14(array)
    }

    useEffect(() => {
        getM1G4_1();
    }, [email])

    const getM1G5_1 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 5'), where("email", "==", email));
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

        setRetorno15(array)
    }

    useEffect(() => {
        getM1G5_1();
    }, [email])

    const getM1G6_1 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 6'), where("email", "==", email));
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

        setRetorno16(array)
    }

    useEffect(() => {
        getM1G6_1();
    }, [email])


    const getM1G7_1 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 7'), where("email", "==", email));
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

        setRetorno17(array)
    }

    useEffect(() => {
        getM1G7_1();
    }, [email])

    const getM1G8_1 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 8'), where("email", "==", email));
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

        setRetorno18(array)
    }

    useEffect(() => {
        getM1G8_1();
    }, [email])

    const getM1G9_1 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 9'), where("email", "==", email));
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

        setRetorno19(array)
    }

    useEffect(() => {
        getM1G9_1();
    }, [email])

    const getM1G20_1 = async () => {

        const db = getFirestore();
        const citiesRef = collection(db, "Concluido");
        const q = query(citiesRef, where("nomeForm", "==", 'Módulo 10'), where("email", "==", email));
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

        setRetorno20(array)
    }

    useEffect(() => {
        getM1G20_1();
    }, [email])


    //be75dabd-b4d2-4bf8-b6fa-cdc3fe6b4a00

    return (
        //corpo da página
        <SafeAreaView style={{ backgroundColor: '#054A59', }}>
            {/*botões dos módulos */}
            <LinearGradient style={{  borderTopLeftRadius: 70, borderTopRightRadius: 70}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#021D24', '#03303B', '#044352', '#055669', '#07768F',]}>
            <ScrollView>

                <StatusBar barStyle="light-content" backgroundColor="#054A59" />
              
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, }}>

                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginRight: 55,
                        }}
                        onPress={() => navigation.navigate("HomeModulo1")}>

                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 1
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
                            if(retorno2.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno12.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                                navigation.navigate("Modulo2")
                            }
                        }
                        }>

                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 2
                        </Text>

                    </TouchableOpacity>

                </View>


                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 15, }}>

                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginRight: 55,
                        }}
                        onPress={() => {
                            if(retorno3.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if (retorno13.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                            navigation.navigate("Modulo3")
                            }
                        }}>
                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 3
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
                            if(retorno4.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno14.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                            navigation.navigate("Modulo4")
                            }
                        }}>

                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 4
                        </Text>

                    </TouchableOpacity>

                </View>


                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 15, }}>

                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginRight: 55,
                        }}
                        onPress={() => {
                            if(retorno5.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno15.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                            navigation.navigate("Modulo5")
                            }
                        }}>
                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 5
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
                            if(retorno6.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno16.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                            navigation.navigate("Modulo6")
                            }
                            }}>

                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 6
                        </Text>

                    </TouchableOpacity>

                </View>


                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 15, }}>

                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginRight: 55,
                        }}
                        onPress={() => {
                            if(retorno7.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno17.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                            navigation.navigate("Modulo7")
                            }
                        }}>
                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />
                        <Text style={styles.textButton}>
                            Módulo 7
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
                            if(retorno8.length === 1){
                                    Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno18.length === 1){
                                    Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                                navigation.navigate("Modulo8")
                            }
                        }}>

                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 8
                        </Text>

                    </TouchableOpacity>

                </View>


                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 60 }}>

                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginRight: 65,
                        }}
                        onPress={() => {
                            if(retorno9.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno19.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                                navigation.navigate("Modulo9")
                            }
                        }}>
                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 9
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
                            if(retorno10.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Te devolveremos cuando se corrija el resumen")
                            }else if(retorno20.length === 1){
                                Alert.alert("Este resumen ya ha sido enviado", "Tu resumen ya fue corregido y aprobado")
                            }else{
                                navigation.navigate("Modulo10")
                            }
                        }}>

                        <FontAwesome
                            name="book"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 10
                        </Text>

                    </TouchableOpacity>

                </View>
            </ScrollView>
            </LinearGradient>
        </SafeAreaView>

    );
}
