import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    headerTitle:{
        color: '#FFF',
        fontSize: 18,     
    },
    star:{
        position: 'absolute',
        zIndex: 99,
        top: 100,
        right: 50,
    },
    img:{
        height: 225,
        width: 225,
        borderRadius: 300,
        borderWidth: 5,
        borderColor: '#7B206F',
        // elevation: 2,
    },
    title:{
        marginTop: 5,
        fontSize: 52,
        fontWeight: 'bold',
        color: '#7B206F',
        textTransform: 'capitalize',
    },
    divisor:{
        marginVertical: 5,
        width: '30%',
        height: 3,
        backgroundColor: '#7B206F',
        borderRadius: 99,
    },
    desc:{
        marginTop: 10,
        fontSize: 22,
        color: '#7B206F',        
        textTransform: 'capitalize',
    },
    type:{
        marginTop: 5,
        textAlign: 'right',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7B206F',
        textTransform: 'capitalize',
    },
    button:{
        width: 250,
        backgroundColor: '#FFF',
        paddingVertical: 15,
        marginTop: 200,
        borderRadius: 99,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    buttonTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7B206F',
    },
    buttonIcon:{
        marginRight: 20,
    },
    background:{
        position: 'absolute',
        width: 820,
        height: 1012,
        zIndex: -1,
        top: screenHeight*0.50,
        alignSelf: 'center',
    }
});

export default styles;