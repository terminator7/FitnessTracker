import react, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'


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


const MealCard = ({MealName, MealDate, Fat, Protein, Carbs, TotalCalories}) => {

  const [isFatFocused, setFatFocus] = useState(false)
  const [isProteinFocused, setProteinFocus] = useState(false)
  const [isCarbsFocused, setCarbsFocus] = useState(false)
  const [isCaloriesFocused, setCaloriesFocus] = useState(false)

  const setInputFocus = (fat, protein, calories, carbs) => {
    setFatFocus(fat)
    setProteinFocus(protein)
    setCaloriesFocus(calories)
    setCarbsFocus(carbs)
  }

    return (
        <View style={ styles.container}>
          <View style = {styles.cardHeader}>
            <Text style = { styles.workoutName}>{MealName}</Text>
            <View style= {styles.rightCardHeader}>
              <DeleteButton icon={<EntypoIcon name="trash" size='24' color='white'/>}></DeleteButton>
            </View>
          </View>
        <View style ={ styles.cardContent}>
          <View style = {styles.inputField}>
            <Text style = { styles.setsTitle}>Fat: </Text>         
            <TextInput style = {[styles.input, {borderBottomColor: isFatFocused?'orange':'black'}]} placeholder = {Fat} keyboardType = "numeric" onFocus={() => setInputFocus(1, 0, 0, 0)}></TextInput>
          </View>
          <View style = {styles.inputField}>
            <Text style = { styles.repsTitle}>Protein: </Text>         
            <TextInput style = {[styles.input, {borderBottomColor: isProteinFocused?'orange':'black'}]} placeholder = {Protein} keyboardType = "numeric" onFocus={() => setInputFocus(0, 1, 0, 0)}></TextInput>         
          </View>
          <View style = {styles.inputField}>
            <Text style = { styles.caloriesTitle}>Carbs: </Text>
            <TextInput style = {[styles.input, {borderBottomColor: isCarbsFocused?'orange':'black'}]} placeholder = {Carbs} keyboardType = "numeric" onFocus={() => setInputFocus(0, 0, 0, 1)}></TextInput>         
          </View>
          <View style = {styles.inputField}>
            <Text style = { styles.caloriesTitle}>Total Calories: </Text>
            <TextInput style = {[styles.input, {borderBottomColor: isCaloriesFocused?'orange':'black'}]} placeholder = {TotalCalories} keyboardType = "numeric" onFocus={() => setInputFocus(0, 0, 1, 0)}></TextInput>         
          </View>
          <View style={{paddingTop: 25, paddingHorizontal: 60, paddingBottom: 10}}>
            <UpdateButton text="Update"></UpdateButton>
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
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  workoutName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 5
  },
  cardContent: {
    padding: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
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
export default MealCard;