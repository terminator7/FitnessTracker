//General imports
import React from "react";
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, ScrollView, FlatList} from 'react-native'
//Component Imports
import WorkoutCard from '../components/WorkoutCard';
import WorkoutDay from "../components/WorkoutDay";
import WorkoutList from "./WorkoutList";
import { NavigationContainer } from '@react-navigation/native';
import { SectionList } from "react-native-web";

// *Insert Page imports here*

const DismissKeyboard = ({ children}) => (
    <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
const WorkoutScreen = ({navigation}) => {
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