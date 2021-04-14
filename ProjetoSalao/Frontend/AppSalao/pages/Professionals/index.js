import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';
import styles from './styles';
import ProfessionalListItem from '../../components/ProfessionalListItem';
// import data from './data';
import { useNavigation } from '@react-navigation/native';

const Professionals = () => {
    const navigation = useNavigation();
    const [dados, setDados] = useState();

    const loadingData = useCallback(async ()=>{
        try {
            const respAuth = JSON.parse(await AsyncStorage.getItem('auth'))

            const response = await api.get(`/professionals` ,{
                headers: { 'x-access-token': respAuth?.token }
            });

            setDados(response.data);

        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(()=>{
        loadingData();
    }, []);

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
                placeholder='Busque um Profissional'
                lightTheme
            />
            <FlatList
                data={dados}
                renderItem={({item})=> <ProfessionalListItem item={item} />}
                keyExtractor={(item, index)=> item + index}
            />
        </View>
    )
}

export default Professionals;