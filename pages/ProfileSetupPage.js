import { useState } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import global from '../util/data/global';

const Stack = createNativeStackNavigator();

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const ProfileSetupScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName='Name Setup' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Name Setup' component={ NameSetup }/>
            <Stack.Screen name='Biometrics Setup' component={ BiometricsSetup }/>
        </Stack.Navigator>
    );
};

const NameSetup = ({ navigation }) => {

    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    
    const initalizeAndNext = () => {
        global.profile["firstName"] = firstName
        global.profile["lastName"] = lastName
        global.profile["gender"] = gender
        navigation.navigate('Home')
    }

    return (
        <View style={ nameSetupStyles.pageContainer }>
            <View style={ nameSetupStyles.headerContainer }>
                <Text style={ nameSetupStyles.headerText }>Getting Started</Text>
                <Text style={ nameSetupStyles.bodyText }>To get you started on your fitness journey, we will need to know some information about you and what you want to accomplish.</Text>
            </View>
            <View style={ nameSetupStyles.inputContainer }>
                <View style={ nameSetupStyles.nameContainer }>
                    <Text style={ nameSetupStyles.nameText }>What is your name?</Text>
                </View>
                <View style={ nameSetupStyles.nameInputContainer }>
                    <TextInput placeholder='First Name' style={ nameSetupStyles.firstNameInput } onChangeText={(text) => setFirstName(text)}/>
                    <TextInput placeholder='Last Name' style={ nameSetupStyles.lastNameInput } onChangeText={(text) => setLastName(text)}/>
                </View>
                <View style={ nameSetupStyles.sexContainer }>
                    <Text style={ nameSetupStyles.sexText }>What is your sex?</Text>
                </View>
                <View style={ nameSetupStyles.sexInputContainer }>
                    <AnimatedTouchable
                        onPress={ () => setGender("M")}
                        style={ nameSetupStyles.maleButton }
                    >
                        <Text style={ nameSetupStyles.maleButtonText }>Male</Text>
                    </AnimatedTouchable>
                    <AnimatedTouchable
                        onPress={ () => setGender("F") }
                        style={ nameSetupStyles.femaleButton }
                    >
                        <Text style={ nameSetupStyles.femaleButtonText }>Female</Text>
                    </AnimatedTouchable>
                </View>
            </View>
            <View style={ nameSetupStyles.buttonContainer }>
                <TouchableOpacity
                    onPress={ () => initalizeAndNext() }
                    style={ nameSetupStyles.nextButton }
                >
                    <Text style={ nameSetupStyles.nextButtonText }>Next  →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const BiometricsSetup = ({ navigation }) => {
    return (
        <View style={ biometricsSetupStyles.pageContainer }>
            <View style={ biometricsSetupStyles.headerContainer }>
                <Text style={ biometricsSetupStyles.headerText }>Getting Started</Text>
                <Text style={ biometricsSetupStyles.bodyText }>To get you started on your fitness journey, we will need to know some information about you and what you want to accomplish.</Text>
            </View>
            <View style={ biometricsSetupStyles.inputContainer }>

            </View>
            <View style={ biometricsSetupStyles.buttonContainer }>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Name Setup') }
                    style={ biometricsSetupStyles.backButton }
                >
                    <Text style={ biometricsSetupStyles.backButtonText }>←</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Biometrics Setup') }
                    style={ biometricsSetupStyles.nextButton }
                >
                    <Text style={ biometricsSetupStyles.nextButtonText }>Next  →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const nameSetupStyles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#181723',
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    headerContainer: {
        alignItems: 'start',
        height: '25%',
        justifyContent: 'flex-end',
    },
    headerText: {
        color: 'white',
        fontSize: '40',
        fontWeight: '800',
        marginBottom: '5%',
        paddingLeft: '7%',
        textAlign: 'center',
    },
    bodyText: {
        color: '#E0E0E0',
        fontSize: '20',
        fontWeight: '500',
        paddingHorizontal: '7%',
    },
    inputContainer: {
        alignItems: 'center',
        height: '55%',
        paddingTop: '5%',
        justifyContent: 'center',
    },
    nameContainer: {
        alignItems: 'start',
        height: '10%',
        justifyContent: 'center',
        width: '100%',
    },
    nameText: {
        color: '#E0E0E0',
        fontSize: '20',
        fontWeight: '500',
        paddingLeft: '7%',
        textAlign: 'center',
    },
    nameInputContainer: {
        alignItems: 'center',
        height: '40%',
        justifyContent: 'center',
        width: '100%',
    },
    firstNameInput: {
        backgroundColor: 'white',
        borderRadius: '35',
        fontSize: '20',
        height: '30%',
        marginBottom: '5%',
        padding: '5%',
        width: '80%',
    },
    lastNameInput: {
        backgroundColor: 'white',
        borderRadius: '35',
        fontSize: '20',
        height: '30%',
        padding: '5%',
        width: '80%',
    },
    sexContainer: {
        alignItems: 'start',
        height: '10%',
        justifyContent: 'center',
        width: '100%',
    },
    sexText: {
        color: '#E0E0E0',
        fontSize: '20',
        fontWeight: '500',
        paddingLeft: '7%',
        textAlign: 'center',
    },
    sexInputContainer: {
        alignItems: 'center',
        height: '40%',
        justifyContent: 'center',
        width: '100%',
    },
    maleButton: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '35',
        height: '30%',
        justifyContent: 'center',
        margin: '5%',
        width: '60%',
    },
    maleButtonText: {
        color: '#181723',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    femaleButton: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '35',
        height: '30%',
        justifyContent: 'center',
        width: '60%',
    },
    femaleButtonText: {
        color: '#181723',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    buttonContainer: {
        alignItems: 'center',
        height: '20%',
        justifyContent: 'start',
        paddingTop: '5%',
    },
    nextButton: {
        alignItems: 'center',
        backgroundColor: '#F98659',
        borderRadius: '35',
        height: '40%',
        justifyContent: 'center',
        width: '50%',
    },
    nextButtonText: {
        color: '#F2F2F2',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    },
});

const biometricsSetupStyles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#181723',
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    headerContainer: {
        alignItems: 'start',
        height: '25%',
        justifyContent: 'flex-end',
    },
    headerText: {
        color: 'white',
        fontSize: '40',
        fontWeight: '800',
        marginBottom: '5%',
        paddingLeft: '7%',
        textAlign: 'center',
    },
    bodyText: {
        color: '#E0E0E0',
        fontSize: '20',
        fontWeight: '500',
        paddingHorizontal: '7%',
    },
    inputContainer: {
        alignItems: 'center',
        height: '55%',
        paddingTop: '5%',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'start',
        backgroundColor: 'red',
        flexDirection: 'row',
        height: '20%',
        justifyContent: 'center',
        paddingRight: '10%',
        paddingTop: '5%',
    },
    nextButton: {
        alignItems: 'center',
        backgroundColor: '#F98659',
        borderRadius: '35',
        height: '40%',
        justifyContent: 'center',
        width: '40%',
    },
    nextButtonText: {
        color: '#F2F2F2',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    backButton: {
        alignItems: 'center',
        borderRadius: '35',
        height: '40%',
        justifyContent: 'center',
        width: '40%',
    },
    backButtonText: {
        color: '#F2F2F2',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    }
});

export default ProfileSetupScreen;