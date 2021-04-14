import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ProfessionalListItem = ({item})=>{
    const navigation = useNavigation();
    return(
        <View style={styles.main}>
            <Icon
                type='material-community' name={item.Pfav ? 'star' : 'star-outline'} color={item.Pfav ? '#FFF' : '#a32bab'} containerStyle={styles.star} size={28}
            />
            <Image
                style={styles.img}
                source={{uri:item.Ppic}}
            />
            <View style={styles.container}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.desc}>{item.Pdesc}</Text>
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


