import react, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ButtonStyle, ScrollView, TouchableOpacity, Pressable, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { getMealsList, addMeal, deleteMeal} from '../util/database/MealsMethod';
import {getDate, getDateAndTime} from '../util/dateMethods/dateMethods';
import global from "../util/data/global";

const DismissKeyboard = ({ children}) => (
  <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
);

const AddMealPage = ({navigation}) => {
    const [isNameFocused, setNameFocused] = useState(false)
    const [mealName, setmealName] = useState('');

    const setInputFocus = (name) => {
      setNameFocused(name)
    }

    buttonClickListener = () =>{
      addMeal({profileID: global.profile.profileID, mealName: mealName}, (didHappen) => {
        if(didHappen) {
          navigation.navigate('MealList')
        } else {
          console.log("Did not add Workout")
        }
      })
    }
    return(
      <DismissKeyboard>
        <View style = {styles.container}>
          <View style ={ styles.cardContent}>
            <View style = {styles.inputField}>
              <Text style = { styles.workoutName}>Meal Name: </Text>         
              <TextInput style = {[styles.input, {borderBottomColor: isNameFocused?'orange':'black'}]} onFocus= {() => setInputFocus(1,0)} onChangeText={(text) => setmealName(text)}></TextInput>
            </View>
            <View style = {styles.subContainer}>
              <Pressable style = {styles.addButton} onPress ={this.buttonClickListener}><Text style = {{color: 'white', fontSize: 15, fontWeight: "bold"}}>Finish</Text></Pressable>
            </View>
        </View>
      </View>
      </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "rgba(46, 180, 153, 0.7)",
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
        padding: 25
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
      fontWeight: '500',
      color: 'black',
    },
    workoutType: {
      color: 'black',
      fontWeight: '500'
    },
    cardContent: {
      padding: 10,
      backgroundColor: "white",
      borderRadius: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
      elevation: 15,
    },
    input:{
      borderBottomWidth: 1.25,
      width: 225
    },
    inputField: {
      flexDirection: 'row', //fix alignment
      alignItems: 'flex-end',
      alignContent: 'flex-end',
      padding: 10,
      justifyContent: 'space-between',
    },
    addButton: {
        backgroundColor: '#FE7422',
        borderRadius: '100%',
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    },
    subContainer: {
        width: '100%',
        alignContent: 'center',
        marginTop: 20,
        alignItems: "center"
    },
});
export default AddMealPage