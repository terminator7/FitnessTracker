//General imports
import React from "react";
import { Text, View, Button, Alert, StyleSheet, TextComponent } from 'react-native'
import { SafeAreaView} from "react-native-safe-area-context";

//Component Imports
// *Insert Page imports here*


//  Could add this if we wanted to update the page on a button press
/*
            <Button
                title="Update" onPress={Update_Data}
            />
*/

/*
function Update_Data() {
    var text = ""
    for (let i = 0; i < totalItems.length; i++)
    {
        text = "Your total is: " + getTotalFromOtherPage();
        totalItems[i] = text
    }
    alert("Updated");
}
*/

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
var Protein = () => {
    var total = getTotalFromOtherPage("Protein");
    return (
      <Text>Your total is: {total}!</Text>
    );
  }
var Calories = () => {
    var total = getTotalFromOtherPage("Calories");
    return (
      <Text>Your total is: {total}!</Text>
    );
  }
var Carbs = () => {
    var total = getTotalFromOtherPage("Carbs");
    return (
      <Text>Your total is: {total}!</Text>
    );
  }
var Fats = () => {
    var total = getTotalFromOtherPage("Fats");
    return (
      <Text>Your total is: {total}!</Text>
    );
  }
var Water = () => {
    var total = getTotalFromOtherPage("Water");
    return (
      <Text>Your total is: {total}!</Text>
    );
    //Also insert progress, could use a progress bar.
  }
  var Weight = () => {
    var total = "totally definitely tubby";
    return (
        <Text>Your total is: {total}!</Text>
      );
    //Combine information to calculate a weight
  }





  //In the future, we'll use this to fetch data from a specific page
function getTotalFromOtherPage(Target_Page){
    switch(Target_Page)
    {
        case "Calories":
            // ...
            return "Dummie Answer";
        case "Protein":
            // ...
            return "Dummie Answer";
        case "Water":
            // ...
            return "Dummie Answer";
        case "Fats":
            // ...
            return "Dummie Answer";
        case "Carbs":
            // ...
            return "Dummie Answer";
    }
    
}


export default ProgressScreen;