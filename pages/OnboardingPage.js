import React from 'react';
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import OnboardingSlide from '../components/OnboardingSlide';
import OnboardingSlidesInfo from '../data/OnboardingSlidesInfo.json';

const OnboardingScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.slidesContainer }>
                <FlatList
                    bounces={ false }
                    data={ OnboardingSlidesInfo }
                    horizontal
                    keyExtractor={ (item) => item.id }
                    pagingEnabled
                    renderItem={ ({ item }) => <OnboardingSlide item={ item }/> }
                    showsHorizontalScrollIndicator={ false }
                />
            </View>
            <View style={ styles.bottomContainer }>
                <View style={ styles.slidesIndicatorContainer }>
                    <Text>Hello!</Text>
                </View>
                <View style={ styles.buttonContainer }>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('Profile Setup') }
                        style={ styles.button }
                    >
                        <Text style={ styles.buttonText }>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomContainer: {
        flexDirection: 'row',
        height: Dimensions.get('window').height * 0.2,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FF784F',
        borderRadius: '50px',
        height: Dimensions.get('window').height * 0.06,
        justifyContent: 'center',
        paddingTop: Dimensions.get('window').height * 0.005,
        width: Dimensions.get('window').width * 0.5,
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.65,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: '1.2rem',
        fontWeight: '600px'
    },
    container: {
        backgroundColor: '#FFFFFF',
    },
    slidesContainer: {
        height: Dimensions.get('window').height * 0.8,
    },
    slidesIndicatorContainer: {
        width: Dimensions.get('window').width * 0.35,
    },
});

export default OnboardingScreen;