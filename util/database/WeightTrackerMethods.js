import * as SQLite from "expo-sqlite"
import { generateID } from "./DatabaseMethods"

const db = SQLite.openDatabase('appdatabase.db')

//Description: Function will return a list of meals based of the user profile that is selected
//Pre: Accepts profileID as string
//Post Will Return undefined if there is an error, and a list of meals if there is not an error
const getWeightList = (profileID, callback) => {
    let weightList = [] 
    db.transaction(tx => {
        tx.executeSql("SELECT id, Date, WeightAmount, WeightUnits FROM WeightTracker WHERE ProfileID = ?", [profileID], (txObj, resultSet) => callback(resultSet.rows._array), (txtObj, error) => callback(undefined))
    })
    return weightList
}

//Description: Function will create a new meal item for the selected user
//Pre: Will accept a Name of the meal, The type of meal, and a ProfileID
//Post: return True or False depending if there is the insertion was successful
const addWeight = ({profileID,weight, units, date}, callback) => {
    let sqlQueryParams = [generateID("WEIGHT"),date,weight, units, profileID]
    let sqlString = "INSERT INTO WeightTracker Values (?, ?, ?, ?, ?)"
    db.transaction(tx =>{
        tx.executeSql(sqlString, sqlQueryParams, () => callback(true), () => callback(false))
    })
}
//Description: Function will delete meal from profiles saved meals ** WILL DELEE FROM PROGRESS IF IT IS IN THERE **
//Pre: Will accept the meal id number
//Post: Will return True or False depending the transcation was completed or not
const deleteWeight = (weightID, callback) => {
    db.transaction(tx =>{
        tx.executeSql("DELETE FROM WeightTracker WHERE id = ?", [weightID], () => callback(true), () => callback(false))
    })
}

export {deleteWeight, addWeight, getWeightList}