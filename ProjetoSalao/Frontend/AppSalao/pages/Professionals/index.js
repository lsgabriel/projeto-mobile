import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, KeyboardAvoidingView } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import styles from './styles';
import ProfessionalListItem from '../../components/ProfessionalListItem';
// import data from './data';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';

import Loading from '../../components/Loading';

const Professionals = ({route}) => {
    const navigation = useNavigation();
    const [dados, setDados] = useState([]);
    const [search, setSearch] = useState(route?.params?.search == undefined ? '' : route.params.search);
    // const auth = useAuth();
    const [auth, setAuth] = useState();
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFav = async()=>{
        const fav = JSON.parse(await AsyncStorage.getItem('hairstyle@favorites'));
        setFavorites(fav)
    }

    // const favorites = [2, 4];

    const getAuth = useCallback(async ()=>{
        const respAuth = JSON.parse(await AsyncStorage.getItem('auth'));
        setAuth(respAuth);
    },[])

    const loadingData = useCallback(async ()=>{
        console.log(search);
        console.log('teste');

        try {
            if(auth?.token){
                let response;
                if (search === '') {
                    response = await api.get(`/professionals`, {
                        headers: { 'x-access-token': auth?.token }
                    });
                }
                else {
                    response = await api.get(`/professionals/search/${search}`, {
                        headers: { 'x-access-token': auth?.token }
                    });
                }
                setDados(response.data);
                setLoading(false);
            }
            
        } catch (error) {
            console.log(error);
        }
    }, [search,auth]);

    useEffect(()=>{
        if(!dados.length){
            loadingData();
        }
    }, [loadingData]);

    useEffect(()=>{
        getAuth();
        getFav();
        loadingData();
    }, [getAuth , search]);

    if(loading)
        return <Loading />

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.mainContainer}>
                <Header
                    containerStyle={{borderBottomWidth: 0,}}
                    backgroundColor="transparent"
                    barStyle="dark-content"
                    leftComponent={
                        <Icon
                            type='font-awesome' name='angle-left' color='#7B206F' size={30}
                            onPress={() => { navigation.goBack() }}
                        />
                    }
                />
                <SearchBar
                    value={search}
                    onChangeText={setSearch}
                    placeholder='Busque um Profissional'
                    lightTheme={false}

                    style={styles.search}
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.searchBarInputContainer}
                    inputStyle={styles.searchBarInput}
                    round={true}
                    placeholderTextColor='#CF84C5'

                    searchIcon={
                        <Icon
                            name='search'
                            size={22}
                            color='#EFB7E8'
                        />
                    }
                    clearIcon={
                        <Icon 
                            name='close'
                            size={22}
                            color='#EFB7E8'
                            onPress={()=>setSearch('')}
                        />
                    }
                />

                <View style={styles.headerTitleContainer}>
                    <View style={styles.headerTitleLine}/>
                    <Text style={styles.headerTitle}>Profissionais</Text>
                    <View style={styles.headerTitleLine}/>
                </View>

                <FlatList
                    data={dados}
                    renderItem={({item})=> <ProfessionalListItem item={item} isFav={favorites} />}
                    keyExtractor={(item)=> String(item.id)}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Professionals;