import react, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {deleteWorkout, addWorkout, getWorkoutList, getWorkoutProgress, addWorkoutToProgress, deleteWorkoutProgress, updateWorkoutProgress} from '../util/database/WorkoutMethods'

const UpdateButton = ({text, onPress}) => {
  return(
      <TouchableOpacity style = {styles.finishButton} onPress = {onPress}>
          <View style = {{alignItems: 'center'}}><Text style={styles.finishButtonText}>{text}</Text></View>
      </TouchableOpacity>
  )
}

const DeleteButton = ({icon, onPress}) => {
  
  return(
      <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
          <View style = {{alignItems: 'center'}}>{icon}</View>
      </TouchableOpacity>
  )
}


const WorkoutCard = ({workoutName, workoutType, prevSets, prevReps, prevCalories, profileID, date, workoutId, updateList, currentSets, currentReps, currentCaloriesBurned}) => {

  const [isSetFocused, setSetFocus] = useState(false)
  const [isRepFocused, setRepFocus] = useState(false)
  const [isCaloriesFocused, setCaloriesFocus] = useState(false)

  const [Sets, setSets] = useState(currentSets)
  const [Reps, setReps] = useState(currentReps)
  const [CaloriesBurned, setCaloriesBurned] = useState(currentCaloriesBurned)

  const setInputFocus = (set, rep, calories) => {
    setSetFocus(set)
    setRepFocus(rep)
    setCaloriesFocus(calories)
  }
  const deleteAndUpdate = () => {
    deleteWorkoutProgress({profileID: profileID, workoutID: workoutId, date: date}, (didHappen) => {
      if(didHappen) {
        updateList()
        console.log(workoutId)
      }
      else {
        console.log("Did not delete")
      }
    })
  }

  useEffect(() => {
    console.log(workoutName + " " + workoutId)
  },[])
  const updateWorkoutProgressCard = () => {
    updateWorkoutProgress({profileID: profileID, workoutID: workoutId, date: date, sets: Sets, reps: Reps, caloriesBurned: CaloriesBurned}, (didHappen) => {
      if (didHappen) {
        console.log("Updated Workout")
      } else {
        console.log("Did not update Workout Progress")
      }
    })
  }

  return (
    <View style={ styles.container}>
        <View style = {styles.cardHeader}>
          <View style= {styles.leftCardHeader}>
            <Text style = { styles.workoutName}>{workoutName}</Text>
            <Text style = { styles.workoutType}>{workoutType}</Text>
          </View>
          <View style= {styles.rightCardHeader}>
            <DeleteButton icon={<EntypoIcon name="trash" size='24' color='white'/>} onPress = {() => deleteAndUpdate()}></DeleteButton>
          </View>
        </View>
      <View style ={ styles.cardContent}>
        <View style = {styles.inputField}>
          <Text style = { styles.setsTitle}>Sets: </Text>         
          <TextInput style = {[styles.input, {borderBottomColor: isSetFocused?'orange':'black'}]} placeholder = {prevSets} keyboardType = "numeric" onFocus= {() => setInputFocus(1, 0, 0)} onChangeText={(text) => setSets(text)}>{currentSets}</TextInput>
        </View>
        <View style = {styles.inputField}>
          <Text style = { styles.repsTitle}>Reps: </Text>         
          <TextInput style = {[styles.input, {borderBottomColor: isRepFocused?'orange':'black'}]} placeholder = {prevReps} keyboardType = "numeric" onFocus= {() => setInputFocus(0, 1, 0)} onChangeText={(text) => setReps(text)}>{currentReps}</TextInput>         
        </View>
        <View style = {styles.inputField}>
          <Text style = { styles.caloriesTitle}>Calories Burnt: </Text>
          <TextInput style = {[styles.input, {borderBottomColor: isCaloriesFocused?'orange':'black'}]} placeholder = {prevReps} keyboardType = "numeric" onFocus= {() => setInputFocus(0, 0, 1)} onChangeText={(text) => setCaloriesBurned(text)}>{currentCaloriesBurned}</TextInput>         
        </View>
        <View style={{paddingTop: 25, paddingHorizontal: 60, paddingBottom: 10}}>
          <UpdateButton text="Update" onPress = {() => updateWorkoutProgressCard()}></UpdateButton>
        </View>
      </View>
    </View> 
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
  },
  title: {
    fontWeight: 'bold'
  },
  cardHeader: {
    backgroundColor: "#FE7422",
    padding: 10,
    flex: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    justifyContent: "space-between",
    flexDirection: "row"
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
  cardContent: {
    padding: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  input:{
    borderBottomWidth: 1.25,
    width: 100,
    textAlign: "right"
  },
  inputField: {
    flexDirection: 'row', //fix alignment
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    padding: 5,
    justifyContent: 'space-between',
  },
  finishButton : {
    padding: 5,
    backgroundColor: "#FE7422",
    color: "white",
    borderRadius: 10
  },
  finishButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600"
  }
  });
export default WorkoutCard;