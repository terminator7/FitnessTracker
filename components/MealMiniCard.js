import react, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Dimensions, TouchableWithoutFeedback, Pressable, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { getMealsList, addMeal, deleteMeal, getMealProgress, addMealToProgress, deleteMealProgress, updateMealProgress} from '../util/database/MealsMethod';
import { getDate, getDateAndTime } from "../util/dateMethods/dateMethods";
import global from "../util/data/global";

const DeleteButton = ({icon, onPress}) => {
  return(
      <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
          <View style = {{marginRight: 3}}>{icon}</View>
      </TouchableOpacity>
  )
}

const MealMiniCard = ({mealName, navigation, mealID, updateList, showToast}) => {
  
  const deleteAndUpdate = () => {
    console.log(mealID)
    deleteMeal(mealID, (didHappen) => {
      if(didHappen) {
        updateList()
        showToast("Meal Deleted")
      }
      else {
        showToast("Meal Cannot be Deleted!")
      }
    })
  }

  const createMealProgress = (pID, mID) => {
    addMealToProgress({profileID: pID, mealID: mID, date: getDateAndTime(), carbs: 0, fats: 0, protien: 0, caloriesAte: 0}, (result) => {
      console.log("Adding Progress to: " + pID + " " + mealID)
      if(result === false) {
        console.log("Error in adding")
      } else {
        navigation.navigate("DietScreen")
      }
    })
}
    return (
      <Pressable onPress ={() => createMealProgress(global.profile.profileID, mealID)}>
        <View style={ styles.container}>
          <View style={styles.leftMost}>
            <Text style = { styles.workoutName}>{mealName}</Text>
          </View>
          <View style= {styles.rightMost}>
            <DeleteButton icon={<EntypoIcon name="trash" size='24' color='white'/>} onPress={() => deleteAndUpdate()}></DeleteButton>
          </View>
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