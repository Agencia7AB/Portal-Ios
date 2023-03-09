import React, {useEffect, useState} from "react"
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Alert, Image, ScrollView, Platform } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";//importação dos ícones
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import { collection, query, where, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import styles from "./style"



export default function Principal({ navigation }) {

    const auth = getAuth();
    const user = auth.currentUser;
    const [email, setEmail]= useState("");
    const [nome, setNome] = useState("")
    const [cont, setCont] = useState(0)
    const [compra, setCompra] = useState("")

    useEffect(() => {
        if (user !== null) {
            user.providerData.forEach((profile) => {
                setEmail(profile.email)
            });
        } 
        for (var i = 0; i <= 2; i++) {
            setCont(cont + i)
        }
    },[]);

    const getNome = async () => {
            const db = getFirestore();
            
            const citiesRef = collection(db, "Usuarios");
            const q = query(citiesRef, where("email", "==", email));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            
                setNome(doc.data().nome);
            
            });
    }

    const getAsinatura = async () => {
            const db = getFirestore();
            
            const citiesRef = collection(db, "Compra");
            const q = query(citiesRef, where("email", "==", email));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            
            setCompra(doc.data().email);
            
            });
        
    }

    useEffect(() =>{
            getNome();
            getAsinatura();
    },[cont])

    //corpo da página
    return (
        <SafeAreaView style={{ backgroundColor: '#054A59', }}>
            <View>
            <LinearGradient style={{  borderTopLeftRadius: 70, borderTopRightRadius: 70}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#021D24', '#03303B', '#044352', '#055669', '#07768F',]}>
            <ScrollView>
               <StatusBar barStyle="light-content" backgroundColor="#054A59" />
                
                {/*Logo OSF (ess url está vindo do firebase storage) */}
                <Animatable.View style={styles.divImg}
                animation="fadeInDown"
                >
                    <Image style={styles.img} source={{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/teste-5e945.appspot.com/o/Logos%2FLogo-OSF---BRANCO.png?alt=media&token=7645261d-d233-404b-bfd9-b61b172ce0d0',
                    }} />
                </Animatable.View>

                <Text style={{color: "#FFF", textAlign: "center", fontSize: 17, marginBottom: 45 }}>Hola {nome}, elija la {'\n'}opción que desea:</Text>
                
                {/* botões de ação do usuario*/}
                
                <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                
                    <Animatable.View
                    animation="fadeInLeftBig"
                    >
                        <TouchableOpacity style={{ backgroundColor: '#FFF', width: 210, height: 60, marginBottom: 10, borderRadius: 20,  }}
                            onPress={() => navigation.navigate("Escolha")}
                        >
                            <View style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
                                <Text style={{ color: '#000', fontSize: 17, textAlign: 'center', marginTop: 15, }}>Envío de Resúmenes</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </Animatable.View>

                    {Platform.OS === 'android' &&
                        <>    
                            <Animatable.View
                            animation="fadeInRightBig"
                            >
                            
                                <TouchableOpacity style={{ backgroundColor: '#FFF', width: 210, height: 60, borderRadius: 20, marginTop: 10 }}
                                    onPress={() => Alert.alert("Este recurso estará disponible pronto", "")}
                                >
                                    <Text style={{ color: '#000', fontSize: 17, textAlign: 'center', marginTop: 15, }}>Solicitud de Certificados</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        </>
                    }

                    <TouchableOpacity style={{ backgroundColor: '#EB1B00', width: 110, height: 50, marginTop: 45, borderRadius: 30, marginBottom: 30 }}
                        onPress={() => {
                            Alert.alert(
                                "¿Quieres salir?",
                                "",
                                [
                                    {
                                        text: "No",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                    },
                                    { text: "Sí", onPress: () => navigation.navigate("Login") }
                                ]
                            );
                        }
                        }
                    >
                        <View style={{alignContent: 'center', alignItems: 'center', marginTop: 10}}>
                            <Text style={{textAlign: 'center', fontSize: 17, color: '#FFF'}}>Salir</Text>
                        </View>
                    </TouchableOpacity>

                    {Platform.OS === 'ios' &&
                        <>
                            <TouchableOpacity style={{ backgroundColor: 'transparent', marginTop: 45, borderRadius: 30, marginBottom: 30 }}
                                    onPress={() => {
                                        if(compra === ""){
                                            navigation.navigate("Hotmart")
                                        }else {
                                            Alert.alert("¡Esta compra ya se ha realizado!", "" )
                                        }
                                }}
                                >
                                    <MaterialCommunityIcons
                                        name="cart-outline"
                                        size={40}
                                        color="#f8f8ff"
                                    />
                            </TouchableOpacity>
                        </>
                    }

                </View>
                <View style={{height: 220}}>

                </View>
            </ScrollView>
            </LinearGradient>
            </View>
        </SafeAreaView>

    );
}