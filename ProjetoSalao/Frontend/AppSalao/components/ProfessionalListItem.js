import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfessionalListItem = ({item, isFav})=>{

    const [isFavorite, setIsFavorite] = useState(isFav);
    const id = item.id;

    const checkFavorite = ()=>{
        let fav = isFavorite.includes(id);
        
        if(fav){
            setIsFavorite(isFav.filter((value)=>(id != value)))
            console.log(isFavorite);
        }
         else {
            setIsFavorite([...isFavorite, id]);
            console.log(isFavorite);
        }
    }

    const navigation = useNavigation();
    return(
        <View style={styles.main}>
            <TouchableOpacity
                onPress={checkFavorite}
                style={styles.star}
            >
                <Icon
                    type='material-community' name={isFavorite.includes(id) ? 'star' : 'star-outline'} color={isFavorite.includes(id) ? '#FFF' : '#a32bab'} size={28}
                />




            </TouchableOpacity>
            <Image
                style={styles.img}
                source={{uri:item.profile_image}}
            />
            <View style={styles.container}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.desc}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={()=>{ navigation.navigate('ProfessionalsDesc', item) }}
            >                
                <Icon
                    type='font-awesome' name='calendar' color='#CA33D2' size={30}
                />
                <Text style={styles.btitle}>Agendar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfessionalListItem;

const styles = StyleSheet.create({
    main:{
        flexDirection: 'row',
        marginVertical: 4,
        backgroundColor: '#FFF',
        position: 'relative',
        borderWidth: 1.5,
        borderColor: '#832189',
        borderRadius: 15,
    },
    star:{
        position: 'absolute',
        zIndex: 99,
        backgroundColor: '#832189',
        borderRadius: 13,

    },
    img:{
        flex: 1,
        marginVertical: 5,
        marginLeft: 5,
        height: 95,
        width: 90,
        borderRadius: 90,
        borderWidth: 1.5,
        borderColor: '#832189'
    },
    button:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        backgroundColor: '#D994DD',
        borderRadius: 14,
    },
    btitle:{
        fontWeight: 'bold',
        color: '#CA33D2',
    },
    container:{
        paddingHorizontal: 20,
        flex: 2,
        justifyContent: 'space-evenly',
    },
    title:{
        flex: 2,
        textAlignVertical: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#832189',
    },
    desc:{
        flex: 1,
        fontSize: 14,
        color: '#832189',
    },
});


