import React from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native'

const SplashScreen = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
    });

    return (
        <ImageBackground style={ styles.backgroundImage } source={ require('../img/guy-running-2.jpg') }>
            <View style={ styles.overlay }/>
            <Image style={ styles.logo } source={ require('../img/r2f-temporary-logo-bw.png') }/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        alignItems: 'center',
        flex: 1,
        height: null,
        justifyContent: 'center',
        width: null,
    },
    logo: {
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').height * 0.2,
    },
    overlay: {
        backgroundColor: 'rgba(249, 134, 89, 0.7)',
        bottom: 0,
        height: Dimensions.get('window').height,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        width: Dimensions.get('window').width,
    },
});

export default SplashScreen;