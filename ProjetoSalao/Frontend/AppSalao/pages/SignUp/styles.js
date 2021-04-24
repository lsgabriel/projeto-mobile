import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    background:{
        height: screenHeight,
        width: screenWidth,
        backgroundColor: '#7B206F',
        paddingVertical: 20,
    },
    title:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 44,
        textAlign: 'center',
    },
    form:{
        color:'white',
        marginTop: 20,
        zIndex: 1,
    },
    inputStyles:{
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 40,
        fontSize: 22,
    },
    button:{
        backgroundColor: '#F128F5',
        alignSelf: 'center',
        borderRadius: 40,
        marginTop: 30,
        padding: 15,
        width: 200,
    },
});

export default styles;