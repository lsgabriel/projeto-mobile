import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Professionals from './pages/Professionals';
import ProfessionalsDesc from './pages/ProfessionalsDesc';
import Home from './pages/Home'; 
import PerfilUser from './pages/PerfilUser';
import EditUser from './pages/EditUser';

import AuthRoutes from './tab.routes';

const Stack = createStackNavigator();

const routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
           
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />

                <Stack.Screen name="Home" component={AuthRoutes} />

                <Stack.Screen name="PerfilUser" component={PerfilUser}/>
                <Stack.Screen name="EditUser" component={EditUser}/>
                {/* <Stack.Screen name="PerfilUserTab" component={AuthRoutes}/> */}
                <Stack.Screen name="Professionals" component={Professionals} />
                <Stack.Screen name="ProfessionalsDesc" component={ProfessionalsDesc} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default routes;