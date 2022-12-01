import react, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Dimensions, TouchableWithoutFeedback, Pressable } from 'react-native';


const MealMiniCard = ({mealName, navigation}) => {

    return (
      <Pressable onPress ={() => navigation.navigate('DietScreen')}>
        <View style={ styles.container}>
          <Text style = { styles.workoutName}>{mealName}</Text>
       </View>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: "#FE7422",
    padding: 10,
    borderRadius: 4
  },
  title: {
    fontWeight: 'bold'
  },
  workoutName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 5
  },
  workoutType: {
    fontStyle: 'italic',
    color: 'white',
    fontWeight: '500'
  }
  });
export default MealMiniCard;