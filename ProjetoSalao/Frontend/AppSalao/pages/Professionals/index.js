import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import styles from './styles';
import ProfessionalListItem from '../../components/ProfessionalListItem';
// import data from './data';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';

const Professionals = ({route}) => {
    const navigation = useNavigation();
    const [dados, setDados] = useState();
    const [search, setSearch] = useState(route?.params?.search == undefined ? '' : route.params.search);
    const auth = useAuth(); 
    /* const [auth, setAuth] = useState();

    const getAuth = useCallback(async ()=>{
        const respAuth = JSON.parse(await AsyncStorage.getItem('auth'));
        setAuth(respAuth);
    },[]) */

    const loadingData = useCallback(async ()=>{
        console.log('teste')
        try {
          /*   if(auth.token){ */
                let response;
                if (search === '') {
                    response = await api.get(`/professionals`, {
                        headers: { 'x-access-token': auth.token }
                    });
                }
                else {
                    response = await api.get(`/professionals/search/${search}`, {
                        headers: { 'x-access-token': auth.token }
                    });
                }
                setDados(response.data);
            /* } */
            
        } catch (error) {
            console.log(error);
        }
    }, [search,auth]);

    useEffect(()=>{
       /*  getAuth(); */
        loadingData();
    }, [/* getAuth , */ search]);

    return (
        <View>
            <Header
                backgroundColor='#CA33D2'
            >
                <Icon
                    type='font-awesome' name='angle-left' color='#FFF' size={30}
                    onPress={() => { navigation.goBack() }}
                />
                <Text
                    style={styles.headerTitle}
                >
                    Profissionais
            </Text>
                <View />
            </Header>
            <SearchBar
                value={search}
                onChangeText={setSearch}
                placeholder='Busque um Profissional'
                lightTheme
            />
            <FlatList
                data={dados}
                renderItem={({item})=> <ProfessionalListItem item={item} />}
                keyExtractor={(item)=> String(item.id)}
            />
        </View>
    )
}

export default Professionals;