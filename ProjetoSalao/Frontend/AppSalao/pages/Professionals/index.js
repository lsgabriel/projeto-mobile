import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';
import styles from './styles';
import ProfessionalListItem from '../../components/ProfessionalListItem';
import data from './data';
import { useNavigation } from '@react-navigation/native';

const Professionals = () => {
    const navigation = useNavigation();

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
                data={data}
                renderItem={({item})=> <ProfessionalListItem item={item} />}
                keyExtractor={item=>String(item.id)}
            />
        </View>
    )
}

export default Professionals;