import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';

const PerfilUser = () => {

    const [loading, setLoading] = useState(true);
    const [dados, setDados] = useState();

    const navigation = useNavigation;

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
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'
                >
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['white', 'blueviolet']}
                        style={styles.container}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <Header
                            backgroundColor="#D994DD"
                            leftComponent={
                                <Icon
                                    type='font-awesome' name='angle-left' color='#FFF' size={30}
                                    onPress={() => { navigation.goBack() }}
                                />
                            }
                            centerComponent={
                                <Text style={styles.perfil}>Perfil</Text>
                            }
                        />


                        <View style={styles.form}>
                            <Image
                                source={{ uri: dados === undefined ? null : dados.profile_image }}
                                style={styles.img}
                            />
                        </View>

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
                        <View style={styles.horarios}>
                            <View style={styles.tratamentoP}>
                                <Text style={styles.data}>10/03</Text>
                                <Text style={styles.horario}>8:30</Text>
                                <Text style={styles.tratamento}>Manicure</Text>
                            </View>
                        </View>
                        <View style={styles.horarios}>
                            <View style={styles.tratamentoP}>
                                <Text style={styles.data}>10/03</Text>
                                <Text style={styles.horario}>9:30</Text>
                                <Text style={styles.tratamento}>Massagem</Text>
                            </View>
                        </View>
                        <View style={styles.horarios}>
                            <View style={styles.tratamentoP}>
                                <Text style={styles.data}>10/03</Text>
                                <Text style={styles.horario2}>10:30</Text>
                                <Text style={styles.tratamento2}>Manicure</Text>
                            </View>
                        </View>
                        <View style={styles.horarios}>
                            <View style={styles.tratamentoP}>
                                <Text style={styles.data}>10/03</Text>
                                <Text style={styles.horario2}>11:30</Text>
                                <Text style={styles.tratamento2}>Cabelo</Text>
                            </View>
                        </View>
                        <View style={styles.horarios}>
                            <View style={styles.tratamentoP}>
                                <Text style={styles.data}>10/03</Text>
                                <Text style={styles.horario2}>12:30</Text>
                                <Text style={styles.tratamento2}>Manicure</Text>
                            </View>
                        </View>
                        <View style={styles.horarios}>
                            <View style={styles.tratamentoP}>
                                <Text style={styles.data}>10/03</Text>
                                <Text style={styles.horario2}>15:30</Text>
                                <Text style={styles.tratamento2}>Manicure</Text>
                            </View>
                        </View>
                        <View style={styles.horarios}>
                            <View style={styles.tratamentoP}>
                                <Text style={styles.data}>10/03</Text>
                                <Text style={styles.horario2}>16:30</Text>
                                <Text style={styles.tratamento2}>Manicure</Text>
                            </View>
                        </View>
                        <View style={styles.horarios}>
                            <View style={styles.tratamentoP}>
                                <Text style={styles.data}>10/03</Text>
                                <Text style={styles.horario2}>11:30</Text>
                                <Text style={styles.tratamento2}>Manicure</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </ScrollView>
            </KeyboardAvoidingView>
    );
}

export default PerfilUser;