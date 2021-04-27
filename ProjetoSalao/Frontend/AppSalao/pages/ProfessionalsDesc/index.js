import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import { RoundBG1 } from '../../assets/SvgComponents';

const ProfessionalsDesc = ({route})=>{
    
    const item = route.params;
    const navigation = useNavigation();
    
    const [Pfav, setPfav] = useState(item.Pfav);
    
    const sendMessage = ()=>{
        const message = `Olá ${item.name}, gostaria de agendar um horário com você.`;
        const url = `whatsapp://send?text=${message}&phone=5516997909738`;
        Linking.openURL(url);
    }   
    
    return(
        <View style={styles.container}>
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
            {/* <Icon
                type='material-community' name={item.Pfav ? 'star' : 'star-outline'} color='#CA33D2' containerStyle={styles.star} size={90}
                onPress={()=> setPfav(!Pfav)}
            /> */}
            <Image
                source={{uri:item.profile_image}}
                style={styles.img}
            />

            <Text
                style={styles.title}
            >
            {item.name}</Text>

            <View style={styles.divisor}/>

            <Text
                style={styles.desc}
            >
            {item.description}</Text>
            <Text
                style={styles.type}
            >
            {item.type}
            </Text>
            <RectButton 
                style={styles.button} 
                onPress={sendMessage}
            >
                <Text style={styles.buttonTitle}>Agendar Horário</Text>
                <Icon type='font-awesome' name='whatsapp' color='#7B206F' style={styles.buttonIcon} size={32} />
            </RectButton>
            <RoundBG1
                style={styles.background}
            />
        </View>
    );
}

export default ProfessionalsDesc;