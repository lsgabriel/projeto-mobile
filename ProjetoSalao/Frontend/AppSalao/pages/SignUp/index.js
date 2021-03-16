import React, { useState } from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';

const SignUp = () =>{

  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);

    return(
        <View style={styles.background}>
            <LinearGradient
        // Background Linear Gradient
        colors={['#FFDEFF', '#C833CA']}
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
              inputContainerStyle={styles.inputStyles}
              leftIcon={
                <Icon
                  name='email'
                  size={24}
                  color='#AAA'
                />
              }
            />

            <Input
              placeholder="Senha"
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='#AAA'
                />
              }
              rightIcon={
                <Icon
                  name={eye ? 'visibility' : 'visibility-off'}
                  size={24}
                  color='#AAA'
                  onPress={() => setEye(!eye)}
                />
              }
              secureTextEntry={eye}
              inputContainerStyle={styles.inputStyles}
            />
            
            <Input
              placeholder="Confirme a Senha"
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='#AAA'
                />
              }
              rightIcon={
                <Icon
                  name={eye2 ? 'visibility' : 'visibility-off'}
                  size={24}
                  color='#AAA'
                  onPress={() => setEye2(!eye2)}
                />
              }
              secureTextEntry={eye2}
              inputContainerStyle={styles.inputStyles}
            />


            <Button
                buttonStyle={styles.button}
                title="Cadastre-se"
            />

            <View style={styles.topCircle}>
            </View>

            <View style={styles.circle}>
              <LinearGradient
                // Background Linear Gradient
                colors={['#EFA8F1', '#C433C7']}
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