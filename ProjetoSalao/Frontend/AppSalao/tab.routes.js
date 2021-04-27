import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


import Home from './pages/Home';
import Perfil from './pages/PerfilUser';
import Search from './pages/Professionals';


const AppTab = createBottomTabNavigator();

const AuthRoutes = ()=>{
    return(

        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: '#FFF',
                inactiveTintColor: '#B8B8B8',
                labelPosition: 'below-icon',
                style: {
                    paddingVertical: 10,
                    height: 70,
                    backgroundColor: '#922C85',
                    alignItems: 'center',
                    paddingBottom: 10,
                    borderTopStartRadius: 30,
                    borderTopEndRadius: 30,
                },
            }}>

                <AppTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: (({ color }) =>(
                            <MaterialIcons
                                name="home"
                                size={35}
                                color={color}
                            />
                        ))
                    }}
                />

                <AppTab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: (({ color }) =>(
                            <MaterialIcons
                                name="search"
                                size={35}
                                color={color}
                            />
                        ))
                    }}
                />

                <AppTab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: (({ color }) =>(
                            <MaterialIcons
                                name="person"
                                size={35}
                                color={color}
                            />
                        ))                        
                    }}
                />

            </AppTab.Navigator>
    )
}

export default AuthRoutes;