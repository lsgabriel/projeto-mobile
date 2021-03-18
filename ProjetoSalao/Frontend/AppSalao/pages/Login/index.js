import React, { useState } from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Deve ser um email valido').required('Esse campo é obrigatorio'),
    password: Yup.string().required('Esse campo é obrigatorio'),
});

const Login = () => {

    const [eye, setEye] = useState(true);
    const navigation = useNavigation();

    const initialValues = {
        password : '',
        email : '',
    }

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={values => saveUser(values)}
            validationSchema={LoginSchema}
        >

        {({handleChange, handleSubmit, handleBlur, values, errors, touched, isValid})=>(
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
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    errorMessage={errors.email && touched.email ? errors.email : null}
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
                            onPress={()=> setEye(!eye)}
                        />
                    }
                    secureTextEntry={eye}
                    inputContainerStyle={styles.inputStyles}

                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    errorMessage={errors.password  && touched.password ? errors.password : null}
                />
                <Text style={styles.resetPassword}>Esqueceu a senha?</Text>

                <Button
                    buttonStyle={styles.buttonLogin}
                    title="LOGIN"
                    onPress={handleSubmit}
                />

                <Button
                    buttonStyle={styles.buttonSignup}
                    title="SIGN UP"
                    onPress={()=>navigation.navigate('SignUp')}
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
        
    );
}

export default Login;