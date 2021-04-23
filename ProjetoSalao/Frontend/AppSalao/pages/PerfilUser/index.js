import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';

const PerfilUser = () => {

    const data = [
        {   
            id: 1,
            date: '10/10/2021',
            hour: '16:00',
            type: 'Manicure',
        },
        {
            id: 2,
            date: '15/10/2021',
            hour: '13:00',
            type: 'Pedicure',
        },
        {
            id: 3,
            date: '10/05/2021',
            hour: '10:00',
            type: 'Massagem',
        },
        {
            id: 4,
            date: '05/11/2021',
            hour: '09:00',
            type: 'Cabelos',
        },
        {
            id: 5,
            date: '10/10/2021',
            hour: '16:00',
            type: 'Manicure',
        },
        {
            id: 6,
            date: '10/05/2021',
            hour: '10:00',
            type: 'Massagem',
        },
        {
            id: 7,
            date: '05/11/2021',
            hour: '09:00',
            type: 'Cabelos',
        },
        {
            id: 8,
            date: '10/10/2021',
            hour: '16:00',
            type: 'Manicure',
        },
    ]

    const [loading, setLoading] = useState(true);
    const [dados, setDados] = useState();

    const navigation = useNavigation();

    const loadingData = useCallback(async ()=>{
        console.log('teste')
            try {
                const respAuth = JSON.parse(await AsyncStorage.getItem('auth'))

                const response = await api.get(`/clients/${respAuth.id}` ,{
                    headers: { 'x-access-token': respAuth?.token }
                });

                setDados(response.data);
                setLoading(false);

            } catch (error) {
                console.log(error);
            }
    }, []);
    
    useEffect(()=>{
        loadingData();
    }, [loadingData]);

    return (
            <View style={styles.container}>
                <Header
                    backgroundColor="#D994DD"
                    leftComponent={
                        <Icon
                            type='font-awesome'
                            name='angle-left'
                            color='#FFF'
                            size={30}
                            onPress={()=> navigation.goBack()}
                        />
                    }
                    centerComponent={
                        <Text style={styles.perfil}>Perfil</Text>
                    }
                />

                <Image
                    source={{ uri: dados === undefined ? null : dados.profile_image }}
                    style={styles.img}
                />

                <Text style={styles.text}>{dados === undefined ? 'Undefined' : dados.name}</Text>
                <Text style={styles.text2}>{dados === undefined ? 'Undefined' : dados.phone}</Text>

                <LinearGradient
                    colors={['#D994DD', '#CA33D2']}
                    style={styles.bgAgendamentos}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.5, y: 0 }}
                >
                    <Text style={styles.agendamentos}>Seus Agendamentos</Text>
                </LinearGradient>
                <FlatList
                    data={data}
                    keyExtractor={ (item)=>String(item.id) }
                    renderItem={({item})=>(
                        <View style={styles.listItem}>
                            <View style={styles.dateItem}>
                                <Text style={styles.data}>{item.date}</Text>
                                <Text style={styles.horario}>{item.hour}</Text>
                            </View>
                            <Text style={styles.tratamento}>{item.type}</Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    
                />
            </View>
    );
}

export default PerfilUser;