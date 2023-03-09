import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({

    titulo: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 30,
        marginBottom: 30,
        marginRight: 10,
        fontWeight: 'bold'
    },

    descricao: {
        textAlign: 'center',
        fontSize: 17,
        marginTop: 10,
        marginBottom: 50,
        marginStart: 10,
        marginEnd: 10
    },

    buttomFoto: {
        width: 233,
        height: 57,
        justifyContent: 'center',
        backgroundColor: '#054A59',
        marginTop: 30,
        borderRadius: 20,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    buttomEnviar: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        borderColor: '#09819C',
        borderStyle: 'solid',
        borderRadius: 20,
        alingItens: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 150,
        backgroundColor: "#fff",
        borderWidth: 1,
    },

    icon: {
        color: "#fff",
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
        fontWeight: 'bold'
    },

    textCounter: {
        color: "#000000",
        fontSize: 17,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 10
    },

    img: {
        marginTop: 15,
        width: 70,
        height: 70,
        marginLeft: 10,
        borderRadius: 12,
    },

    textImg: {
        color: "#000000",
        fontSize: 13,
        textAlign: 'left',
        marginTop: 7,
        marginLeft: 8
    },

    buttomAddFoto: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderColor: '#09819C',
        borderStyle: 'dashed',
        borderWidth: 2,
        marginStart: 10,
        marginTop: 15,
        borderRadius: 12,

    },

    iconAddFoto: {
        color: "#000000",
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
    },

    img2: {
        width: 375.6,
        height: 494.4,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20
    },

    buttomCancelar: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#004AEB',
        marginTop: 30,
        marginRight: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    buttomExcluir: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#EB1300',
        marginTop: 30,
        borderRadius: 20,
        marginLeft: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    buttomEnviarDisable: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        borderColor: '#09819C',
        borderStyle: 'solid',
        borderRadius: 20,
        alingItens: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 150,
        backgroundColor: "#fff",
        borderWidth: 1,
        opacity: .5
    },

});

export default styles