import react, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WorkoutCard from "./WorkoutCard";
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { useIsFocused } from "@react-navigation/native";
const AddButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
            <View style = {{alignItems: 'center'}}>{icon}</View>
        </TouchableOpacity>
    )
}

const WorkoutDay = ({date = "Today", navigation, workouts = [], updateList}) => {

    const isFocused = useIsFocused()
    useEffect(() => {
        if(isFocused) {
            console.log(workouts)
        }
    },[isFocused])

    return(
        <View style = {styles.container}>
            <View style = {styles.dateHeader}>
                <Text style = {styles.dateText}>
                    {date}
                </Text>
            </View>
            {
                workouts.length > 0 && workouts.map((element, index) => {
                    return <WorkoutCard key={index} workoutName={element["Name"]} workoutType={element["Type"]} profileID={element["ProfileID"]} date={element["Date"]} workoutId={element["WorkoutID"]} updateList={updateList} currentSets={element["Sets"]} currentReps={element["Reps"]} currentCaloriesBurned={element["CaloriesBurned"]}></WorkoutCard>
                })
            }
            <AddButton icon = {<EntypoIcon name="plus" size='24' color='white'/>} onPress ={() => navigation.push('Workout List')}></AddButton>
        </View>
    )

}


const styles = StyleSheet.create({
    container: { 
        justifyContent: "center", //horizontal
        alignItems: "center", //vertical 
        padding: 25,
    },
    dateHeader: {
        marginBottom: 25,
        borderBottomWidth: 3,
        padding: 5,
        width: '100%',
        justifyContent: 'center',
        borderBottomColor: "white"
    },
    dateText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        color: "white",
        fontWeight: "900"
    },
    addButton: {
        backgroundColor: '#FE7422',
        borderRadius: '100%',
        padding: 20
    }
    });

export default WorkoutDay