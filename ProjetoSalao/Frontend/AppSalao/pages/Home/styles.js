import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    img:{
        marginTop: 40,
        height: 250,
        width: 250,
        borderRadius: 300,
        borderWidth: 4,
        borderColor: '#832189',
    },
    main:{
        backgroundColor: '#000',
        alignItems: 'center',
    },
    mainText:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
    dividerText:{
        color: 'white',
    },
    containerText:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    line:{
        height: 5,
        width: 60,
        backgroundColor: 'white',
    },
    lineText:{
        color: 'white'
    }

})

export default styles;