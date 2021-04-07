import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const useAuth = () => {

    const [auth, setAuth] = useState('');

    const getData= async () => {
        try{
            setAuth(await AsyncStorage.getItem('auth'));
        } catch (error) {
            console.log(error);
        }
   }

   useEffect(() => {
       getData();
   }, [auth])

   return (auth != '' ? JSON.parse(auth) : null);
}

export default useAuth;