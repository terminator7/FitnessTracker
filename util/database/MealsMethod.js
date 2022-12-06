import * as SQLite from "expo-sqlite"
import { generateID } from "./DatabaseMethods"

const db = SQLite.openDatabase('appdatabase.db')

//Description: Function will return a list of meals based of the user profile that is selected
//Pre: Accepts profileID as string
//Post Will Return undefined if there is an error, and a list of meals if there is not an error
const getMealsList = (profileID, callback) => {
    db.transaction(tx => {
        tx.executeSql("SELECT id, Name FROM Diet WHERE ProfileID = ?",[profileID], (txObj, resultSet) => callback(resultSet.rows._array), (txtObj, error) => callback(undefined))
    })
}

//Description: Function will create a new meal item for the selected user
//Pre: Will accept a Name of the meal, The type of meal, and a ProfileID
//Post: return True or False depending if there is the insertion was successful
const addMeal = ({profileID, mealName}, callback) => {
    db.transaction(tx =>{
        tx.executeSql("INSERT INTO Diet VALUES (?,?,?)", [generateID("M"), mealName, profileID], () => callback(true), () => callback(false))
    })
}
//Description: Function will delete meal from profiles saved meals ** WILL DELEE FROM PROGRESS IF IT IS IN THERE **
//Pre: Will accept the meal id number
//Post: Will return True or False depending the transcation was completed or not
const deleteMeal = (mealID, callback) => {
    db.transaction(tx =>{
        tx.executeSql("DELETE FROM Diet WHERE id = ?", [mealID], () => callback(true), () => callback(false))
    })
}
//Description: Function will return a list of meal progress based of the current user
//Pre: Accepts a profileID as a string
//Post: Will return an undefined variable if something went wrong, otherwise will return list of progress.
const getMealProgress = (profileID, callback) => {
    db.transaction(tx => {
        tx.executeSql("Select Diet.ProfileID,Diet.id,Diet.Name,ProfileMeals.Protein,ProfileMeals.Carbs,ProfileMeals.Fat,ProfileMeals.CaloriesAte,ProfileMeals.Date FROM Diet INNER JOIN ProfileMeals ON Diet.id=ProfileMeals.MealID WHERE Diet.ProfileID = ?", [profileID],(txObj, resultSet) => callback(resultSet.rows._array), () => callback(undefined))
    })
}

const addMealToProgress = ({profileID, mealID, date, carbs, fats, protein, caloriesAte}, callback) => {
    db.transaction(tx =>{
        tx.executeSql("INSERT INTO ProfileMeals VALUES (?,?,?,?,?,?,?)", [profileID, mealID, protein, fats, carbs, date, caloriesAte], () => callback(true), () => callback(false))
    })
}

const updateMealProgress = ({profileID, mealID, date, carbs, fats, protien, caloriesAte}, callback) => {
    db.transaction(tx => {
        tx.executeSql("UPDATE ProfileMeals SET Protein = ?, Fat = ?, Carbs = ?, CaloriesAte = ? WHERE ProfileID = ? AND MealID = ? AND Date = ?",[protien, fats, carbs, caloriesAte, profileID, mealID, date], () => callback(true), () => callback(false))
    })
}

const deleteMealProgress = ({profileID, mealID, date}, callback) => {
    db.transaction(tx => {
        tx.executeSql("DELETE FROM ProfileMeals WHERE ProfileID = ? AND MealID = ? AND Date = ?",[profileID, mealID, date], () => callback(true), () => callback(false))
    })
}

export {deleteMeal, addMeal, getMealsList, getMealProgress, addMealToProgress, updateMealProgress, deleteMealProgress}