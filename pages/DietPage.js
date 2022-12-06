//General imports
import {React, useState, useEffect, useLayoutEffect }from "react";
import { Text, View, StyleSheet, Button, Alert, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native'
import AddMealButton from "../components/AddMealButton";
import DietDay from "../components/DietDay"
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import global from '../util/data/global'
import { getDate } from "../util/dateMethods/dateMethods";
import { getMealsList, addMeal, deleteMeal, getMealProgress, addMealToProgress} from '../util/database/MealsMethod';


//Component Imports
// *Insert Page imports here*
import MealCard from '../components/MealCard'


const DismissKeyboard = ({ children}) => (
  <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
);

const DietScreen = ({navigation}) => {
  
  const [MealProgress, setMealProgress] = useState(new Map())
  const isFocused = useIsFocused()


  const generateMealProgess = () => {
      let DateMap = new Map()
      getMealProgress(global.profile.profileID, (result) => {
          if(result === undefined) {
              console.log("There was an error reaching the database")
          }
          else {
              for(let i = 0; i < result.length; i++) {
                  if (DateMap.has((result[i]["Date"]).substring(0,10))) {
                      DateMap.set((result[i]["Date"]).substring(0,10), [...DateMap.get((result[i]["Date"]).substring(0,10)), result[i]])
                  } else {
                      DateMap.set((result[i]["Date"]).substring(0,10), [result[i]])
                  }
              }
              console.log(DateMap)
              setMealProgress(DateMap)
          }
      })
  }

  useEffect(() => {
      if(isFocused) {
          generateMealProgess()
      }
  },[isFocused])
    
  return (
    <ScrollView style = {{backgroundColor: "rgba(46, 180, 153, 0.7)"}}>
      <DismissKeyboard>
        <View>
          {[...MealProgress.keys()].length === 0  && <DietDay navigation={navigation} date={getDate()} updateList={generateMealProgess}></DietDay>}
          {
            [...MealProgress.keys()].map((date, index) => {
              return <DietDay key={index} navigation={navigation} date={date} meals={MealProgress.get(date)} updateList={generateMealProgess}></DietDay>
            })
          }
        </View>
      </DismissKeyboard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      padding: 30
    },
    Title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      borderBottomWidth: 4,
      borderBottomColor: "#303030",
      marginHorizontal: 50,    
    },
    Border: {
      marginHorizontal: 55,
      marginVertical: 0,
    },
    MealTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      borderWidth: 0,
      borderRadius: 20,
    },
    MealInfo: {
      textAlign: 'center',
      backgroundColor: "FFFFFF",
    },
    Button: {
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: "37%",
    },
    buttonText: {
      fontSize: 20,
      color: '#000000'
    },
  });

export default DietScreen;