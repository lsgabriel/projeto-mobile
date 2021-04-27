import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { RoundBG3 } from '../../assets/SvgComponents';
import { RectButton } from 'react-native-gesture-handler';

import Loading from '../../components/Loading';

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
        }
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

    const logoff = async ()=>{
        try {
         await AsyncStorage.setItem('auth', '');
         navigation.navigate('Login');
     } catch (error) {
            
        }
    }
    
    useEffect(()=>{
        loadingData();
    }, [loadingData]);

    if(loading)
        return <Loading />

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Header
                    containerStyle={{borderBottomWidth: 0,}}
                    backgroundColor="transparent"
                    barStyle="light-content"
                    leftComponent={
                        <Icon
                            type='ionicon'
                            name='chevron-back-outline'
                            color='#FFF'
                            size={30}
                            onPress={()=> navigation.goBack()}
                        />
                    }
                    rightComponent={
                        <Icon
                            type='ionicon'
                            name='log-out-outline'
                            color='#FFF'
                            size={30}
                            onPress={logoff}
                        />
                    }
                />
                <View style={styles.userHeaderContainer}>
                    <Image
                        source={{ uri: dados === undefined ? null : dados.profile_image }}
                        style={styles.img}
                    />

                    <View style={styles.userInformationsContainer}>
                        <Text style={styles.text}>{dados === undefined ? 'Undefined' : dados.name}</Text>
                        <Text style={styles.text2}>{dados === undefined ? 'Undefined' : dados.email}</Text>
                        <Text style={styles.text2}>{dados === undefined ? 'Undefined' : dados.phone}</Text>
                        <RectButton style={styles.editButton} onPress={()=> navigation.navigate('EditUser')}>
                            <Text style={styles.editButtonText}>Editar</Text>
                        </RectButton>
                    </View>
                </View>
            </View>

            <View style={styles.contentContainer}>
                <View
                    style={styles.bgAgendamentos}
                >
                    <Icon
                        type='ionicon'
                        name='calendar-outline'
                        color='#7B206F'
                        size={30}
                    />
                    <Text style={styles.agendamentos}>Seus Agendamentos</Text>
                </View>
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
                    contentContainerStyle={styles.mainList}
                    showsVerticalScrollIndicator={true}                    
                />
            </View>
            <RoundBG3
                style={styles.background}
            />
        </View>
    );
}

export default PerfilUser;