import { StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    logoffButton:{
        marginTop: 0,
        backgroundColor: '#F128F5',
        width: 100,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        padding: 7,
    },
    header:{
        height: 0,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent'
    },
    container:{
        height:'100%',
        width: '100%',
    },
    main:{
        alignItems: 'center',
    },
    img:{
        marginTop: 60,
        height: 160,
        width: 160,
        borderRadius: 300,
        borderWidth: 4,
        borderColor: '#832189',
    },
    mainTextContainer:{
        marginTop: 15,
    },
    subMainText:{
        fontSize: 38,
        color: '#FFF',
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
        color: '#fff',
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
        fontSize: 30,marginBottom:2,
        color: 'white',
        marginHorizontal: 20,
    },
    servicesContainer:{
        marginBottom:0,
    },
    servicesItem:{
        marginTop: 15,
        backgroundColor: '#FFF',
        width: windowWidth*0.40,
        alignItems: 'center',
        marginHorizontal: 10,
        paddingVertical: 35,
        borderRadius: 25,
    },
    servicesLabel:{
        fontSize: 23,
        color: '#832189',
        fontWeight: 'bold',
        letterSpacing: 1,
    }

})

export default styles;