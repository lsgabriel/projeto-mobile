import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import LogoSalao from '../../assets/logoSalao2.jpeg';


const Login = () => {
    return(
        <View style={styles.container}>
           <View style={styles.form}>

                <Image
                    style={styles.img}
                    source={{
                        uri: { LogoSalao }
                    }}
                />

                <Input
                    placeholder="Username"
                    leftIcon={
                        <Icon
                            name='user'
                            size={27}
                            color='blueviolet'
                        />
                    }
                />

                <Input
                    placeholder="Username"
                    leftIcon={
                        <Icon
                            name='user-lock'
                            size={27}
                            color='blueviolet'
                        />
                    }
                />

                <Text style={styles.resetPassword}>Esqueceu a senha?</Text>

                <Button
                    buttonStyle={styles.buttonLogin}
                    title="LOGIN"
                />

                <Button
                    buttonStyle={styles.buttonSignup}
                    title="SIGN UP"
                />
             </View>  
        

             <LinearGradient
                // Background Linear Gradient
                colors={['whitesmoke', 'blueviolet']}
                style={styles.container} 
            />
        </View>
        
    );
}

export default Login;