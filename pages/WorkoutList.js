import react from "react";
import { StyleSheet, Text, View, Button, ButtonStyle, ScrollView, TouchableOpacity } from 'react-native';
import WorkoutCard from "../components/WorkoutCard";
import WorkoutDay from "../components/WorkoutDay";
import WorkoutMiniCards from "../components/WorkoutMiniCards";
import EntypoIcon from 'react-native-vector-icons/Entypo'

const AddButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
            <View style = {{alignItems: 'center'}}>{icon}</View>
        </TouchableOpacity>
    )
}

const WorkoutList = ({navigation}) => {
    return(
        <ScrollView style = {{backgroundColor: "rgba(46, 180, 153, 0.7)"}}>
            <View style = {styles.container}>
                <WorkoutMiniCards navigation = {navigation} workoutName= 'Bench Press' workoutType = 'Chest'></WorkoutMiniCards>
                <WorkoutMiniCards navigation = {navigation} workoutName= 'Dumbell Press' workoutType = 'Chest'></WorkoutMiniCards>
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