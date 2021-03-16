import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Professionals from './pages/Professionals';

const Stack = createStackNavigator();

const routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Professionals" component={Professionals} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />

            
            {/* 1- login  2- signUp 
            3- serviços 4-perfil-usuario
            5- profissionais 6-agenda */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default routes;