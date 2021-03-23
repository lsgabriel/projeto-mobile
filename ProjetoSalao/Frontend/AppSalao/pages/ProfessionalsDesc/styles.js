import { StyleSheet } from 'react-native';

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
        marginTop: 40,
        height: 250,
        width: 250,
        borderRadius: 300,
        borderWidth: 4,
        borderColor: '#832189',
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#832189',
    },
    desc:{
        fontSize: 18,
        color: '#832189',
    },
    button:{
        width: 200,
        
        backgroundColor: '#25d366',
        paddingVertical: 10,
        marginTop: 100,
        borderRadius: 20,
    },
    buttonIcon:{
        marginRight: 20,
    },
});

export default styles;