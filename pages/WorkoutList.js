import {React, useState, useEffect, useLayoutEffect} from "react";
import { StyleSheet, Text, View, Button, ButtonStyle, ScrollView, TouchableOpacity } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutDay from "../components/WorkoutDay";
import WorkoutMiniCards from "../components/WorkoutMiniCards";
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {deleteWorkout, addWorkout, getWorkoutList, getWorkoutProgress, addWorkoutToProgress} from '../util/database/WorkoutMethods'
import Toast from 'react-native-root-toast';

const AddButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
            <View style = {{alignItems: 'center'}}>{icon}</View>
        </TouchableOpacity>
    )
}

const MyToast = () => {
    return Toast.show("Hello", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
      })
}

const WorkoutList = ({navigation}) => {

    const [workoutList, setWorkoutList] = useState([])

    const isFocused = useIsFocused()

    const generateWorkoutList = () => {
        getWorkoutList("PROFILE-TQTN", (result) => {
            if(result === undefined) {
                console.log("Error in database")
            }
            else if (result === []) {
                console.log("No workouts hoe")
            }
            else {
                console.log("Testing Something")
                setWorkoutList(result)
                console.log("Workouts: " + workoutList)
            }
        })
    }
    
    useLayoutEffect(() => {
        generateWorkoutList()
    }, [])

    useEffect(() => {
        if(isFocused) {
            generateWorkoutList()
        }
    }, [isFocused])


    return(
        <ScrollView style = {{backgroundColor: "rgba(46, 180, 153, 0.7)"}}>
            <View style = {styles.container}>
                {
                    workoutList.map((element, index) => {
                        return <WorkoutMiniCards key={index} navigation={navigation} workoutName={element["Name"]} workoutType={element["Type"]} updateList={generateWorkoutList} workoutId={element["id"]}></WorkoutMiniCards>
                    })
                }
                {
                    Toast.show("Hello", {
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                      })
                }
            </View>
            <View style = {styles.buttonContainer}>
                <AddButton icon = {<EntypoIcon name="plus" size='24' color='white'/>} onPress ={() => navigation.push('Add Workout')}></AddButton>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    addButton: {
        backgroundColor: '#FE7422',
        borderRadius: '100%',
        padding: 20,
    },
});
export default WorkoutList;