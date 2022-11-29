import react, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MealCard from "./MealCard";

const AddButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
            <View style = {{alignItems: 'center'}}>{icon}</View>
        </TouchableOpacity>
    )
}

const DietDay = ({date = "Today", navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.dateHeader}>
                <Text style = {styles.dateText}>
                    {date}
                </Text>
            </View>
            <MealCard MealName= "Pizza Rolls"></MealCard>
            <MealCard MealName= "CheeseBurger"></MealCard>
            <AddButton icon = {<EntypoIcon name="plus" size='24' color='white'/>} onPress ={() => navigation.push('MealList')}></AddButton>
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

export default DietDay