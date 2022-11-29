import react, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ButtonStyle, ScrollView, TouchableOpacity, Pressable, Keyboard, TouchableWithoutFeedback} from 'react-native';
import WorkoutCard from "../components/WorkoutCard";
import WorkoutDay from "../components/WorkoutDay";
import WorkoutMiniCards from "../components/WorkoutMiniCards";
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AddWorkout from "../components/AddWorkout";

const DismissKeyboard = ({ children}) => (
  <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
);

const AddMealPage = ({navigation}) => {
    const [isWorkoutNameFocused, setWorkoutNameFocused] = useState(false)
    const [isWorkoutTypeFocused, setWorkoutTypeFocused] = useState(false)

    const setInputFocus = (name, type) => {
      setWorkoutNameFocused(name)
      setWorkoutTypeFocused(type)
    }
    return(
      <DismissKeyboard>
        <View style = {styles.container}>
          <View style ={ styles.cardContent}>
            <View style = {styles.inputField}>
              <Text style = { styles.workoutName}>Meal Name: </Text>         
              <TextInput style = {[styles.input, {borderBottomColor: isWorkoutNameFocused?'orange':'black'}]} onFocus= {() => setInputFocus(1,0)}></TextInput>
            </View>
            <View style = {styles.subContainer}>
              <Pressable style = {styles.addButton} onPress ={() => navigation.navigate('MealList')}><Text style = {{color: 'white', fontSize: 15, fontWeight: "bold"}}>Finish</Text></Pressable>
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