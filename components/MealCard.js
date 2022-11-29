import react, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Dimensions, TouchableWithoutFeedback } from 'react-native';


const MealCard = ({MealName, MealDate, Fat, Protein, Carbs, TotalCalories}) => {

    return (
        <View style={ styles.container}>
          <View style = {styles.cardHeader}>
            <Text style = { styles.workoutName}>{MealName}</Text>
            <Text style = { styles.workoutType}>{MealDate}</Text>
          </View>
        <View style ={ styles.cardContent}>
          <View style = {styles.inputField}>
            <Text style = { styles.setsTitle}>Fat: </Text>         
            <TextInput style = {[styles.input, {borderBottomColor: 'black'}]} placeholder = {Fat} keyboardType = "numeric" ></TextInput>
          </View>
          <View style = {styles.inputField}>
            <Text style = { styles.repsTitle}>Protein: </Text>         
            <TextInput style = {[styles.input, {borderBottomColor: 'black'}]} placeholder = {Protein} keyboardType = "numeric" ></TextInput>         
          </View>
          <View style = {styles.inputField}>
            <Text style = { styles.caloriesTitle}>Carbs: </Text>
            <TextInput style = {[styles.input, {borderBottomColor: 'black'}]} placeholder = {Carbs} keyboardType = "numeric" ></TextInput>         
          </View>
          <View style = {styles.inputField}>
            <Text style = { styles.caloriesTitle}>Total Calories: </Text>
            <TextInput style = {[styles.input, {borderBottomColor: 'black'}]} placeholder = {TotalCalories} keyboardType = "numeric" ></TextInput>         
          </View>
        </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      borderWidth: 3,
      borderRadius: 15,
      width: '100%',
      marginBottom: 20
  },
  title: {
    fontWeight: 'bold'
  },
  cardHeader: {
    backgroundColor: "#FE7422",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 10,
    alignItems: 'center'
  },
  workoutName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 5
  },
  workoutType: {
    fontStyle: 'italic',
    color: '#FCB419',
    fontWeight: '500'
  },
  cardContent: {
    padding: 10
  },
  input:{
    borderBottomWidth: 1.25,
    width: 100
  },
  inputField: {
    flexDirection: 'row', //fix alignment
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    padding: 5,
    justifyContent: 'space-between',
  }
  });
export default MealCard;