import { useCallback, useState } from 'react';
import {
    Alert,
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
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import global from '../util/data/global';
import { addProfile } from '../util/database/ProfileMethods';

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
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [gender, setGender] = useState(null)
    
    const initializeAndNext = () => {
        global.profile["firstName"] = firstName
        global.profile["lastName"] = lastName
        global.profile["gender"] = gender
        navigation.navigate('Biometrics Setup')
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
                <View style={ nameSetupStyles.nameContainer }>
                    <Text style={ nameSetupStyles.nameText }>What is your sex?</Text>
                </View>
                <View style={ nameSetupStyles.nameInputContainer }>
                    <AnimatedTouchable
                        onPress={ () => setGender("M")}
                        style={ 
                            (gender === 'M') ? nameSetupStyles.maleButtonSelected  : nameSetupStyles.maleButton 
                        }
                    >
                        <Text 
                            style={
                                (gender === 'M') ? nameSetupStyles.maleButtonTextSelected  : nameSetupStyles.maleButtonText
                            }
                        >
                            Male
                        </Text>
                    </AnimatedTouchable>
                    <AnimatedTouchable
                        onPress={ () => setGender("F") }
                        style={ 
                            (gender === 'F') ? nameSetupStyles.femaleButtonSelected  : nameSetupStyles.femaleButton 
                        }
                    >
                        <Text
                            style={
                                (gender === 'F') ? nameSetupStyles.femaleButtonTextSelected  : nameSetupStyles.femaleButtonText
                            }
                        >
                            Female
                        </Text>
                    </AnimatedTouchable>
                </View>
            </View>
            <View style={ nameSetupStyles.buttonContainer }>
                <TouchableOpacity
                    onPress={ () => {
                        if (!firstName || !lastName || !gender) {
                            missingInfoAlert();
                        } else {
                            initializeAndNext();
                        }
                    }}
                    style={ nameSetupStyles.nextButton }
                >
                    <Text style={ nameSetupStyles.nextButtonText }>Next  →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const missingInfoAlert = () => {
    return Alert.alert(
        "Missing Information", 
        "Please fill out the rest of your information.",
        [
            {
                style: "cancel",
                text: "Cancel",
            },
            {
                text: "OK"
            }
        ]
    );
}

const BiometricsSetup = ({ navigation }) => {
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [weightUnits, setWeightUnits] = useState(null)
    const [heightUnits, setHeightUnits] = useState(null)

    const [weightButtonOpen, setWeightButtonOpen] = useState(false);
    const [heightButtonOpen, setHeightButtonOpen] = useState(false);

    const onWeightButtonOpen = useCallback(() => {
        setHeightButtonOpen(false);
    }, []);

    const onHeightButtonOpen = useCallback(() => {
        setWeightButtonOpen(false);
    }, []);

    const [weightUnitsArray, setWeightUnitsArray] = useState([
        {label: 'Kilograms', value: 'kg'},
        {label: 'Pounds', value: 'lbs'},
    ]);

    const [heightUnitsArray, setHeightUnitsArray] = useState([
        {label: 'Centimeters', value: 'cm'},
        {label: 'Inches', value: 'in'},
    ]);
    
    const initializeAndNext = () => {
        const currentYear = new Date().getFullYear();
        global.profile["birthday"] = new Date(currentYear - age, 0, 1)
        global.profile["weight"] = weight
        global.profile["height"] = height
        global.profile["weightUnits"] = weightUnits
        global.profile["heightUnits"] = heightUnits
        navigation.navigate('Home')
    }

    DropDownPicker.setTheme("DARK");

    return (
        <View style={ nameSetupStyles.pageContainer }>
            <View style={ nameSetupStyles.headerContainer }>
                <Text style={ nameSetupStyles.headerText }>Getting Started</Text>
                <Text style={ nameSetupStyles.bodyText }>To get you started on your fitness journey, we will need to know some information about you and what you want to accomplish.</Text>
            </View>
            <View style={ biometricsSetupStyles.inputContainer }>
                <View style={ biometricsSetupStyles.birthdayContainer }>
                    <Text style={ nameSetupStyles.nameText }>How old are you?</Text>
                </View>
                <View style={ biometricsSetupStyles.birthdayInputContainer }>
                    <TextInput
                        placeholder='Age (Years)'
                        style={ biometricsSetupStyles.birthdayInput }
                        onChangeText={(text) => setAge(text)}
                        keyboardType='numeric'
                        returnKeyType='done'
                    />
                </View>
                <View style={ biometricsSetupStyles.heightContainer }>
                    <Text style={ nameSetupStyles.nameText }>What is your height?</Text>
                </View>
                <View style={ biometricsSetupStyles.heightInputContainer }>
                    <TextInput
                        placeholder='Height'
                        style={ biometricsSetupStyles.heightInput }
                        onChangeText={(text) => setHeight(text)}
                        keyboardType='numeric'
                        returnKeyType='done'
                    />
                    <DropDownPicker
                        open={heightButtonOpen}
                        onOpen={onHeightButtonOpen}
                        value={heightUnits}
                        items={heightUnitsArray}
                        setOpen={setHeightButtonOpen}
                        setValue={setHeightUnits}
                        setItems={setHeightUnitsArray}
                        style={biometricsSetupStyles.heightUnitPicker}
                        onChangeValue={value => setHeightUnits(value)}
                    />
                </View>
                <View style={ biometricsSetupStyles.weightContainer }>
                    <Text style={ nameSetupStyles.nameText }>What is your weight?</Text>
                </View>
                <View style={ biometricsSetupStyles.weightInputContainer }>
                    <TextInput
                        placeholder='Weight'
                        style={ biometricsSetupStyles.weightInput }
                        onChangeText={(text) => setWeight(text)}
                        keyboardType='numeric'
                        returnKeyType='done'
                    />
                    <DropDownPicker
                        open={weightButtonOpen}
                        onOpen={onWeightButtonOpen}
                        value={weightUnits}
                        items={weightUnitsArray}
                        setOpen={setWeightButtonOpen}
                        setValue={setWeightUnits}
                        setItems={setWeightUnitsArray}
                        style={biometricsSetupStyles.weightUnitPicker}
                        onChangeValue={value => setWeightUnits(value)}
                    />
                </View>
            </View>
            <View style={ biometricsSetupStyles.buttonContainer }>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Name Setup') }
                    style={ biometricsSetupStyles.backButton }
                >
                    <Text style={ nameSetupStyles.nextButtonText }>←</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => {
                        if (!age || !height || !weight || !heightUnits || !weightUnits) {
                            missingInfoAlert();
                        } else {
                            initializeAndNext();
                        }
                    }}
                    style={ biometricsSetupStyles.nextButton }
                >
                    <Text style={ nameSetupStyles.nextButtonText }>Finish</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
    maleButtonSelected: {
        alignItems: 'center',
        backgroundColor: '#60935D',
        borderRadius: '35',
        height: '30%',
        justifyContent: 'center',
        margin: '5%',
        width: '60%',
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
    maleButtonTextSelected: {
        color: 'white',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    maleButtonText: {
        color: '#181723',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    femaleButtonSelected: {
        alignItems: 'center',
        backgroundColor: '#60935D',
        borderRadius: '35',
        height: '30%',
        justifyContent: 'center',
        width: '60%',
    },
    femaleButton: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '35',
        height: '30%',
        justifyContent: 'center',
        width: '60%',
    },
    femaleButtonTextSelected: {
        color: 'white',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
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
    inputContainer: {
        alignItems: 'center',
        height: '55%',
        paddingTop: '5%',
        justifyContent: 'center',
    },
    birthdayContainer: {
        alignItems: 'start',
        height: '10%',
        justifyContent: 'center',
        width: '100%',
    },
    birthdayInputContainer: {
        alignItems: 'center',
        height: '30%',
        justifyContent: 'center',
        width: '100%',
    },
    birthdayInput: {
        backgroundColor: 'white',
        borderRadius: '35',
        fontSize: '20',
        height: '40%',
        marginBottom: '5%',
        padding: '5%',
        width: '80%',
    },
    birthdayButtonTextSelected: {
        color: 'white',
        fontSize: '20',
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    heightContainer: {
        alignItems: 'start',
        height: '10%',
        justifyContent: 'center',
        width: '100%',
    },
    heightInputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '20%',
        marginLeft: '15%',
        width: '100%',
        zIndex: '999',
    },
    heightInput: {
        backgroundColor: 'white',
        borderRadius: '35',
        fontSize: '20',
        height: '60%',
        padding: '5%',
        width: '40%',
    },
    heightUnitPicker: {
        borderRadius: '35',
        fontSize: '20',
        marginLeft: '5%',
        padding: '5%',
        width: '40%',
    },
    weightContainer: {
        alignItems: 'start',
        height: '10%',
        justifyContent: 'center',
        width: '100%',
    },
    weightInputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '20%',
        marginLeft: '15%',
        width: '100%',
    },
    weightInput: {
        backgroundColor: 'white',
        borderRadius: '35',
        fontSize: '20',
        height: '60%',
        padding: '5%',
        width: '40%',
    },
    weightUnitPicker: {
        borderRadius: '35',
        fontSize: '20',
        marginLeft: '5%',
        padding: '5%',
        width: '40%',
    },
    buttonContainer: {
        alignItems: 'start',
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
    backButton: {
        alignItems: 'center',
        borderRadius: '35',
        height: '40%',
        justifyContent: 'center',
        width: '40%',
    },
});

export default ProfileSetupScreen;