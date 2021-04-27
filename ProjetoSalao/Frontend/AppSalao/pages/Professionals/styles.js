import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#FFF',
        height: screenHeight,
    },
    headerTitle:{
        color: '#FFF',
        fontSize: 18,
    },
    headerTitleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitleLine:{
        width: 73,
        height: 4,
        backgroundColor: '#7B206F',
    },
    headerTitle:{
        color: '#7B206F',
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    searchBar:{
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        width: '95%',
        backgroundColor: '#7B206F',
        borderRadius: 300,
        alignSelf: 'center'
    },
    searchBarInput:{
        color: '#fff',
    },
    searchBarInputContainer:{
        backgroundColor: 'transparent'        
    },
});

export default styles;