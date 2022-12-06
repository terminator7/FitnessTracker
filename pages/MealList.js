import {React, useState, useEffect, useLayoutEffect} from "react";
import { StyleSheet, Text, View, Button, ButtonStyle, ScrollView, TouchableOpacity } from 'react-native';
import MealMiniCard from "../components/MealMiniCard";
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { useIsFocused } from "@react-navigation/native";
import { getMealsList, addMeal, deleteMeal, getMealProgress, addMealToProgress} from '../util/database/MealsMethod';
import Toast from 'react-native-root-toast';
import global from "../util/data/global";

const AddButton = ({icon, onPress}) => {
    return(
        <TouchableOpacity style = {styles.addButton} onPress = {onPress}>
            <View style = {{alignItems: 'center'}}>{icon}</View>
        </TouchableOpacity>
    )
}

const MealList = ({navigation}) => {
    const [MealList, setMealList] = useState([])
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

    const generateMealList = () => {
        getMealsList(global.profile.profileID, (result) => {
            if(result === undefined) {
                console.log("Error in database")
            }
            else if (result === []) {
                console.log("No workouts hoe")
            }
            else {
                setMealList(result)
            }
        })
    }
    

    useEffect(() => {
        if(isFocused) {
            generateMealList()
        }
    }, [isFocused])



    return(
        <ScrollView style = {{backgroundColor: "rgba(46, 180, 153, 0.7)"}}>
            <View style = {styles.container}>
                {
                    MealList.map((element, index) => {
                        return <MealMiniCard key={index} navigation={navigation} mealName={element["Name"]} updateList={generateMealList} mealId={element["id"]} showToast={showToast}></MealMiniCard>
                    })
                }
            </View>
            <Toast visible={toastVisable} position={-100} shadow={false} animation={false} hideOnPress={true}>{toastMessage}</Toast>
            <View style = {styles.buttonContainer}>
                <AddButton icon = {<EntypoIcon name="plus" size='24' color='white'/>} onPress ={() => navigation.push('AddMeal')}></AddButton>
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
export default MealList;