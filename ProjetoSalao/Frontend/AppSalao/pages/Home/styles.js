import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width: '100%',
    },
    main:{
        alignItems: 'center',
    },
    img:{
        
        marginTop: 60,
        height: 200,
        width: 200,
        borderRadius: 300,
        borderWidth: 4,
        borderColor: '#832189',
    },
    mainTextContainer:{
        marginTop: 15,
    },
    subMainText:{
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold',
    },
    mainText:{
        color: 'white',
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    searchBar:{
        marginVertical: 20,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        width: '90%',
        borderRadius: 0,
        backgroundColor: '#F128F5',
        borderRadius: 300,
    },
    searchBarInput:{
        
        // borderRadius: 300,
    },
    searchBarInputContainer:{
        backgroundColor: 'transparent'
        
    },
    dividerText:{
        fontSize: 30,
        color: 'white',
        marginBottom: 15,
    },
    containerText:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    line:{
        height: 5,
        width: '15%',
        backgroundColor: 'white',
        borderRadius: 50,
    },
    lineText:{
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginHorizontal: 20,
    },
    servicesContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    servicesItem:{
        // flexBasis: '45%',
        margin: 10,
        backgroundColor: '#FFF',
        height: 100,
        width: 100,
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    servicesIcons:{
    },
    servicesLabel:{
        fontSize: 14,
        color: '#832189',
        fontWeight: 'bold',
        letterSpacing: 1,
    }

})

export default styles;