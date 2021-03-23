import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../Professionals/data';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const Home = () => {

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#FFDEFF', '#C833CA']}
            style={styles.mainContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.main}>
                {/* <Header 
                        style = {styles.header}
                    /> */}
                <TouchableWithoutFeedback
                    // onPress={navigator.navigate('Perfil')}
                    onPress={()=>console.log('teste')}
                >
                    <Image
                        source={{ uri: data[1].Ppic }}
                        style={styles.img}
                    />
                </TouchableWithoutFeedback>
                <View style={styles.mainTextContainer}>
                    <Text
                        style={styles.subMainText}
                    >
                        Olá,
                    </Text>
                    <Text
                        style={styles.mainText}
                    >
                        {data[1].Pname}
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

                <Text style={styles.dividerText}
                >ou</Text>

                <View style={styles.containerText}>
                    <View style={styles.line} />
                    <Text style={styles.lineText}>
                        Escolha um serviço
                        </Text>
                    <View style={styles.line} />
                </View>

                <View style={styles.servicesContainer}>
                    
                    <TouchableOpacity style={styles.servicesItem}>
                        <Icon
                            name='email'
                            size={45}
                            style={styles.servicesIcon}
                            color='#832189'
                        />
                        <Text style={styles.servicesLabel}>
                            Manicure
                        </Text>
                    </TouchableOpacity>
                                        
                    <TouchableOpacity style={styles.servicesItem}>
                        <Icon
                            name='email'
                            size={45}
                            style={styles.servicesIcon}
                            color='#832189'
                        />
                        <Text style={styles.servicesLabel}>
                            Maquiagem
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.servicesItem}>
                        <Icon
                            name='email'
                            size={45}
                            style={styles.servicesIcon}
                            color='#832189'
                        />
                        <Text style={styles.servicesLabel}>
                            Massagem
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.servicesItem}>
                        <Icon
                            name='email'
                            size={45}
                            style={styles.servicesIcon}
                            color='#832189'
                        />
                        <Text style={styles.servicesLabel}>
                            Cabelereira
                        </Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        </LinearGradient>
    );
}

export default Home;