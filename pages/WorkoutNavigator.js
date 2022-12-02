import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutList from './WorkoutList';
import WorkoutScreen from './WorkoutPage';
import AddWorkoutPage from './AddWorkoutPage'; 
const Stack = createNativeStackNavigator();

const WorkoutNavigator = () =>{
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={WorkoutScreen} options = {{headerShown: false}} />
          <Stack.Screen name="Workout List" component={WorkoutList} options = {{headerShown: false}} />
          <Stack.Screen name="Add Workout" component={AddWorkoutPage} options = {{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default WorkoutNavigator