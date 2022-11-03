import * as SQLite from 'expo-sqlite'
import { generateID } from './DatabaseMethods'

const db = SQLite.openDatabase('appdatabase.db')

//Description: Get list of all profiles and their information
//Pre: None
//Post: Will return an array of objects, object being the profile and its information
const getProfileList = () => {
    let profilesList = []
    db.transaction(tx => {
        tx.executeSql('SELECT id FROM Profiles' ,null, (txObj, resultSet) => profilesList = resultSet.rows._array, (txtObj, error) => profilesList = undefined)
    })
    return profilesList
}

//Description: Get information just on one profile
//Pre: profileID is accepted into its parameter
//Post: Will return profile object
const getProfileDetails = (profileID) => {
    let profileInformation = []
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM Profiles Where id=?' ,profileID, (txObj, resultSet) => profilesList = resultSet.rows._array, (txtObj, error) => profilesList = undefined)
    })
    return profileInformation[0]
}

//Description: Add profile to the database
/* Pre: 
    Gender: 'M' or 'F'
    firstname: String
    lastname: String
    theme: 0/1 light/dark
    birthday: Date
    initalweight: float
    height: float
    units: string */
//Post: Will return true or false depending if the profile was added into the database or not
const addProfile = (gender, firstName, lastName, theme = 0, birthday, height, initialWeight, activityLevel, weightUnits, heightUnits) => {
    let transactionCompleted = false
    db.transaction(tx => {
        tx.executeSql('INSERT INTO Profiles VALUES = (?,?,?,?,?,?,?,?)', [generateID("PROFILE"), gender, firstName, lastName, birthday, height, initialWeight, activityLevel, theme, weightUnits, heightUnits], () => transactionCompleted = true, () => transactionCompleted = false)
    })
    return transactionCompleted
}
//Description: Will Remove profile from database
//Pre: Accepts profileID as String
//Post: Will Return True or False if the profile was removed
const deleteProfile = (profileId) => {
    let transactionCompleted = false

    db.transaction(tx => {
        tx.executeSql('DELETE From Profile WHERE id=?', profileId, () => transactionCompleted = true, () => transactionCompleted = false)
    })

    return transactionCompleted
}

//Description: Allows user to change theme for their profile
//Pre: accepts the profileID as string and newTheme as a binary
//Post: return true or false depending if the theme was actually updated
const changeProfileTheme = (profileID, newTheme) => {
    let transactionCompleted = false
    db.transaction(tx => {
        tx.executeSql('UPDATE Profiles Theme=? Where id=?', [newTheme, profileID],() => transactionCompleted = true, () => transactionCompleted = false)
    })

    return transactionCompleted
}
export {getProfileDetails, changeProfileTheme, deleteProfile, addProfile,  getProfileList}
