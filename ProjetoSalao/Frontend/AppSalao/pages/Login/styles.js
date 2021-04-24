import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
//------------------------------------------
    logoContainer:{
        flex: 2,
        alignItems: 'center',
    },
    form:{
        flex: 3,
        color:'white',
        width: screenWidth,
        marginTop: 40,
        alignItems: 'center',
    },
    svg:{
        position: 'relative',
        width: 820,
        height: 1012,
        zIndex: -1,
        top: '-37%',
    },
    header:{
        height: screenHeight,
        width: screenWidth,
        alignItems: 'center'
    },
//------------------------------------------
    logo:{
        marginTop: 10,
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#C833CA',
    },
    inputStyles:{
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 40,
        fontSize: 22,
    },
    inputStyles2:{
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 40,
        fontSize: 22,
    },
    resetPassword:{
        color: '#B8B8B8',
        alignSelf: 'flex-end',
        marginTop: -15,
        marginRight: 20,

    },
    buttonLogin:{
        backgroundColor:'#FFF',
        marginTop: 30,
        height: 50,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonIcon:{
        backgroundColor: '#C833CA',
        borderRadius: 50,
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText:{
        paddingHorizontal: 30,
        paddingLeft: 50,
        color: '#C833CA',
        fontWeight: 'bold',
        fontSize: 24,
    },
    buttonSignup:{
        color: '#fff',
        backgroundColor: '#C833CA',
        marginTop: 20,
        paddingHorizontal: 90,
        borderRadius: 40,
        alignSelf: 'center',
    },
    buttonText2:{
        paddingVertical: 10,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    footer:{
        position: 'absolute',
        bottom: '5%',
        alignItems: 'center',
    },
    top:{
        width: 50,
        borderWidth: 1,
        borderColor: '#FFF',
        marginBottom: 15,
    },
    bottom:{
        width: 80,
        borderWidth: 1,
        borderColor: '#FFF',
    }
});

export default styles;