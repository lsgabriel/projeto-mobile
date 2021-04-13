import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, ScrollView } from 'react-native';
import { Header, SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../Professionals/data';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
/* import useAuth from '../../hooks/useAuth'; */
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [dados, setDados] = useState();

    /* const auth = useAuth(); */

    const loadingData = useCallback(async ()=>{
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

  /*   const getDataStorage = async ()=>{
        try {
            let auth = await AsyncStorage.getItem('auth');
            auth = JSON.parse(auth);
            return auth.id;
        } catch (e) {
            console.log(e);
        }
    }
     */
    const Spinner = ()=>{
        return (loading ? <ActivityIndicator size="large" color="#00000ff" /> : null);
    }

    const logoff = async ()=>{
        try {
         await AsyncStorage.removeItem('auth');
         navigation.navigate('Login');
     } catch (error) {
            
        }
    }

    // const getData = async()=>{
    //     try {
    //         setToken(await AsyncStorage.getItem('token'));
    //     } catch (error) {
    //         console.log(error);
    //         Toast.show({
    //             text1: 'Erro',
    //             text2: 'Token não encontrado',
    //             type: 'error'
    //         });
    //     }
    // }
    
    useEffect(()=>{
        loadingData();
    }, [loadingData]);

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
            // Background Linear Gradient
            colors={['#FFDEFF', '#C833CA']}
            // style={styles.mainContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.main}>

                <Button
                    title="Logoff"
                    buttonStyle={styles.logoffButton}
                    onPress={logoff}
                />

                {/* <Header 
                        style = {styles.header}
                    /> */}
                <TouchableWithoutFeedback
                    // onPress={navigator.navigate('PerfilUser')}
                    onPress={()=>console.log('teste')}
                >
                    <Image
                        source={{ uri: dados === undefined ? null : dados.profile_image }}
                        style={styles.img}
                    />
                </TouchableWithoutFeedback>
                <View style={styles.mainTextContainer}>
                    <Text
                        style={styles.subMainText}
                    >
                        Olá, {dados === undefined ? 'Undefined' : dados.name}
                    </Text>
                </View>

                <SearchBar
                    placeholder="Buscar um profissional"
                    style={styles.search}
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.searchBarInputContainer}
                    inputStyle={styles.searchBarInput}
                    round={true}
                    placeholderTextColor='#FFF'
                    searchIcon={
                        <Icon 
                            name='search'
                            size={24}
                            color='#FFF'
                        />
                    }
                    clearIcon={
                        <Icon 
                            name='close'
                            size={24}
                            color='#FFF'
                        />
                    }
                    lightTheme={false}
                />

                

                <View style={styles.containerText}>
                    <Text style={styles.lineText}>
                        Escolha um serviço
                        </Text>
                    
                </View>

                <ScrollView style={styles.servicesContainer} horizontal={true}>
                    
                    <TouchableOpacity style={styles.servicesItem}>
                        <Icon
                            name='email'
                            size={52}
                            style={styles.servicesIcon}
                            color='#832189'
                            onPress={navigation.navigate('Professionals')}
                        />
                        <Text style={styles.servicesLabel}>
                            Manicure
                        </Text>
                    </TouchableOpacity>
                                        
                    <TouchableOpacity style={styles.servicesItem}>
                        <Icon
                            name='email'
                            size={52}
                            style={styles.servicesIcon}
                            color='#832189'
                            onPress={navigation.navigate('Professionals')}
                        />
                        <Text style={styles.servicesLabel}>
                            Maquiagem
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.servicesItem}>
                        <Icon
                            name='email'
                            size={52}
                            style={styles.servicesIcon}
                            color='#832189'
                            onPress={navigation.navigate('Professionals')}
                        />
                        <Text style={styles.servicesLabel}>
                            Massagem
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.servicesItem}>
                        <Icon
                            name='email'
                            size={52}
                            style={styles.servicesIcon}
                            color='#832189'
                            onPress={navigation.navigate('Professionals')}
                        />
                        <Text  style={styles.servicesLabel}>
                            Cabelereira
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
                
            </View>
        </LinearGradient>
        </ScrollView>
    );
}

export default Home;