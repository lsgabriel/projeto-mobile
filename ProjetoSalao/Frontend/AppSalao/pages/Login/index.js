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
            <LinearGradient
                // Background Linear Gradient
                colors={['whitesmoke', 'blueviolet']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >

           <View style={styles.form}>

               {/*  <Image
                    style={styles.img}
                    source={{
                        uri: { LogoSalao }
                    }}
                /> */}

                <Input
                    placeholder="Email"
                    style={styles.inputStyles}
                />

                <Input
                    placeholder="Senha"
                    style={styles.inputStyles}
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

                <View style={styles.circle}>
                <LinearGradient
                // Background Linear Gradient
                colors={['whitesmoke', 'blueviolet']}
                style={styles.circle}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />
                </View>
             </View>  
        
             </LinearGradient>
        </View>
        
    );
}

export default Login;