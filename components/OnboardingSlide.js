import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const OnboardingSlide = ({ item }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.slideImageContainer } >
                <Image style={ styles.slideImage } source={ require('../img/r2f-temporary-logo-bw.png') }></Image>
            </View>
            <View style={ styles.textContainer } >
                <Text style={ styles.heading }>{item.heading}</Text>
                <Text style={ styles.body }>{item.body}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        color: '#FFFFFF',
        fontSize: '20',
        textAlign: 'center',
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    heading: {
        color: '#FFFFFF',
        fontSize: '40',
        fontWeight: '800',
        marginBottom: '5%',
        textAlign: 'center',
    },
    slideImage: {
        height: Dimensions.get('window').height * 0.3,
        width: Dimensions.get('window').height * 0.3,
    },
    slideImageContainer: {
        alignItems: 'center',
        height: '60%',
        justifyContent: 'flex-end',
        width: Dimensions.get('window').width,
    },
    textContainer: {
        alignItems: 'center',
        height: '40%',
        justifyContent: 'center',
        paddingHorizontal: '10%',
        width: Dimensions.get('window').width,
    },
});

export default OnboardingSlide;