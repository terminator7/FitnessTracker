import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DietScreen from './DietPage';
import AddMealPage from './AddMealPage';
import MealHistoryPage from './MealHistoryPage';
const Stack = createStackNavigator();

function DietStackNavigator() {
    return (
        <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="DietScreen">
          <Stack.Screen name='DietScreen' component={DietScreen} options={{headerShown: false}}/>
          <Stack.Screen name='AddDietScreen' component={AddMealPage} />
          <Stack.Screen name='MealHistoryScreen' component={MealHistoryPage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default DietStackNavigator