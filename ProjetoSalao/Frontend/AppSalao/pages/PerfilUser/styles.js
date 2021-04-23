import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'purple',
        borderWidth: 4,
    },
    perfil:{
        fontSize: 25,
        color: 'white',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 35,
        color: 'purple',
        marginTop: 10,
    },
    text2:{
        marginBottom: 20,
        color: 'purple',
    },
    data:{     
        fontSize: 15,
        color: '#FFF',
    },
    horario:{
        fontSize:20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    horario2:{
        marginLeft:10,
        fontSize:20,
        color:'white',
        fontWeight: 'bold',
    },
    tratamento:{
        fontSize:20,
        color: '#FFF',
        fontWeight:'bold',
    },
    agendamentos:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    bgAgendamentos:{
        height: 58,
        width: '100%',
        borderWidth: 2,
        borderColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    listItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'pink',
        width: screenWidth,
        paddingHorizontal: 30,
        backgroundColor: '#D994DD',
        paddingVertical: 10,
        color: '#FFF',
        borderColor: 'purple',
        borderWidth: 1,
    },
    dateItem:{
        flexDirection: 'column'
    }
});

export default styles;