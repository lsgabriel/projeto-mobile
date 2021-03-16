import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background:{
        height:'100%',
        width: '100%',
    },
    form:{
        color:'white',
        marginTop:82,
        zIndex: 1,
    },
    img: {
        width: 310,
        height: 195,
        alignSelf: 'center',
        marginBottom: 60,
    },
    inputStyles:{
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 40,
        fontSize: 22,
    },
    button:{
        backgroundColor:'#F128F5',
        marginTop:30,
        padding:15,
        width:200,
        borderRadius:40,
        alignSelf: 'center'
    },
    circle:{
        position: 'absolute',
        width:400,
        height:400,
        borderRadius:900,
        marginLeft:25,
        marginTop: 200,
        zIndex: -1
    },
    topCircle:{
        position: 'absolute',
        width: 500,
        height: 500,
        alignSelf: 'center',
        borderRadius:900,
        backgroundColor: '#FFF',
        top: -260,
        zIndex: -1
    },
});

export default styles;