import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'

const ProfileSetupNameScreen = ({ navigation }) => {
    return (
        <ImageBackground style={ styles.backgroundImage } source={ require('../img/woman-squat-rack.jpg') }>
            <View style={ styles.overlay }></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    overlay: {
        backgroundColor: 'rgba(46, 180, 153, 0.7)',
        bottom: 0,
        height: Dimensions.get('window').height,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        width: Dimensions.get('window').width,
    },
});

export default ProfileSetupNameScreen;