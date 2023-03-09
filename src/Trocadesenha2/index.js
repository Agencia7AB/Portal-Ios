import React, { useState } from "react"
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, StatusBar } from "react-native"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import * as Animatable from 'react-native-animatable';

import styles from "./style"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Trocadesenha({ navigation }) {


    const [email, setEmail] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const Redefinir = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Alert.alert('Enlace para restablecer la contraseña enviado a su correo electrónico', 'Si no lo encuentras, revisa tu carpeta de spam o envíalo de nuevo.')
                navigation.navigate("Login")

            })
            .catch((error) => {
                setErrorRegister(true)
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }



    return (

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor="#054A59" />
            <Animatable.View
            animation="fadeInUpBig"
            >
                <Text style={styles.title}>Escriba su e-mail correctamente</Text>

            </Animatable.View>

            <Animatable.View
            animation="fadeInUpBig"
            >

                <TextInput style={{
                    alignItems: 'center', width: 300, marginTop: 10, padding: 10,
                    height: 50, borderBottomWidth: 1, borderBottomColor: "#000000", marginLeft: "auto",
                    marginRight: "auto", color: "#000000"
                }}
                    placeholder="E-mail"
                    placeholderTextColor="#000"
                    type="text"
                    onChangeText={(text) => setEmail(text)}
                    value={email} />

            </Animatable.View>

            {errorRegister === true

                ?

                <View style={styles.contentAlert}>

                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd" />
                    <Text style={styles.warningAlert}> E-mail inválido</Text>

                </View>

                :

                <View />
            }

            <View style={{ alignSelf: 'center' }}>

                {email === ""

                    ?
                    <Animatable.View
                    animation="fadeInUpBig"
                    >
                        <TouchableOpacity
                            disabled={true}
                            style={styles.buttonRegister}
                        >
                            <Text style={styles.textButtonregister}>Enviar</Text>

                        </TouchableOpacity>
                        
                    </Animatable.View>
                    :

                    <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={Redefinir}

                    >
                        <Text style={styles.textButtonregister}>Enviar</Text>

                    </TouchableOpacity>

                }

            </View>

        </KeyboardAvoidingView>

    );

}