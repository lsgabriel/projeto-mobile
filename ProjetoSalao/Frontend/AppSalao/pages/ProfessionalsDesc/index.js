import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ProfessionalsDesc = ({route})=>{
    
    const item = route.params;
    const navigation = useNavigation();
    
    const [Pfav, setPfav] = useState(item.Pfav);
    
    const sendMessage = ()=>{
        const message = `Olá ${item.name}, gostaria de agendar um horário com você.`;
        const url = `whatsapp://send?text=${message}&phone=5516997491972`;
        Linking.openURL(url);
    }   
    
    return(
        <View style={styles.container}>
            <Header
                backgroundColor='#CA33D2'
            >
                <Icon type='font-awesome' name='angle-left' color='#FFF' size={30}
                    onPress={()=>{navigation.goBack()}}
                />
                <Text
                    style={styles.headerTitle}
                >
                Profissional</Text>
            </Header>
            <Icon
                type='material-community' name={item.Pfav ? 'star' : 'star-outline'} color='#CA33D2' containerStyle={styles.star} size={90}
                onPress={()=> setPfav(!Pfav)}
            />
            <Image
                source={{uri:item.profile_image}}
                style={styles.img}
            />

            <Text
                style={styles.title}
            >
            {item.name}</Text>

            <Text
                style={styles.desc}
            >
            {item.description}</Text>
            <Text
                style={styles.desc}
            >
            {item.type}
            </Text>
            <Button
                buttonStyle={styles.button}
                onPress={sendMessage}
                title="Agendar Horário"
                icon={
                    <Icon type='font-awesome' name='whatsapp' color='#FFF' style={styles.buttonIcon} />
                }
            />
        </View>
    );
}

export default ProfessionalsDesc;