//General imports
import React from "react";
import { Text, View, StyleSheet, Button, Alert, TextInput } from 'react-native'

//Component Imports
// *Insert Page imports here*
import MealCard from '../components/MealCard';

//createStackNavigator( RouteConfigs, StackNavigatorConfig);

const AddMealPage = (props) => {
    return (
      <View style={styles.container}>
      <Text style={styles.Title}>Add Meal Page</Text>
      <Text style={styles.Padding}></Text>
      <MealCard MealName= 'Pizza Rolls' MealDate= 'today'></MealCard>
      <Text style={styles.Button}>
      <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.push('MealHistoryScreen')}>
      <Text style={styles.buttonText}>Add from Meal History</Text>
      </TouchableOpacity>
      </Text>
      </View>
  );  
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
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
  });

export default AddMealPage;