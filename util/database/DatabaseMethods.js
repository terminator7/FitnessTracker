import * as SQLite from 'expo-sqlite'
import * as Random from 'expo-random'

const db = SQLite.openDatabase('appdatabase.db')

//Checking if table exist already
const initalizeDatabase = () => {
    
    //Turning on foreign keys
    db.exec([{sql: "PRAGMA foreign_keys = ON;", args: []}], false, () => console.log("Foreign keys on!"))



    //Creating Profiles
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Profiles (id VARCHAR(20), Gender CHAR(1) NOT NULL, FirstName VARCHAR(25) NOT NULL, LastName VARCHAR(25) NOT NULL, Birthday DATE NOT NULL, Height FLOAT(3, 2) NOT NULL, InitialWeight FLOAT(3,2) NOT NULL, ActivityLevel INT NOT NULL, Theme BINARY DEFAULT 1, WeightUnits VARCHAR(20), HeightUnits VARCHAR(20), PRIMARY KEY (id))'
        )
    })

    //Creating WaterTracker
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS WaterTracker (id VARCHAR (20) NOT NULL, Date DATETIME NOT NULL, WaterAmount FLOAT(3, 2) NOT NULL, WaterUnits VARCHAR(5) NOT NULL, ProfileID VARCHAR(20) NOT NULL, PRIMARY KEY (id), FOREIGN KEY (ProfileID) REFERENCES Profiles(id) ON DELETE CASCADE)'
        )
    })

    //Creating WeightTracker 
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS WeightTracker (id VARCHAR(20) NOT NULL,Date DATETIME NOT NULL, WeightAmount FLOAT(3, 2) NOT NULL, WeightUnits VARCHAR(5) NOT NULL, ProfileID VARCHAR(20) NOT NULL, PRIMARY KEY (id), FOREIGN KEY (ProfileID) REFERENCES Profiles(id) ON DELETE CASCADE)'
        )
    })

    //Creating Workouts Table
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Workouts (id VARCHAR(20) NOT NULL, Name VARCHAR(255) NOT NULL, Type VARCHAR(10) NOT NULL, ProfileID VARCHAR(20) NOT NULL, PRIMARY KEY (id), FOREIGN KEY (ProfileID) REFERENCES Profiles(id) ON DELETE CASCADE)'
        )
    })

    //Creating Diet Table
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Diet (id VARCHAR(20) NOT NULL, Name VARCHAR(255) NOT NULL, ProfileID NOT NULL, PRIMARY KEY (id), FOREIGN KEY (ProfileID) REFERENCES Profiles(id) ON DELETE CASCADE)'
        )
    })

    //Creating ProfileWorkouts Table
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS ProfileWorkouts (ProfileID VARCHAR(20) NOT NULL, WorkoutID VARCHAR(20), Reps TINYINT NOT NULL, Sets TINYINT NOT NULL, Date DATE NOT NULL, CaloriesBurned INT, FOREIGN KEY (ProfileID) REFERENCES Profiles(id) ON DELETE CASCADE, FOREIGN KEY (WorkoutID) REFERENCES Workouts(id) ON DELETE RESTRICT)'
        )
    })

    //Creating ProfileMeals
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS ProfileMeals (ProfileID VARCHAR(20) NOT NULL, MealID VARCHAR(20) , Protein FLOAT(3,2) NOT NULL, Fat FLOAT(3,2) NOT NULL, Carbs FLOAT(3,2) NOT NULL, CaloriesAte INT NOT NULL, FOREIGN KEY (ProfileID) REFERENCES Profiles(id) ON DELETE CASCADE, FOREIGN KEY (MealID) REFERENCES Diet(id) ON DELETE RESTRICT)'
        )
    })
}

const generateID = (prefix) => {
    const alphaCaps = Array.from(Array(26)).map((e,i) => i + 65).map((num) => String.fromCharCode(num))
    const alphaLower = Array.from(Array(26)).map((e, i) => i + 97).map((num) => String.fromCharCode(num))
    const symbols  = [].concat(alphaCaps, alphaLower)

    return prefix.concat("-xxxx".replace(/x/g, (c) => {
        let random = Math.floor(((Date.now() + (Math.random() * 10)) % 52))
        return symbols[random]
    }))
}

export {initalizeDatabase, generateID}