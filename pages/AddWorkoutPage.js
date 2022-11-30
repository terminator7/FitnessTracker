import react, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ButtonStyle, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import WorkoutCard from "../components/WorkoutCard";
import WorkoutDay from "../components/WorkoutDay";
import WorkoutMiniCards from "../components/WorkoutMiniCards";
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AddWorkout from "../components/AddWorkout";

const AddButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
            <View style = {{alignItems: 'center'}}>{icon}</View>
        </TouchableOpacity>
    )
}

const AddWorkoutPage = ({navigation}) => {
    const [isSetFocused, setSetFocus] = useState(false)
    const [isRepFocused, setRepFocus] = useState(false)
    const [isCaloriesFocused, setCaloriesFocus] = useState(false)
    return(
        <View>
            <View style ={ styles.cardContent}>
                <View style = {styles.inputField}>
                    <Text style = { styles.setsTitle}>Workout Name: </Text>         
                    <TextInput style = {[styles.input, {borderBottomColor: isSetFocused?'orange':'black'}]} onFocus= {() => setSetFocus (true)}></TextInput>
                </View>
                <View style = {styles.inputField}>
                    <Text style = { styles.repsTitle}>Workout Type: </Text>         
                    <TextInput style = {[styles.input, {borderBottomColor: isRepFocused?'orange':'black'}]} onFocus= {() => setRepFocus (true)}></TextInput>         
                </View>
                <View style = {styles.subContainer}>
                    <Pressable style = {styles.addButton} onPress ={() => navigation.navigate('Workout List')}><Text style = {{color: 'white', fontSize: 15}}>Finish</Text></Pressable>
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
    },
    addButton: {
        backgroundColor: '#FE7422',
        borderRadius: '100%',
        padding: 20,
        flex: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    subContainer: {
        width: '100%',
        alignContent: 'center',
        marginTop: 20
    },
});
export default AddWorkoutPage