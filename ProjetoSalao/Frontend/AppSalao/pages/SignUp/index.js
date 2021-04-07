import React, { useState } from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';

const CreateUserSchema = Yup.object().shape({
    email: Yup.string().email('Deve ser um email valido').required('Esse campo é obrigatorio'),
    password: Yup.string().required('Esse campo é obrigatorio'),
});

const SignUp = () =>{

  const navigation = useNavigation();

  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);

  const initialValues = {
    password2 : '',
    password : '',
    email : '',

  }

  const postUser = async (values)=>{
    try {
      await api.post('/clients', values);
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  }

    return(
      <Formik
            initialValues={initialValues}
            onSubmit={values => postUser(values)}
            validationSchema={CreateUserSchema}
        >

        {({handleChange, handleSubmit, handleBlur, values, errors, touched, isValid})=>(

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
                  onPress={() => setEye(!eye)}
                />
              }
              secureTextEntry={eye}
              inputContainerStyle={styles.inputStyles}

              value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    errorMessage={errors.password  && touched.password ? errors.password : null}
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

                    value={values.password2}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    errorMessage={errors.password  && touched.password ? errors.password : null}
            />


            <Button
                buttonStyle={styles.button}
                title="Cadastre-se"
                onPress={handleSubmit}
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

export default SignUp;