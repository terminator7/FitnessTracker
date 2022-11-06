import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { initalizeDatabase, refreshDataBase } from './util/database/DatabaseMethods';
import { addProfile, getProfileList } from './util/database/ProfileMethods';

import OnboardingScreen from './pages/OnboardingPage';
import ProfileSetupScreen from './pages/ProfileSetupPage';
import SplashScreen from './pages/SplashPage';
import ViewProfilesScreen from './pages/ViewProfilesPage';
import HomeScreen from './pages/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    //This Code is for Devlopment Purposes Only and will be removed on final product
    let deleteDataBase = false
    let generateData = false

    if (deleteDataBase) {
      refreshDataBase()
    } else if(generateData) {
      initalizeDatabase()
      addProfile({gender:"M",firstName:"Jacob",lastName:"Douglas",theme:0,birthday:"Date('now')",height:5.0, initialWeight:200, activityLevel:0, weightUnits:"pounds", heightUnits:"feet"}, (result) => console.log(result))
      getProfileList((result) => console.log(result))
    } else {
      initalizeDatabase()
      getProfileList((result) => console.log(result))
    }

  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Onboarding' component={ OnboardingScreen }/>
        <Stack.Screen name='Profile Setup' component={ ProfileSetupScreen }/>
        <Stack.Screen name='Splash' component={ SplashScreen }/>
        <Stack.Screen name='View Profiles' component={ ViewProfilesScreen }/>
        <Stack.Screen name='Home' component={ HomeScreen }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;