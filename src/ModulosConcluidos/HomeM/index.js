import React from "react"
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from "expo-linear-gradient";


import styles from "./style"



export default function Home({ navigation }) {

    return (

        <SafeAreaView style={{ backgroundColor: '#054A59', }}>
            <LinearGradient style={{  borderTopLeftRadius: 70, borderTopRightRadius: 70}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#021D24', '#03303B', '#044352', '#055669', '#07768F',]}>
            <ScrollView>

                <StatusBar barStyle="light-content" backgroundColor="#054A59" />
                <Animatable.View
                animation="fadeInUpBig"
                >
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, }}>

                
                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginRight: 55,
                        }}
                        onPress={() => navigation.navigate("HomeM1")}>

                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("Modulo2C")}>

                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("Modulo3C")}>
                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("Modulo4C")}>

                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("Modulo5C")}>
                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("Modulo6C")}>

                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("Modulo7C")}>
                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("Modulo8C")}>

                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("Modulo9C")}
                        >
                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("Modulo10C")}
                        >

                        <MaterialCommunityIcons
                            name="check-outline"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Módulo 10
                        </Text>

                    </TouchableOpacity>

                </View>
            </Animatable.View>
            </ScrollView>
            </LinearGradient>
        </SafeAreaView>

    );
}
