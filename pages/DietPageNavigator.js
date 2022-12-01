import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DietScreen from './DietPage';
import MealList from './MealList';
import AddMealPage from './AddMealPage';
const Stack = createStackNavigator();

function DietStackNavigator() {
    return (
        <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="DietScreen">
          <Stack.Screen name='DietScreen' component={DietScreen} options={{headerShown: false}}/>
          <Stack.Screen name='MealList' component={MealList} options={{headerShown: false}}/>
          <Stack.Screen name='AddMeal' component={AddMealPage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default DietStackNavigator