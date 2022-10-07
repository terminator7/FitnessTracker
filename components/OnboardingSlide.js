import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const OnboardingSlide = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
        </View>
    );
}

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        height: Dimensions.get('window').height * 0.75,
        justifyContent: 'center',
        textAlign: 'center',
        width: Dimensions.get('window').width,
    },
    title: {
        color: '#FFFFFF',
        fontSize: '2.2rem',
        fontWeight: '600',
        paddingBottom: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    desc: {
        color: '#FFFFFF',
        fontSize: '1.2rem',
        paddingLeft: '40px',
        paddingRight: '40px',
    }
});

export default OnboardingSlide;