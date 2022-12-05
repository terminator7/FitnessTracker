//General imports
import {React, useState, useEffect, useLayoutEffect }from "react";
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, ScrollView, FlatList} from 'react-native'
//Component Imports
import WorkoutCard from '../components/WorkoutCard';
import WorkoutDay from "../components/WorkoutDay";
import WorkoutList from "./WorkoutList";
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
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

    const [workoutProgress, setWorkoutProgress] = useState(new Map())
    const isFocused = useIsFocused()


    const generateWorkoutProgess = () => {
        let DateMap = new Map()
        getWorkoutProgress("PROFILE-TQTN", (result) => {
            if(result === undefined) {
                console.log("There was an error reaching the database")
            }
            else {
                for(let i = 0; i < result.length; i++) {
                    if (DateMap.has((result[i]["Date"]).substring(0,10))) {
                        DateMap.set((result[i]["Date"]).substring(0,10), [...DateMap.get((result[i]["Date"]).substring(0,10)), result[i]])
                    } else {
                        DateMap.set((result[i]["Date"]).substring(0,10), [result[i]["Date"]])
                    }
                }
                setWorkoutProgress(DateMap)
            }
        })
    }

    useEffect(() => {
        if(isFocused) {
            generateWorkoutProgess()
        }
    },[isFocused])

    return (
        <ScrollView style = {{backgroundColor: "rgba(46, 180, 153, 0.7)"}}>
            <DismissKeyboard>
                <View>
                    {
                        [...workoutProgress.keys()].map((date, index) => {
                            return <WorkoutDay key={index} navigation={navigation} date={date} workouts={workoutProgress.get(date)} updateList={generateWorkoutProgess}></WorkoutDay>
                        })
                    }
                </View>
            </DismissKeyboard>
        </ScrollView>
    );
}

export default WorkoutScreen;