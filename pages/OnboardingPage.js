import React from 'react';
import {
    Animated,
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
    const scrollX = new Animated.Value(0);

    function renderDots() {
        const dotPosition = Animated.divide(scrollX, Dimensions.get('window').width);

        return (
            <View style={ styles.slideIndicatorContainer }>
                {
                    OnboardingSlidesInfo.map((item, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })

                        const color = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: ['#FFFFFF', '#F98659', '#FFFFFF'],
                            extrapolate: 'clamp'
                        })

                        return (
                            <Animated.View
                                key={ index }
                                opacity={ opacity }
                                style={ styles.dot }
                            />
                        );
                    })
                }
            </View>
        );
    }

    return (
        <ImageBackground style={ styles.backgroundImage } source={ require('../img/people-running.jpg') }>
            <View style={ styles.overlay }></View>
            <View style={ styles.container }>
                <View style={ styles.slidesContainer }>
                    <FlatList
                        bounces={ false }
                        data={ OnboardingSlidesInfo }
                        decelerationRate={ 0 }
                        horizontal
                        keyExtractor={ (item) => item.id }
                        onScroll={ Animated.event([{
                            nativeEvent: { contentOffset: { x: scrollX } } },
                        ], { useNativeDriver: false })}
                        pagingEnabled
                        renderItem={ ({ item }) => <OnboardingSlide item={ item }/> }
                        scrollEventThrottle={ 16 }
                        showsHorizontalScrollIndicator={ false }
                    />
                </View>
                <View style={ styles.slideIndicatorRootContainer }>
                    { renderDots() }
                </View>
                <View style={ styles.buttonContainer }>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('Splash') }
                        style={ styles.getStartedButton }
                    >
                        <Text style={ styles.getStartedButtonText }>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('Splash') }
                        style={ styles.termsButton }
                    >
                        <Text style={ styles.termsButtonText }>Terms and Conditions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    buttonContainer: {
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.25,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        paddingBottom: '10%',
    },
    container: {
        alignItems: 'center',
        background: 'transparent',
        flex: 1,
        justifyContent: 'center',
    },
    dot: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height: 10,
        marginHorizontal: '1%',
        width: 10,
    },
    getStartedButton: {
        alignItems: 'center',
        backgroundColor: '#F98659',
        borderRadius: '50',
        height: Dimensions.get('window').height * 0.06,
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.7,
    },
    getStartedButtonText: {
        color: '#FFFFFF',
        fontSize: '23',
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
    slidesContainer: {
        height: Dimensions.get('window').height * 0.7,
        width: Dimensions.get('window').width,
    },
    slideIndicatorContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    slideIndicatorRootContainer: {
        display: 'flex',
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width,
    },
    termsButton: {
        alignItems: 'center',
        borderColor: '#FFFFFF',
        borderRadius: '50',
        borderStyle: 'solid',
        borderWidth: '2',
        height: Dimensions.get('window').height * 0.06,
        justifyContent: 'center',
        marginTop: '2%',
        width: Dimensions.get('window').width * 0.7,
    },
    termsButtonText: {
        color: '#FFFFFF',
        fontSize: '23',
    },
})

export default OnboardingScreen;