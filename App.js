import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './pages/OnboardingPage';
import ProfileSetupScreen from './pages/ProfileSetupPage';
import HomeScreen from './pages/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Onboarding' component={ OnboardingScreen }/>
        <Stack.Screen name='Profile Setup' component={ ProfileSetupScreen }/>
        <Stack.Screen name='Home' component={ HomeScreen }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;