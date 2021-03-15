import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        height:950,
    },
    img: {
        width: 300,height: 195,
        marginLeft:30,marginBottom:8,
    },
    form:{
        color:'white',marginTop:82,
    },
    resetPassword:{
        width:200,color:'#fff',
        marginLeft:220,
    },
    buttonLogin:{
        backgroundColor:'blueviolet',marginTop:20,
        padding:15,width:200,marginLeft:80,
        borderRadius:40,

    },
    buttonSignup:{
        backgroundColor:'lightgray',marginTop:5,
        padding:15,width:180,marginLeft:89,
        borderRadius:40,
    },
    inputStyles:{
        backgroundColor:'white',padding:15,
        borderRadius:40,fontSize:22,
    },
    circle:{
        width:400,top:0,
        height:400,borderRadius:900,
        marginLeft:25,marginTop:1,
    },

});

export default styles;