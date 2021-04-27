import React, { useState } from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Input, Button, Header, Icon } from 'react-native-elements';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';

const CreateUserSchema = Yup.object().shape({
    email: Yup.string().email('Deve ser um email valido').required('Esse campo é obrigatorio'),
    password: Yup.string().required('Esse campo é obrigatorio'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
      .required('Esse campo é obrigatório')
});

const SignUp = () =>{

  const navigation = useNavigation();

  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);

  const initialValues = {
    name:'',
    passwordConfirmation : '',
    password : '',
    email : '',
    phone:'',
    birthDate:'',

  }

  // const postUser = async (values)=>{
  //   try {
  //     await api.post('/clients', values);
  //     navigation.navigate('Login');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

    return(
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }} 
          keyboardShouldPersistTaps='handled'
        >
          <Formik
            initialValues={initialValues}
            // onSubmit={values => postUser(values)}
            validationSchema={CreateUserSchema}
          >
          {({ handleChange, handleSubmit, handleBlur, values, errors, touched, isValid }) => (
            <View style={styles.background}>
                <Header
                  containerStyle={{borderBottomWidth: 0,}}
                  backgroundColor="transparent"
                  barStyle="light-content"
                  leftComponent={
                    <Icon
                        type='ionicon'
                        name='chevron-back-outline'
                        color='#FFF'
                        size={30}
                        onPress={()=> navigation.goBack()}
                    />
                  }
                />
              <Text style={styles.title}>Editar Perfil</Text>
              
                <View style={styles.form}>
                  <Input
                    placeholder="Nome"
                    inputContainerStyle={styles.inputStyles}
                    leftIcon={
                      <Icon
                        name='person'
                        size={24}
                        color='#AAA'
                      />
                    }
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
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

                    errorStyle={{ color: '#fff' }}
                  />

                  
                  <Input
                    placeholder="Telefone"
                    inputContainerStyle={styles.inputStyles}
                    leftIcon={
                      <Icon
                        name='phone'
                        size={24}
                        color='#AAA'
                      />
                    }
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                  />

                  <Input
                    placeholder="Data de nascimento"
                    inputContainerStyle={styles.inputStyles}
                    leftIcon={
                      <Icon
                        name='event'
                        size={24}
                        color='#AAA'
                      />
                    }
                    value={values.birthDate}
                    onChangeText={handleChange('birthDate')}
                    onBlur={handleBlur('birthDate')}
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
                    errorMessage={errors.password && touched.password ? errors.password : null}

                    errorStyle={{ color: '#fff' }}
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

                    value={values.passwordConfirmation}
                    onChangeText={handleChange('passwordConfirmation')}
                    onBlur={handleBlur('passwordConfirmation')}
                    errorMessage={
                      errors.passwordConfirmation && 
                      touched.passwordConfirmation ? errors.passwordConfirmation : null
                    }
                    errorStyle={{ color: '#fff' }}
                  />
                </View>
                <Button
                  disabled={!isValid}
                  buttonStyle={styles.button}
                  title="Confirmar"
                  // onPress={handleSubmit}
                />
            </View>
          )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}

export default SignUp;