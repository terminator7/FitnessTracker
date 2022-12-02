import React from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const OnboardingSlidesInfo = [
    {
        "id": "0",
        "img": require("../img/r2f-logo.png"),
        "heading": "Welcome to R2F",
        "body": "Keep track of your fitness and dietary goals without effort."
    },
    {
        "id": "1",
        "img": require("../img/goals.png"),
        "heading": "Create Goals",
        "body": "A minimal UI for setting both fitness and dietary plans."
    },
    {
        "id": "2",
        "img": require("../img/progress.png"),
        "heading": "Track Progress",
        "body": "Keep up to date with your accomplishments."
    },
    {
        "id": "3",
        "img": require("../img/money.png"),
        "heading": "All For Free",
        "body": "Built to provide a free and reliable alternative to paid subscription fitness tracker apps."
    }
]

const OnboardingScreen = ({ navigation }) => {
    const scrollX = new Animated.Value(0);

    function renderDots() {
        const dotPosition = Animated.divide(scrollX, Dimensions.get('window').width);

        return (
            <View style={ pageStyles.slideNavigator }>
                {
                    OnboardingSlidesInfo.map((item, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.5, 1, 0.5],
                            extrapolate: 'clamp'
                        })

                        const color = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
                            extrapolate: 'clamp'
                        })

                        const width = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: 'clamp'
                        })

                        return (
                            <Animated.View
                                key={ index }
                                opacity={ opacity }
                                style={ [pageStyles.slideNavigationDot, { backgroundColor: color, width: width }] }
                            />
                        );
                    })
                }
            </View>
        );
    }

    return (
        <ImageBackground style={ pageStyles.pageContainer } source={ require('../img/people-running.jpg') }>
            <View style={ pageStyles.pageOverlay }></View>
            <View style={ pageStyles.slidesContainer }>
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
            <View style={ pageStyles.slideNavigatorContainer }>
                { renderDots() }
            </View>
            <View style={ pageStyles.getStartedButtonContainer }>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Profile Setup') }
                    style={ pageStyles.getStartedButton }
                >
                    <Text style={ pageStyles.getStartedButtonText }>Get Started  →</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => Linking.openURL("https://github.com/terminator7/FitnessTracker") }
                    style={ pageStyles.secondButton }
                >
                    <Text style={ pageStyles.secondButtonText }>Terms & Conditions</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const OnboardingSlide = ({ item }) => {
    return (
        <View style={ slideStyles.slideContainer }>
            <View style={ slideStyles.imageContainer }>
                <Image source={ item.img } style={ slideStyles.image }></Image>
            </View>
            <View style={ slideStyles.textContainer }>
                <Text style={ slideStyles.heading }>{item.heading}</Text>
                <Text style={ slideStyles.body }>{item.body}</Text>
            </View>
        </View>
    );
}

const pageStyles = StyleSheet.create({
    getStartedButton: {
        alignItems: 'center',
        backgroundColor: '#F98659',
        borderRadius: '50',
        height: '25%',
        justifyContent: 'center',
        width: '70%',
    },
    getStartedButtonContainer: {
        alignItems: 'center',
        height: '25%',
    },
    getStartedButtonText: {
        color: '#F2F2F2',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    pageContainer: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    pageOverlay: {
        backgroundColor: 'rgba(46, 180, 153, 0.7)',
        bottom: 0,
        height: Dimensions.get('window').height,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        width: Dimensions.get('window').width,
    },
    slideNavigator: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    slideNavigatorContainer: {
        alignItems: 'center',
        display: 'flex',
        height: '15%',
        justifyContent: 'center',
    },
    slideNavigationDot: {
        borderRadius: 10,
        height: 10,
        marginHorizontal: '1.5%',
        width: 10,
    },
    slidesContainer: {
        height: '60%',
    },
    secondButton: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '50',
        height: '25%',
        justifyContent: 'center',
        marginTop: '3%',
        width: '70%',
    },
    secondButtonText: {
        color: '#F98659',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    }
});

const slideStyles = StyleSheet.create({
    body: {
        color: '#E0E0E0',
        fontSize: '20',
        fontWeight: '500',
        textAlign: 'center',
    },
    heading: {
        color: 'white',
        fontSize: '40',
        fontWeight: '800',
        marginBottom: '5%',
        textAlign: 'center',
    },
    image: {
        height: Dimensions.get('window').height * 0.35,
        width: Dimensions.get('window').height * 0.35,
    },
    imageContainer: {
        height: '60%',
    },
    slideContainer: {
        alignItems: 'center',
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end',
        width: '100%',
    },
    textContainer: {
        alignItems: 'center',
        height: '25%',
        justifyContent: 'center',
        paddingHorizontal: '10%',
        width: Dimensions.get('window').width,
    },
});

export default OnboardingScreen;