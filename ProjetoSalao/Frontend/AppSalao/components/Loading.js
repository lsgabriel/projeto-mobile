import React from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
// import LottieView from 'lottie-react-native';

// import loadAnimation from '../assets/loading.json';

const Loading = ()=>{
    return(
        <View style={styles.container}>
            {/* <LottieView
                source={loadAnimation}
                autoPlay
                loop
                style={styles.animation}
            /> */}
            <ActivityIndicator
                size="large" 
                color="#F128F5"
            />
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation:{
        backgroundColor: 'transparent',
        width: 200,
        height: 200,
    },
})