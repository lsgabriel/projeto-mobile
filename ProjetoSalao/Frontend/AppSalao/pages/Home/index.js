import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';
import data from '../Professionals/data';
import styles from './styles';

const Home = () => {

    return <View style = {styles.main}>
            {/* <Header 
                style = {styles.header}
            /> */}
            <Image
              source = {{uri:data[1].Ppic}}
              style = {styles.img}
            />
            <Text
                style = {styles.mainText}
            >
                Olá, {data[1].Pname}
            </Text>

            <SearchBar 
                placeholder="Buscar um profissional" 
                style = {styles.SearchBar} 
            />

            <Text style = {styles.dividerText}
            >ou</Text>

            <View style = {styles.containerText}>
                <View style = {styles.line}/>
                <Text style = {styles.lineText}>
                    Escolha um serviço
                </Text>
                <View style = {styles.line}/>
            </View>

            <View>
                <TouchableOpacity>
                    <Icon />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon />
                </TouchableOpacity>
            </View>



        </View>
}

export default Home;