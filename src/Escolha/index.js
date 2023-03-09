import { LinearGradient } from "expo-linear-gradient";
import React from "react"
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Alert, Image, ScrollView } from "react-native"
import * as Animatable from 'react-native-animatable';
import styles from "./style"

export default function Escolha({ navigation }) {

    return (

        <SafeAreaView style={{ backgroundColor: '#054A59' }}>
            <View>
            <LinearGradient style={{  borderTopLeftRadius: 70, borderTopRightRadius: 70, height: 900}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#021D24', '#03303B', '#044352', '#055669', '#07768F',]}>
            <ScrollView >
               <StatusBar barStyle="light-content" backgroundColor="#054A59" />

                <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: 15}}>
                <Animatable.View
                animation="fadeInLeftBig"
                >
                     <Image style={styles.img} source={{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/teste-5e945.appspot.com/o/Logos%2FLOGO%20BRANCO%20DOURADO.png?alt=media&token=c5cbf878-7c6f-4dc2-8483-31943716dcf0',
                    }} />
                </Animatable.View>

                <Animatable.Text  animation="bounceIn" style={{textAlign: 'center', fontSize: 20, marginTop: 50, marginBottom: 10, color: '#FFF'}}>Escoja una opción abajo:</Animatable.Text>

                    <TouchableOpacity style={{ backgroundColor: '#FFF', width: 220, height: 60, marginBottom: 30, borderRadius: 20, marginTop: 50, alignItems: 'center', alignContent: 'center' }}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={{ color: '#000', fontSize: 17, textAlign: 'center', marginTop: 15, }}>Envío de Resúmenes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#FFF', width: 220, height: 60, marginBottom: 30, borderRadius: 20, marginTop: 20, alignItems: 'center', alignContent: 'center' }}
                        onPress={() => navigation.navigate("HomeM")}
                    >
                        <Text style={{ color: '#000', fontSize: 17, textAlign: 'center', marginTop: 15, }}>Ver resúmenes enviados</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            </LinearGradient>
            </View>
        </SafeAreaView>

    );
}