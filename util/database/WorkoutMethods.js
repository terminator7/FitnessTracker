import * as SQLite from "expo-sqlite"
import { generateID } from "./DatabaseMethods"

const db = SQLite.openDatabase('appdatabase.db')

//Description: Function will return a list of workouts based of the user profile that is selected
//Pre: Accepts profileID as string
//Post Will Return undefined if there is an error, and a list of workouts if there is not an error
const getWorkoutList = (profileID, callback) => {
    db.transaction(tx => {
        tx.executeSql("SELECT id,Name, Type FROM Workouts WHERE ProfileID=?", profileID, (txObj, resultSet) => callback(resultSet.rows._array), () => callback(undefined))
    })
}

//Description: Function will create a new workout item for the selected user
//Pre: Will accept a Name of the workout, The type of Workout, and a ProfileID
//Post: return True or False depending if there is the insertion was successful
const addWorkout = ({profileID,workoutName, workoutType}, callback) => {
    db.transaction(tx =>{
        tx.executeSql("INSERT INTO Workouts VALUES (?,?,?,?)", [generateID("W"), workoutName, workoutType, profileID], () => callback(true), () => callback(false))
    })
}
//Description: Function will delete workout from profiles saved workouts ** WILL DELEE FROM PROGRESS IF IT IS IN THERE **
//Pre: Will accept the workoutID as string
//Post: Will return True or False depending the transcation was completed or not
const deleteWorkout = (workoutID, callback) => {
    db.transaction(tx =>{
        tx.executeSql("DELETE FROM Workouts WHERE id=?", workoutID, () => callback(true), () => callback(false))
    })
}

//Description: Function will return a list of workout progress based of the current user
//Pre: Accepts a profileID as a string
//Post: Will return an undefined variable if something went wrong, otherwise will return list of progress.
const getWorkoutProgress = (profileID, callback) => {
    db.transaction(tx => {
        tx.executeSql("Select ProfileWorkouts.ProfileID,Workouts.Name,Workouts.Type,ProfileWorkouts.Reps,ProfileWorkouts.Sets,ProfileWorkouts.Date,ProfileWorkouts.CaloriesBurned FROM Workouts INNER JOIN ProfileWorkouts ON Workouts.id=ProfileWorkouts.WorkoutID Where ProfileWorkouts.ProfileID=?", profileID, (txObj, resultSet) => callback(resultSet.rows._array), () => callback(undefined))
    })
}

const addWorkoutToProgress = ({profileID, workoutID, date, sets, reps, caloriesBurned}, callback) => {
    db.transaction(tx => {
        tx.executeSql("INSERT INTO ProfileWorkouts VALUES (?,?,?,?,?,?,?)", [profileID, workoutID, reps, sets, date, caloriesBurned], () => callback(true), () => callback(false))
    })
}

export {deleteWorkout, addWorkout, getWorkoutList, getWorkoutProgress, addWorkoutToProgress}