import react, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Dimensions, TouchableWithoutFeedback, Pressable, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {deleteWorkout, addWorkout, getWorkoutList, getWorkoutProgress, addWorkoutToProgress} from '../util/database/WorkoutMethods'
import { getDate, getDateAndTime } from "../util/dateMethods/dateMethods";
import global from "../util/data/global";

const DeleteButton = ({icon, onPress}) => {
  return(
      <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
          <View style = {{marginRight: 3}}>{icon}</View>
      </TouchableOpacity>
  )
}

const WorkoutMiniCards = ({workoutName, workoutType, navigation, workoutId, updateList, showToast}) => {

  const deleteAndUpdate = () => {
    console.log(workoutId)
    deleteWorkout(workoutId, (didHappen) => {
      if(didHappen) {
        updateList()
        showToast("Workout Deleted")
      }
      else {
        showToast("Workout Cannot be Deleted!")
      }
    })
  }


   const createWorkoutProgress = (pID, wID) => {
        addWorkoutToProgress({profileID: pID, workoutID: wID, date: getDateAndTime(), sets: 0, reps: 0, caloriesBurned: 0}, (result) => {
          console.log("Adding Progress to: " + pID + " " + workoutId)
          if(result === false) {
            console.log("Error in adding")
          } else {
            navigation.navigate("Main")
          }
        })
   }

    return (
      <Pressable onPress ={() => createWorkoutProgress(global.profile.profileID, workoutId)}>
        <View style={ styles.container}>
          <View style={styles.leftMost}>
            <Text style = { styles.workoutName}>{workoutName}</Text>
            <Text style = { styles.workoutType}>{workoutType}</Text>
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
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between"
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
  },
  rightMost: {
    justifyContent : "center"
  }
  });
export default WorkoutMiniCards;