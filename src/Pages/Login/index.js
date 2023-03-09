import React, { useState, useEffect } from "react"
import { LogBox } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";//Importação da autenticação do firebase
import styles from "./style"
import { MaterialCommunityIcons } from "@expo/vector-icons";//importação dos ícones
import * as Animatable from 'react-native-animatable'
import OneSignal from "react-native-onesignal";

import firebase from "../../config/firebaseconfig";


export default function Login({ navigation }) {

    

    LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorRegister, setErrorRegister] = useState("")

    //Autenticação do usuário
    const loginFirebase = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                let user = userCredential.user;
                navigation.navigate("Principal", { idUser: user.uid })

            })
            .catch((error) => {
                setErrorRegister(true)
                let errorCode = error.code;
                let errorMessage = error.message;
            });

    }

    //conexão instantânea
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate("Principal", { idUser: user.uid })
            }
        });
    }, []);

    return (

        //corpo da página
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

            <Animatable.Text 
            animation="fadeInUpBig"
            style={styles.title}> Login </Animatable.Text>

            {/* Formulários  */}
            <Animatable.View 
            animation="fadeIn"
            >
                <TextInput style={{
                    alignItems: 'center', width: 300, marginTop: 10, padding: 10,
                    height: 50, borderBottomWidth: 1, borderBottomColor: "#000000", marginLeft: "auto",
                    marginRight: "auto", color: "#000000"
                }}
                    placeholder="Correo electrónico"
                    placeholderTextColor="#000"
                    type="text"
                    onChangeText={(text) => setEmail(text)}
                    value={email} />

                <TextInput style={{
                    alignItems: 'center', width: 300, marginTop: 10, padding: 10,
                    height: 50, borderBottomWidth: 1, borderBottomColor: "#000000", marginLeft: "auto",
                    marginRight: "auto", color: "#000000"
                }}
                    secureTextEntry={true}
                    placeholder="Contraseña"
                    placeholderTextColor="#000"
                    type="text"
                    onChangeText={(text) => setSenha(text)}
                    value={senha} />
            </Animatable.View>
            {/* Verificação de erro de senha ou email  */}
            {errorRegister === true

                ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd" />
                    <Text style={styles.warningAlert}> E-mail o contraseña incorrectos</Text>
                </View>

                :

                <View />
            }

            <View style={{ alignSelf: 'center' }}>

                {/* Verificação de campos vazios */}
                {email === "" || senha === ""

                    ?
                    <Animatable.View 
                    animation="fadeInLeft"
                    >
                        <TouchableOpacity
                            disabled={true}
                            style={styles.buttonLogin}
                        >
                            <Text style={styles.textButtonLogin}>Ingresar</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                    :

                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={loginFirebase}
                    >
                        <Text style={styles.textButtonLogin}>Ingresar
                        </Text>
                    </TouchableOpacity>

                }

            </View>

            {/*--Antigo sistema de cadastro (Desabiliatdo) */}
            {/*<Text style={styles.registation}>

                <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("Cadastro")}>
                    Crear una Cuenta
                </Text>
            </Text>*/}

            <Text style={styles.registation}>

                <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("Trocadesenha")}>
                    ¿Primer acceso?
                </Text>

            </Text>

            <Text style={styles.registation}>

                <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("Trocadesenha2")}>
                    Olvidé mi contraseña
                </Text>

            </Text>

            <View style={{ height: 150}} />

        </KeyboardAvoidingView>
    );

} 