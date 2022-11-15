import * as SQLite from "expo-sqlite"
import { generateID } from "./DatabaseMethods"

const db = SQLite.openDatabase('appdatabase.db')

//Description: Function will return a list of waters based of the user profile that is selected
//Pre: Accepts profileID as string
//Post Will Return undefined if there is an error, and a list of waters if there is not an error
const getWaterList = (profileID) => {
    db.transaction(tx => {
        tx.executeSql("SELECT id, Date, WaterAmount, WaterUnits FROM WaterTracker WHERE ProfileID = ?", [profileID], (txObj, resultSet) => callback(resultSet.rows._array), (txtObj, error) => callback(undefined))
    })
}

//Description: Function will create a new water item for the selected user
//Pre: Will accept a Name of the water, The type of water, and a ProfileID
//Post: return True or False depending if there is the insertion was successful
const addWater = ({profileID,amountOfWater,units,date}, callback) => {
    let sqlQueryParams = [generateID("WATER"),date,amountOfWater, units, profileID]
    let sqlString = "INSERT INTO WaterTracker Values (?, ?, ?, ?, ?)"
    db.transaction(tx =>{
        tx.executeSql(sqlString, sqlQueryParams, () => callback(true), () => callback(false))
    })
}
//Description: Function will delete water from profiles saved waters ** WILL DELEE FROM PROGRESS IF IT IS IN THERE **
//Pre: Will accept the water id number
//Post: Will return True or False depending the transcation was completed or not
const deleteWater = (waterID, callback) => {
    db.transaction(tx =>{
        tx.executeSql("DELETE FROM WaterTracker WHERE id = ?", [waterID], () => callback(true), () => callback(false))
    })
}

export {deleteWater, addWater, getWaterList}