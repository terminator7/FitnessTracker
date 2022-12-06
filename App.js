import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message'
import {getDate, getDateAndTime} from './util/dateMethods/dateMethods'

import { initalizeDatabase, refreshDataBase } from './util/database/DatabaseMethods';
import { addProfile, getProfileList, getProfile } from './util/database/ProfileMethods';
import { addMeal, addMealToProgress, getMealsList } from './util/database/MealsMethod'
import { addWater } from './util/database/WaterTrackerMethods'

import OnboardingScreen from './pages/OnboardingPage';
import ProfileSetupScreen from './pages/ProfileSetupPage';
import HomeScreen from './pages/HomePage';
import { addWorkout, getWorkoutList, addWorkoutToProgress } from './util/database/WorkoutMethods';
import { addWeight } from './util/database/WeightTrackerMethods';
import global from './util/data/global';
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createNativeStackNavigator();

const App = () => {

  const [hasUserProfile, setHasUserProfile] = useState(false)
  useEffect(() => {
    //refreshDataBase()
    initalizeDatabase()
    getProfile((result) => {
      console.log(result)
      if(result.length === 0) {
        setHasUserProfile(false)
      } else {
        setHasUserProfile(true)
        global.profile["firstName"] = result[0]["FirstName"]
        global.profile["lastName"] = result[0]["LastName"]
        global.profile["age"] = result[0]["Age"]
        global.profile["gender"] = result[0]["Gender"]
        global.profile["weight"] = result[0]["InitalWeight"]
        global.profile["height"] = result[0]["Height"]
        global.profile["weightUnits"] = result[0]["WeightUnits"]
        global.profile["heightUnits"] = result[0]["HeightUnits"]
        global.profile["profileID"] = result[0]["id"]
      }
    })
    //This Code is for Devlopment Purposes Only and will be removed on final product
    /* let deleteDataBase = false
    let generateData = false
    if (deleteDataBase) {
      refreshDataBase()
    } else if(generateData) {
      initalizeDatabase()
      addProfile({gender:"M",firstName:"Jacob",lastName:"Douglas",theme:0,birthday:"Date('now')",height:5.0, initialWeight:200, activityLevel:0, weightUnits:"pounds", heightUnits:"feet"}, (result) => console.log(result))
      getProfileList((result) => console.log(result))
    } else {
      initalizeDatabase()
      getProfileList((result) => {
        let testProfileID = result[0]["id"]
        console.log(testProfileID)

        //Add Test data for other pages COMMENT OUT CODE IF YOU DO NOT WANT TO CONTINUE ADDING DATA
        addMeal({profileID:testProfileID, mealName:"Chicken & Beans"}, (result) => {
          console.log("Meal Added: " + result)
          if(result === true) {
            getMealsList(testProfileID, (result) => {
              //console.log(result)
              //console.log("Ths one: " + testProfileID)
              if(result) {
                let testMealID = result[0]["id"]
                console.log("Meal ID: " + testMealID)
                addMealToProgress({profileID: testProfileID, mealID: testMealID, date:"DATE('now', 'localtime')", carbs:23, fats:12, protein:40, caloriesAte:400}, (progressresult) => console.log("Meal Progress for " + testMealID + " Added: " +  progressresult))
              }
            })
          }
        })
        addWater({profileID:testProfileID, amountOfWater:0.5, units:"gallons", date:"DATETIME('now', 'localtime')"}, (result) => console.log("Water Added: " + result))
        addWorkout({profileID:testProfileID, workoutName:"Chest Press", workoutType:"Chest"}, (result) => {
          console.log("Workout Added: " + result)
          if(result) {
            getWorkoutList(testProfileID, (result) => {
              if(result) {
                testWorkoutID = result[0]["id"]
                console.log("WorkoutID: " + testWorkoutID)
                addWorkoutToProgress({profileID: testProfileID, workoutID: testWorkoutID, date:getDateAndTime(), sets:3, reps:12, caloriesBurned:200}, (progressresult) => console.log("Workout " + testWorkoutID+ " Added: " +  progressresult))
              }
            })
          }
        })
        addWeight({profileID:testProfileID, weight:203, date:"Date('now')", units:"pounds"}, (result) => console.log("Weight Added: " + result))   
      }) 
    } */
  }, [])

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Onboarding' component={ OnboardingScreen }/>
          <Stack.Screen name='Profile Setup' component={ ProfileSetupScreen }/>
          <Stack.Screen name='Home' component={ HomeScreen }/>
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;