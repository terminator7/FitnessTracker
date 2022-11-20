//General imports
import React from "react";
import { Text, View, StyleSheet, Button, Alert, TextInput, TouchableOpacity } from 'react-native'
import AddMealButton from "../components/AddMealButton";
import { NavigationContainer } from '@react-navigation/native';

//Component Imports
// *Insert Page imports here*
import MealCard from '../components/MealCard';

//createStackNavigator( RouteConfigs, StackNavigatorConfig);

const DietScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.Title}>Diet Page</Text>
        <Text style={styles.Padding}></Text>
        <MealCard MealName= 'Pizza Rolls' MealDate= 'today'></MealCard>
        <Text style={styles.Button}>
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.push('AddDietScreen')}>
        <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      padding: 30
    },
    Title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      borderBottomWidth: 4,
      borderBottomColor: "#303030",
      marginHorizontal: 50,    
    },
    Border: {
      marginHorizontal: 55,
      marginVertical: 0,
    },
    MealTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      borderWidth: 0,
      borderRadius: 20,
    },
    MealInfo: {
      textAlign: 'center',
      backgroundColor: "FFFFFF",
    },
    Button: {
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: "37%",
    },
    buttonText: {
      fontSize: 20,
      color: '#000000'
    },
  });

export default DietScreen;