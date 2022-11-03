import react, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WorkoutCard from "./WorkoutCard";
import EntypoIcon from 'react-native-vector-icons/Entypo'

const AddButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
            <View style = {{alignItems: 'center'}}>{icon}</View>
        </TouchableOpacity>
    )
}

const WorkoutDay = ({date, navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.dateHeader}>
                <Text style = {styles.dateText}>
                    Today
                </Text>
            </View>
            <WorkoutCard workoutName = 'Bench Press' workoutType='Chest'></WorkoutCard>
            <WorkoutCard workoutName = 'Dumbell Press' workoutType='Chest'></WorkoutCard>
            <View style = {styles.subContainer}>
                <AddButton icon = {<EntypoIcon name="plus" size='24' color='white'/>} onPress ={() => navigation.push('Workout List')}></AddButton>

            </View>
        </View>
    )

}
//<AddButton icon = {<EntypoIcon name="plus" size='24' color='white'/>}></AddButton> Supposed to go into WorkoutDay
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: '5', //horizontal
        alignItems: 'flex-start', //vertical 
        padding: 30
    },
    dateHeader: {
        marginBottom: 10,
        borderBottomWidth: 3,
        padding: 5,
        width: '100%',
        justifyContent: 'center'
    },
    dateText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35
    },
    addButton: {
        backgroundColor: '#FE7422',
        borderRadius: '100%',
        padding: 20,
        flex: 0,
        
    },
    subContainer: {
        width: '100%',
        alignContent: 'center',
        
    },
    });

export default WorkoutDay