import React from "react"
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style"

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#054A59' }}>
            <StatusBar barStyle="light-content" backgroundColor="#054A59" />
            <LinearGradient style={{  borderTopLeftRadius: 70, borderTopRightRadius: 70, flex: 1}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#021D24', '#03303B', '#044352', '#055669', '#07768F',]}>
            <ScrollView>

            
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, }}>
                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            alignContent: 'center',
                            alignItems: 'center',
                            marginRight: 55,
                        }}
                        onPress={() => navigation.navigate("AnalisisFacialC")}>
                        <MaterialCommunityIcons
                            name="check-outline"
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
                        onPress={() => navigation.navigate("CefalometriaC")}>
                            
                        <MaterialCommunityIcons
                            name="check-outline"
                            size={80}
                            color="#f8f8ff"
                        />

                        <Text style={styles.textButton}>
                            Cefalometría
                        </Text>

                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 30, }}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name="check-outline"
                            size={80}
                            color="#f8f8ff"

                            style={{
                                marginLeft: 55
                            }}
                            onPress={() => navigation.navigate("CefalometriaPDFC")}
                        />
                        <View style={{ textAlign: 'center', }}>
                            <Text style={{
                                color: "#f8f8ff",
                                fontSize: 20,
                                textAlign: 'center',
                                marginLeft: 30
                            }}>
                                Cefalometría
                            </Text>

                            <Text style={{
                                color: "#f8f8ff",
                                fontSize: 20,
                                textAlign: 'center',
                                marginLeft: 30
                            }}>
                                (pdf webceph)
                            </Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </LinearGradient>
        </SafeAreaView >

    );
}