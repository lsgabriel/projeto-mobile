import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';

const Stack = createStackNavigator();

const routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Home" component={Home} /> */}  
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default routes;