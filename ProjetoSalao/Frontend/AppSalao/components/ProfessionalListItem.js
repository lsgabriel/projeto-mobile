import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfessionalListItem = ({item, isFav})=>{

    const storeData = async(data)=>{
        await AsyncStorage.setItem('hairstyle@favorites', JSON.stringify(data))
    }

    const [isFavorite, setIsFavorite] = useState(isFav);
    const id = item.id;

    const checkFavorite = ()=>{
        let fav = isFavorite?.includes(id);
        
        if(fav){
            setIsFavorite(isFav.filter((value)=>(id != value)))
            storeData(isFavorite);
        }
         else {
            setIsFavorite([...isFavorite, id]);
            storeData(isFavorite);
        }
    }

    const navigation = useNavigation();
    return(
        <View style={styles.main}>
            {/* <TouchableOpacity
                onPress={checkFavorite}
                style={styles.star}
            >
                <Icon
                    type='material-community' name={isFavorite?.includes(id) ? 'star' : 'star-outline'} color={isFavorite?.includes(id) ? '#FFF' : '#a32bab'} size={28}
                />




            </TouchableOpacity> */}
            
            {
                item.profile_image != null
                ? <Image
                    style={styles.img}
                    source={{uri:item.profile_image}}
                />
                : <View style={styles.img}>
                    <Text style={styles.nullImg}> ? </Text>
                </View>
            }
            <View style={styles.divisorLine}/>
            <View style={styles.container}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.desc}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={()=>{ navigation.navigate('ProfessionalsDesc', item) }}
                activeOpacity={0.7}
            >                
                <Icon
                    type='font-awesome' name='calendar' color='#C833CA' size={30}
                />
                {/* <Text style={styles.btitle}>Agendar</Text> */}
            </TouchableOpacity>
        </View>
    )
}

export default ProfessionalListItem;

const styles = StyleSheet.create({
    main:{
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 15,
        backgroundColor: '#C833CA',
        borderRadius: 99,
        elevation: 5,
    },
    // star:{
    //     position: 'absolute',
    //     zIndex: 99,
    //     backgroundColor: '#832189',
    //     borderRadius: 13,

    // },
    img:{
        marginVertical: 10,
        marginLeft: 10,
        height: 70,
        width: 70,
        borderRadius: 90,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nullImg:{
        fontSize: 38,
        fontWeight: 'bold',
        color: '#C833CA',
    },
    divisorLine:{
        alignSelf: 'center',
        height: '50%',
        width: 2,
        borderRadius: 99,
        backgroundColor: '#FFF',
        marginHorizontal: 15,
    },
    button:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 99,
    },
    btitle:{
        fontWeight: 'bold',
        color: '#CA33D2',
    },
    container:{
        paddingRight: 5,
        flex: 2,
        paddingVertical: 10,
        // justifyContent: 'space-around',
    },
    title:{
        flex: 2,
        textAlignVertical: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'capitalize',
    },
    desc:{
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        textTransform: 'capitalize',
    },
});


