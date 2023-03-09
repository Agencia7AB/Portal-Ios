import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alingnItens: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },

    title: {
        fontSize: 48,
        marginBottom: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    form: {
        width: 300,
        marginTop: 40,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginLeft: "auto",
        marginRight: "auto",
        color: "000000",
        alingnItens: 'center',
        justifyContent: 'center',
    },
    buttonLogin: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#054A59',
        borderRadius: 50,
        marginTop: 70,
        marginBottom: 20,
    },

    textButtonLogin: {
        color: "#ffffff",
        textAlign: 'center',
        fontWeight: "bold"

    },
    contentAlert: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,

    },
    registation: {
        marginTop: 20,
        color: '#4d5156',
        textAlign: 'center',

    },

    linkSubscribe: {
        marginTop: 45,
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    }
});

export default styles