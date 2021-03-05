import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


const Login = () => {
    return(
        <View style={styles.container}>
           <View>
                <Text style={styles.textStyle}>login</Text>

                <Input
                    placeholder="Username"
                    leftIcon={
                        <Icon
                            name='user'
                            size={27}
                            color='blueviolet'
                        />
                    }
                />

                <Input
                    placeholder="Username"
                    leftIcon={
                        <Icon
                            name='user-lock'
                            size={27}
                            color='blueviolet'
                        />
                    }
                />
           </View>
        </View>
    );
}

export default Login;