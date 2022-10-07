import React from 'react';
import {
    Dimensions,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import OnboardingSlide from '../components/OnboardingSlide';
import OnboardingSlidesInfo from '../data/OnboardingSlidesInfo.json';

const OnboardingScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../img/woman-squat-rack.jpg')} imageStyle={{opacity: 0.7}}>
            <View style={styles.overlay}/>
            <View style={styles.slidesContainer}>
                <FlatList
                    bounces={false}
                    data={OnboardingSlidesInfo}
                    horizontal
                    keyExtractor={(item) => item.id}
                    pagingEnabled
                    renderItem={({ item }) => <OnboardingSlide item={item}/>}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        paddingBottom: Dimensions.get('window').height * 0.015,
        paddingLeft: Dimensions.get('window').width * 0.25,
        paddingRight: Dimensions.get('window').width * 0.25,
        paddingTop: Dimensions.get('window').height * 0.015,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: Dimensions.get('window').height * 0.25,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fa7e61',
        fontSize: '1.2rem',
        fontWeight: 500,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(250, 126, 97, 0.8)',
    },
    slidesContainer: {
        backgroundColor: 'transparent',
        height: Dimensions.get('window').height * 0.75,
    }
});

export default OnboardingScreen;