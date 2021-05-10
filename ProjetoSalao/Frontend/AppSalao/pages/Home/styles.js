import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        height: screenHeight,
        width: screenWidth,
        backgroundColor: '#FFF',
    },
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
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 99,
    },
    imgContainer:{
        marginTop: 50,
        height: 140,
        width: 140,
        borderRadius: 300,
        borderWidth: 6,
        borderColor: '#832189',
    },
    overlayColor:{
        position: 'absolute',
        height: '100%',
        width: '100%',
        // backgroundColor: '#832189',
        borderRadius: 300,
        zIndex: 1,
        // opacity: 0.5
    },
    img:{
        height: '100%',
        width: '100%',
        borderRadius: 300,
    },
    mainTextContainer:{
        marginTop: 15,
    },
    subGreetingText:{
        fontSize: 24,
        color: '#7B206F',
        fontWeight: 'bold',
        lineHeight: 24,
    },
    subMainText:{
        fontSize: 38,
        color: '#7B206F',
        fontWeight: 'bold',
        lineHeight: 40,
        textTransform: 'capitalize',
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
        color: '#7B206F',
    },
    containerText:{
        marginTop: screenHeight*0.18,
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
        color: '#7B206F',
        marginHorizontal: 20,
    },
    servicesContainer:{
        marginTop: 10,
    },
    servicesButton:{

    },
    servicesItem:{
        marginTop: 15,
        backgroundColor: '#FFF',
        width: screenWidth*0.40,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 25,
    },
    servicesLabel:{
        fontSize: 23,
        color: '#FFF',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    background:{
        position: 'absolute',
        width: 704,
        height: 588,
        zIndex: -1,
        bottom: screenHeight*0.37,
        alignSelf: 'center',
    }
})

export default styles;