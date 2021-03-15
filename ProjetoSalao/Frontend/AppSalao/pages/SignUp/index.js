import React from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {Formik} from 'formik';

const SignUp = () =>{

    return(
        <View style={styles.background}>
            <LinearGradient
        // Background Linear Gradient
        colors={['white', 'blueviolet']}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
            > 


          <View style={styles.form}>
            <Image
              source={require('../../assets/logoApp.png')}
              style={styles.img}
            />

           
              <Input
                placeholder="Email"
                style={styles.inputStyles}
              />

              <Input
                placeholder="Senha"
                style={styles.inputStyles}
                secureTextEntry={true}
              />
          

            <Button
                buttonStyle={styles.button}
                title="Cadastre-se"
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

export default SignUp;