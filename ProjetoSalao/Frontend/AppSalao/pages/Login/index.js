import React, { useState, useEffect } from 'react';
import {View, Text, Image, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { HairIcon, LogoIcon } from '../../assets/SvgIcons';
import { RoundBG1 } from '../../assets/SvgComponents';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Deve ser um email valido').required('Esse campo é obrigatorio'),
    password: Yup.string().required('Esse campo é obrigatorio'),
});

const Login = () => {

    const navigation = useNavigation();
    const authentication = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [eye, setEye] = useState(true);

    // const initialValues = {
    //     password : '',
    //     email : '',
    // }

    const auth = async(values)=>{
        try {
            const response = await api.post('/login', {
                email: values.email,
                password: values.password
            });
            // setEmail('');
            // setPassword('');
            if(response.data.auth){
                await AsyncStorage.setItem('auth', JSON.stringify(response.data));
                navigation.navigate('Home');
            } else{
                Alert.alert('não encontrado');
            }
            
        } catch (e) {
            console.log(e);
        }
    }

   /*  const setDataStorage = async (key, value)=>{
        try {
            await AsyncStorage.setItem(key, value)
            getDataStorage();
        } catch (e){
            console.log(e);
        }
    }

    const getDataStorage = async ()=>{
        try {
            let auth = await AsyncStorage.getItem('auth');
            auth = JSON.parse(auth);
            if(auth.token !== null){
                navigation.navigate('Home');
            }
        } catch (e) {
            console.log(e);
        }
    } */

    useEffect(()=>{
         if(authentication?.token){ 
            navigation.navigate('Home');
        }
    }, [authentication]);

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
            <SafeAreaView>
                <Formik
                    initialValues={{email, password}}
                    onSubmit={auth}
                    enableReinitialize
                >
                    {({ handleChange, handleSubmit, handleBlur, values, errors, touched, isValid, setFieldValue }) => (
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.logoContainer}>
                                <LogoIcon style={styles.logo} />
                                <Text style={styles.title}>
                                    Studio Hair Style
                                </Text>
                            </View>
                            <View style={styles.form}>

                            {/* <Image
                                source={require('../../assets/logoApp.png')}
                                style={styles.img}
                            /> */}
                            <Input
                                placeholder="Email"
                                inputContainerStyle={styles.inputStyles}
                                // leftIcon={
                                //     <Icon
                                //         name='email'
                                //         size={24}
                                //         color='#AAA'
                                //     />
                                // }
                                value={values.email}
                                onChangeText={handleChange('email')}
                            // onBlur={handleBlur('email')}
                            // errorMessage={errors.email && touched.email ? errors.email : null}
                            />
                            <Input
                                placeholder="Senha"
                                // leftIcon={
                                //     <Icon
                                //         name='lock'
                                //         size={24}
                                //         color='#AAA'
                                //     />
                                // }
                                rightIcon={
                                    <Icon
                                        name={eye ? 'visibility' : 'visibility-off'}
                                        size={24}
                                        color='#AAA'
                                        onPress={() => setEye(!eye)}
                                    />
                                }
                                secureTextEntry={eye}
                                inputContainerStyle={styles.inputStyles2}
                                value={values.password}
                                onChangeText={handleChange('password')}
                            // onBlur={handleBlur('password')}
                            // errorMessage={errors.password && touched.password ? errors.password : null}
                            />
                            <Text style={styles.resetPassword}>Esqueceu a senha?</Text>
                            <RectButton
                                style={styles.buttonLogin}
                                onPress={()=>handleSubmit()}
                            >   
                                <Text style={styles.buttonText}>Entrar</Text>
                                <Icon
                                    name='chevron-right'
                                    color='#FFF'
                                    size={30}
                                    style={styles.buttonIcon}
                                />
                            </RectButton>
                            <RectButton
                                style={styles.buttonSignup}
                                onPress={() => navigation.navigate('SignUp')}
                            >
                                <Text style={styles.buttonText2}>Cadastrar-se</Text>
                            </RectButton>
                            {/* <View style={styles.topCircle}>
                            </View>
                            <View style={styles.circle}>
                                <LinearGradient
                                    // Background Linear Gradient
                                    colors={['#EFA8F1', '#C433C7']}
                                    style={styles.circle}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                />
                            </View> */}
                        </View>
                        <View style={styles.footer}>
                            <View style={styles.top}/>
                            <View style={styles.bottom}/>
                        </View>
                        </View>
                        <RoundBG1
                            style={styles.svg}
                        />
                    </View>
                    )}
                </Formik>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default Login;