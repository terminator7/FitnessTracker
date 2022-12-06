import {React, useState, useEffect, useLayoutEffect} from "react";
import { StyleSheet, Text, View, Button, ButtonStyle, ScrollView, TouchableOpacity } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutDay from "../components/WorkoutDay";
import WorkoutMiniCards from "../components/WorkoutMiniCards";
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {deleteWorkout, addWorkout, getWorkoutList, getWorkoutProgress, addWorkoutToProgress} from '../util/database/WorkoutMethods'
import Toast from 'react-native-root-toast';
import global from "../util/data/global";

const AddButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
            <View style = {{alignItems: 'center'}}>{icon}</View>
        </TouchableOpacity>
    )
}



const WorkoutList = ({navigation}) => {

    const [workoutList, setWorkoutList] = useState([])
    const [toastVisable, setToastVisable] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    
    const showToast = (message) => {
        setToastMessage(message)
        setToastVisable(true)
        setTimeout(() => {
            setToastVisable(false)
        }, 1000);
    }

    const isFocused = useIsFocused()

    const generateWorkoutList = () => {
        getWorkoutList(global.profile.profileID, (result) => {
            if(result === undefined) {
                console.log("Error in database")
            }
            else if (result === []) {
                console.log("No workouts hoe")
            }
            else {
                setWorkoutList(result)
            }
        })
    }
    

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
                        return <WorkoutMiniCards key={index} navigation={navigation} workoutName={element["Name"]} workoutType={element["Type"]} updateList={generateWorkoutList} workoutId={element["id"]} showToast={showToast}></WorkoutMiniCards>
                    })
                }
            </View>
            <Toast visible={toastVisable} position={-100} shadow={false} animation={false} hideOnPress={true}>{toastMessage}</Toast>
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