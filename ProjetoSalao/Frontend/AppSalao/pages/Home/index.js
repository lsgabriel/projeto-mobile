import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Header, SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../Professionals/data';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
/* import useAuth from '../../hooks/useAuth'; */
import { useNavigation } from '@react-navigation/native';

import { NailIcon, MassageIcon, LipIcon, HairIcon, LogoIcon2 } from '../../assets/SvgIcons';
import { RoundBG2 } from '../../assets/SvgComponents';

import Loading from '../../components/Loading';

const Home = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [dados, setDados] = useState();
    const [search, setSearch] = useState('');

    const data = [
        {
            id: 1,
            icon: <NailIcon/>,
            service: 'Manicure',
        },
        {
            id: 2,
            icon: <MassageIcon/>,
            service: 'Massagem',
        },
        {
            id: 3,
            icon: <LipIcon/>,
            service: 'Maquiagem',
        },
        {
            id: 4,
            icon: <HairIcon/>,
            service: 'Cabelereira',
        },
    ]

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
    // const Spinner = ()=>{
    //     return (loading ? <ActivityIndicator size="large" color="#00000ff" /> : null);
    // }

    // const logoff = async ()=>{
    //     try {
    //      await AsyncStorage.setItem('auth', '');
    //      navigation.navigate('Login');
    //  } catch (error) {
            
    //     }
    // }

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

    if(loading)
        return <Loading />

    return (
        <SafeAreaView>
        <View
            style={styles.container}
        >
            <View style={styles.main}>
{/*             
                <Button
                    title="Logoff"
                    buttonStyle={styles.logoffButton}
                    onPress={logoff}
                /> */}
                <Header
                    containerStyle={{borderBottomWidth: 0, height: 0,}}
                    backgroundColor="transparent"
                    barStyle="dark-content"
                    leftComponent={
                        <LogoIcon2/>
                    }
                />

                <TouchableOpacity
                    onPress={()=>navigation.navigate('PerfilUser')}
                    // onPress={()=>console.log('teste')}
                    style={styles.imgContainer}
                    activeOpacity={0.7}
                >
                    {/* <View style={styles.overlayColor}/> */}
                    <LinearGradient
                        colors={['rgba(253,246,253,0.0)', 'rgba(200,51,202,0.5)']}
                        style={styles.overlayColor}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    />
                    <Image
                        source={{ uri: dados === undefined ? null : dados.profile_image }}
                        style={styles.img}
                    />
                </TouchableOpacity>
                <View style={styles.mainTextContainer}>
                    <Text
                        style={styles.subGreetingText}
                    >
                        Olá,
                    </Text>
                    <Text
                        style={styles.subMainText}
                    >
                        {dados === undefined ? '' : dados.name}
                    </Text>
                </View>

                {/* <SearchBar
                    placeholder="Buscar um profissional"
                    style={styles.search}
                    value={search}
                    onChangeText={setSearch}
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.searchBarInputContainer}
                    inputStyle={styles.searchBarInput}
                    round={true}
                    placeholderTextColor='#FFF'
                    searchIcon={
                        <Icon
                            onPress={()=> navigation.navigate('Professionals', {search: search})}
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
                            onPress={()=>setSearch('')}
                        />
                    }
                    lightTheme={false}
                /> */}

                

                <View style={styles.containerText}>
                    <Text style={styles.lineText}>
                        Escolha um serviço
                        </Text>
                    
                </View>
                
                <FlatList
                    data={data}
                    keyExtractor={ (item)=>String(item.id) }
                    renderItem={({item})=>(
                        <TouchableOpacity style={styles.servicesButton}
                            onPress={()=>navigation.navigate('Professionals')}
                            activeOpacity={0.7}
                        >
                        <LinearGradient
                            colors={['#C833CA', '#7B206F']}
                            style={styles.servicesItem}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                        >
                            {item.icon}
                            <Text style={styles.servicesLabel}>
                                {item.service}
                            </Text>
                        </LinearGradient>
                        </TouchableOpacity>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.servicesContainer}
                />
            </View>
            <RoundBG2
                style={styles.background}
            />
        </View>
        </SafeAreaView>
    );
}

export default Home;