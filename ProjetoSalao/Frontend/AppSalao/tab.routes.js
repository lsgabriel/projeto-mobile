import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';


import Home from './pages/Home';
import Perfil from './pages/PerfilUser';


const AppTab = createBottomTabNavigator();

const AuthRoutes = ()=>{
    return(
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: '#FFF',
                inactiveTintColor: '#B8B8B8',
                labelPosition: 'below-icon',
                style: {
                    paddingVertical: Platform.OS == 'ios' ? 20 : 0,
                    height: 70,
                    backgroundColor: '#7B206F'
                },
            }}>

                <AppTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: (({ size, color }) =>(
                            <MaterialIcons
                                name="home"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />

                <AppTab.Screen
                    name="Search"
                    component={Perfil}
                    options={{
                        tabBarIcon: (({ size, color }) =>(
                            <MaterialIcons
                                name="search"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />

                <AppTab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: (({ size, color }) =>(
                            <MaterialIcons
                                name="person"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />

            </AppTab.Navigator>
    )
}

export default AuthRoutes;