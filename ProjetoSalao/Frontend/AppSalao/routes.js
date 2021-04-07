import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Professionals from './pages/Professionals';
import ProfessionalsDesc from './pages/ProfessionalsDesc';
import Home from './pages/Home';/* 
import PerfilUser from './pages/PerfilUser'; */

const Stack = createStackNavigator();

const routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
                
            <Stack.Screen name="Login" component={Login} />{/* 
            <Stack.Screen name="PerfilUser" component={PerfilUser}/> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Professionals" component={Professionals} />
            
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ProfessionalsDesc" component={ProfessionalsDesc} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default routes;