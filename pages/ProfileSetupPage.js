import React from 'react';
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileSetupName from './ProfileSetupNamePage';

const Stack = createNativeStackNavigator();

const ProfileSetupScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName='Profile Setup Name' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Profile Setup Name' component={ ProfileSetupName }/>
        </Stack.Navigator>
    );
};

export default ProfileSetupScreen;