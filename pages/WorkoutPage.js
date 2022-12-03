//General imports
import {React, useState, useEffect }from "react";
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, ScrollView, FlatList} from 'react-native'
//Component Imports
import WorkoutCard from '../components/WorkoutCard';
import WorkoutDay from "../components/WorkoutDay";
import WorkoutList from "./WorkoutList";
import { NavigationContainer } from '@react-navigation/native';
import { SectionList } from "react-native-web";
import {deleteWorkout, addWorkout, getWorkoutList, getWorkoutProgress, addWorkoutToProgress} from '../util/database/WorkoutMethods'
import global from '../util/data/global'

// *Insert Page imports here*

const DismissKeyboard = ({ children}) => (
    <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
const WorkoutScreen = ({navigation}) => {

    const [workoutProgress, setWorkoutProgress] = useState([])

    useEffect(() => {
        //replace with global.profile.profileID
        let DateMap = new Map()
        getWorkoutProgress("PROFILE-TQTN", (result) => {
            if(result === undefined) {
                console.log("There was an error reaching the database")
            }
            else {
                console.log(result)
                console.log(result.length)
                setWorkoutProgress(result)
                for(let i = 0; i < result.length; i++) {
                    if (DateMap.has(result[i]["Date"])) {
                        DateMap.set(result[i]["Date"], [...DateMap.get(result[i]["Date"]), result[i]])
                    } else {
                        DateMap.set(result[i]["Date"], [result[i]["Date"]])
                    }
                }
            }
        })
    }, [])

    return (
        <ScrollView style = {{backgroundColor: "rgba(46, 180, 153, 0.7)"}}>
            <DismissKeyboard>
                <View>
                    <WorkoutDay navigation = {navigation}></WorkoutDay>
                    <WorkoutDay date="January 29th"></WorkoutDay>
                </View>
            </DismissKeyboard>
        </ScrollView>
    );
}

export default WorkoutScreen;