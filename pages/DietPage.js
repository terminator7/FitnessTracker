//General imports
import React from "react";
import { Text, View, StyleSheet, Button, Alert, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native'
import AddMealButton from "../components/AddMealButton";
import DietDay from "../components/DietDay"
import { NavigationContainer } from '@react-navigation/native';

//Component Imports
// *Insert Page imports here*
import MealCard from '../components/MealCard'


const DismissKeyboard = ({ children}) => (
  <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
);

const DietScreen = ({navigation}) => {
    return (
      <ScrollView style = {{backgroundColor: "rgba(46, 180, 153, 0.7)"}}>
        <DismissKeyboard>
          <View>
            <DietDay date="Today" navigation={navigation}></DietDay>
            <DietDay date="January 29th" navigation={navigation}></DietDay>
          </View>
        </DismissKeyboard>
      </ScrollView>
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