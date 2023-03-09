
//Antigo sistema de cadastro, ele está desativado
import React, { useState } from "react"
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StatusBar, SafeAreaView } from "react-native"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../../config/firebaseconfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";


import styles from "./style"
import { MaterialCommunityIcons } from "@expo/vector-icons"


export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [errorRegister, setErrorRegister] = useState("");
    const [referencia, setReferencia] = useState("");


    const register = async () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {

                const user = userCredential.user;
                setReferencia(user.id)

            })
            .catch((error) => {
                setErrorRegister(true)
                const errorCode = error.code;
                const errorMessage = error.message;

            });


        const db = getFirestore();

        try {
            const docRef = await addDoc(collection(db, "Usuarios"), {
                nome: nome,
                grupo: "Grupo6",
                email: email,
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        navigation.navigate("Login")
    }

    return (
        
        <SafeAreaView>

            <ScrollView style={{ backgroundColor: "#fff", }}>

                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

                    <StatusBar barStyle="light-content" backgroundColor="#054A59" />

                    <Text style={styles.title}> Llene los campos correctamente </Text>

                    <TextInput style={{
                        alignItems: 'center', width: 300, marginTop: 10, padding: 10,
                        height: 50, borderBottomWidth: 1, borderBottomColor: "#000000", marginLeft: "auto",
                        marginRight: "auto"
                    }}
                        placeholder="Su nombre"
                        placeholderTextColor="#000"
                        type="text"
                        onChangeText={(nome) => setNome(nome)}
                        value={nome} />

                    <TextInput style={{
                        alignItems: 'center', width: 300, marginTop: 10, padding: 10,
                        height: 50, borderBottomWidth: 1, borderBottomColor: "#000000", marginLeft: "auto",
                        marginRight: "auto", color: "#000000"
                    }}
                        placeholder="Su e-mail"
                        placeholderTextColor="#000"
                        type="text"
                        onChangeText={(text) => setEmail(text)}
                        value={email} />

                    <TextInput style={{
                        alignItems: 'center', width: 300, marginTop: 10, padding: 10,
                        height: 50, borderBottomWidth: 1, borderBottomColor: "#000000", marginLeft: "auto",
                        marginRight: "auto", marginBottom: 30, color: "#000000"
                    }}
                        secureTextEntry={true}
                        placeholder="Crear contraseña"
                        placeholderTextColor="#000"
                        type="text"
                        onChangeText={(text) => setSenha(text)}
                        value={senha} />



                    {errorRegister === true

                        ?

                        <View style={styles.contentAlert}>

                            <MaterialCommunityIcons
                                name="alert-circle"
                                size={24}
                                color="#bdbdbd" />

                            <Text style={styles.warningAlert}> Email ou senha invalidos</Text>

                        </View>
                        :

                        <View />
                    }



                </KeyboardAvoidingView>



                <View style={{ alignSelf: 'center' }}>

                    {email === "" || senha === ""

                        ?

                        <TouchableOpacity
                            disabled={true}
                            style={styles.buttonRegister}
                        >
                            <Text style={styles.textButtonregister}>Enviar</Text>

                        </TouchableOpacity>

                        :

                        <TouchableOpacity
                            style={styles.buttonRegister}
                            onPress={register}

                        >
                            <Text style={styles.textButtonregister}>Enviar</Text>

                        </TouchableOpacity>

                    }

                </View>

            </ScrollView>

        </SafeAreaView>

    );

}