import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        height: screenHeight,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
    },
    header:{
        backgroundColor: '#C833CA',
        alignItems: 'center',
        paddingBottom: 90,
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 4,
    },
    perfil:{
        fontSize: 25,
        color: 'white',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 35,
        color: '#FFF',
        textTransform: 'capitalize',
    },
    text2:{
        color: '#FFF',
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
        color: '#7B206F',
        fontWeight: 'bold',
    },
    bgAgendamentos:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    // mainList:{
    //     marginTop: 10,
    // },
    listItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#C833CA',
        width: '85%',
        paddingHorizontal: 40,
        paddingVertical: 10,
        color: '#FFF',
        borderRadius: 30,
        marginTop: 15,
    },
    dateItem:{
        flexDirection: 'column'
    },
    background:{
        position: 'absolute',
        width: 704,
        height: 588,
        zIndex: 0,
        top: screenHeight*0.33,
        alignSelf: 'center',
    },
    contentContainer:{
        zIndex: 1,
        marginTop: screenHeight*0.08,
    },
    userHeaderContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    userInformationsContainer:{
        flexDirection: 'column',
        marginLeft: 25,
        justifyContent: 'space-evenly',
        // backgroundColor: '#000',
        height: 150,
    },
    editButton:{
        backgroundColor: '#FFF',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    editButtonText:{
        color: '#7B206F',
        fontWeight: 'bold',
    },
});

export default styles;