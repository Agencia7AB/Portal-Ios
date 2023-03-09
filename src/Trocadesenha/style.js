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
        fontSize: 30,
        marginBottom: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    form: {
        width: 300,
        marginTop: 30,
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
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#054A59',
        borderRadius: 50,
        marginTop: 70,
    },

    textButtonregister: {
        color: "#ffffff",
        textAlign: 'center',

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
    login: {
        marginTop: 20,
        color: '#4d5156',
        textAlign: 'center',

    },

    linkLogin: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
    }
});

export default styles