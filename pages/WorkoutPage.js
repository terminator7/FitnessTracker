//General imports
import React from "react";
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
//Component Imports
import WorkoutCard from '../components/WorkoutCard';
import WorkoutDay from "../components/WorkoutDay";
import WorkoutList from "./WorkoutList";
import { NavigationContainer } from '@react-navigation/native';

// *Insert Page imports here*

const DismissKeyboard = ({ children}) => (
    <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
const WorkoutScreen = ({navigation}) => {
    return (
        <ScrollView>
            <DismissKeyboard>
                <View style = {styles.container}>
                    <WorkoutDay navigation = {navigation}></WorkoutDay>
                    <WorkoutDay></WorkoutDay>
                </View>
            </DismissKeyboard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        //justifyContent: '5', //horizontal
        //alignItems: 'flex-start', //vertical 

    }
    });

export default WorkoutScreen;