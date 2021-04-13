import React, { useState, useEffect } from 'react';
import {View, Text, Image, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
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

    const initialValues = {
        password : '',
        email : '',
    }

    const auth = async()=>{
        console.log(`email: ${email} senha: ${password}`)
        try {
            const response = await api.post('/login',{
                email: email,
                password: password
            });
            setDataStorage('auth', JSON.stringify(response.data));
        } catch (e) {
            console.log(e);
        }
    }

    const setDataStorage = async (key, value)=>{
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
    }

    useEffect(()=>{
        if(authentication?.token){
            navigation.navigate('Home');
        }
    }, [authentication]);

    return(
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                <Formik
                    initialValues={{email, password}}
                    onSubmit={auth}
                >

                    {({ handleChange, handleSubmit, handleBlur, values, errors, touched, isValid, setFieldValue }) => (
                        <View style={styles.container}>
                            <LinearGradient
                                // Background Linear Gradient
                                colors={['#FFDEFF', '#C833CA']}
                                style={styles.container}
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
                                        value={values.email}
                                        onChangeText={ handleChange('email') }
                                        // onBlur={handleBlur('email')}
                                        // errorMessage={errors.email && touched.email ? errors.email : null}
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

                                        value={values.password}
                                        onChangeText={ handleChange('password') }
                                        // onBlur={handleBlur('password')}
                                        // errorMessage={errors.password && touched.password ? errors.password : null}
                                    />
                                    <Text style={styles.resetPassword}>Esqueceu a senha?</Text>

                                    <Button
                                        buttonStyle={styles.buttonLogin}
                                        title="LOGIN"
                                        onPress={()=> handleSubmit()}
                                    />

                                    <Button
                                        buttonStyle={styles.buttonSignup}
                                        title="SIGN UP"
                                        onPress={() => navigation.navigate('SignUp')}
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
                    )}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Login;