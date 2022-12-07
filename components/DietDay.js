import react, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MealCard from "./MealCard";
import { useIsFocused } from "@react-navigation/native";

const AddButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
            <View style = {{alignItems: 'center'}}>{icon}</View>
        </TouchableOpacity>
    )
}

const DietDay = ({date = "Today", navigation, meals = [], updateList}) => {
    const isFocused = useIsFocused()
    useEffect(() => {
        if(isFocused) {
            console.log(meals)
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
                meals.length > 0 && meals.map((element, index) => {
                    return <MealCard key={index} MealName={element["Name"]} Fat={element["Fat"]} profileID={element["ProfileID"]} date={element["Date"]} mealID={element["mealID"]} updateList={updateList} Protein={element["protien"]} Carbs={element["Carbs"]} TotalCalories={element["TotalCalories"]}></MealCard>
                })
            }
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