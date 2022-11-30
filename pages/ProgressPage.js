//General imports
import * as React from 'react';
import { Text, View, Button, Alert, StyleSheet, TextComponent } from 'react-native'
import { SafeAreaView} from "react-native-safe-area-context";


//DB Imports
//import {getWaterList} from "/util/database/WaterTrackerMethods.js"
//import {getWeightList} from "./util/database/WeightTrackerMethods.js"
//import {getMealProgress} from "./util/database/MealsMethod.js"
//import {getWorkoutProgress} from "../util/database/WorkoutMethods"




/*If we want to hide information, then reveal it, looks at render() in this link;
https://reactnative.dev/docs/text


With this, I could turn each page into a touchable (ex: https://www.youtube.com/watch?v=0-S5a0eXPoc&t=3691s)
Have a touchable for each Total, so I hide everything else (set their opacity to invisbile),
then add a bunch of extra information to that section, such as a breakdown on everything.

Lastly, use a touchable to return the opacity, and remove all the extra information.
*/

const ProgressScreen = (props) => {

    return (
        <React.Fragment> 
            <View style={styles.Header}>
                <Text>
                    Progress Page - Check your current progress for the week!
                </Text>   
            </View>

            <View style={styles.TotalSheet}>
                <Text >
                Total Calories
                </Text>
                <View style={styles.Total}>         
                    <Calories>
                    </Calories>         
                </View>
            </View>

            <View style={styles.TotalSheet}>
                <Text class="Proteins">
                Total Proteins
                </Text>
                <View style={styles.Total}>         
                    <Protein>
                    </Protein>         
                </View>
            </View>

            <View style={styles.TotalSheet}>
                <Text class="Carbs">
                Total Carbs
                </Text>
                <View style={styles.Total}>         
                    <Carbs>
                    </Carbs>         
                </View>
            </View>

            <View style={styles.TotalSheet}>
                <Text class="Fats">
                Total Fats
                </Text>
                <View style={styles.Total}>         
                    <Fats>
                    </Fats>         
                </View>
            </View>

            <View style={styles.TotalSheet}>
                <Text class="Water">
                Total Water
                </Text>
                <View style={styles.Total}>         
                    <Water>
                    </Water>         
                </View>
            </View>
            <View style={styles.TotalSheet}>
                <Text class="Weight">
                Total Weight
                </Text>
                <View style={styles.Total}>         
                    <Weight>
                    </Weight>         
                </View>
            </View>
        </React.Fragment>
    );
}



const styles = StyleSheet.create({
    Background: {
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },
    Header:  {
        flex:0.5,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth:3,
        borderLeftWidth:3,
        borderRightWidth:3,
    },
    TotalSheet:   {
        flex:1,
        backgroundColor: "#FFA500",
        borderTopWidth:3,
        borderLeftWidth:3,
        borderRightWidth:3,
        borderColor:'black',
        alignItems: "center",

    },    
    Total:  {
        //backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        borderColor:'black',
        alignItems: "center",
        fontSize: 50
    }
});





//5 of these in total, each one accesses the Updated Data
//1 at the bottom is weight.


const Protein = () => {
    //let total = getMealProgress(ProfileIDFake);
    let total = "dummie text"
    //Parse info

    return (
      <Text>Your total is: {total}!</Text>
    );
  }
const Calories = () => {
    //let Total = getMealProgress(ProfileIDFake);
    let total = "dummie text"
    return (
      <Text>Your total is: {total}!</Text>
    );
  }
const Carbs = () => {
    //let total = getTotalFromOtherPage("Carbs");
    let total = "dummie text"
    return (
      <Text>Your total is: {total}!</Text>
    );
  }
const Fats = () => {
    //let total = getTotalFromOtherPage("Fats");
    let total = "dummie text"
    return (
      <Text>Your total is: {total}!</Text>
    );
  }
const Water = () => {
    //let total = getWaterList(ProfileIDFake);
    let total = "dummie text"
    return (
      <Text>Your total is: {total}!</Text>
    );
    //Also insert progress, could use a progress bar.
  }
 const Weight = () => {
    //let total = getWeightList(ProfileIDFake)
    let total = "dummie text"
    return (
        <Text>Your total is: {total}!</Text>
      );
    //Combine information to calculate a weight
  }



//Fake profile
let ProfileIDFake = "123"


export default ProgressScreen;