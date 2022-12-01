//General imports
import * as React from 'react';
import { Text, View, Button, Alert, StyleSheet, TextComponent, ScrollView, Dimensions} from 'react-native'
import WorkoutProgressCard from "../components/WorkoutProgressCard"
import DietProgressCircle from '../components/DietProgressCircle';
import DietSummaryCard from '../components/DietSummaryCard';
import { LineChart } from 'react-native-chart-kit';
//DB Imports
//import {getWaterList} from "../util/database/WaterTrackerMethods.js"
//import {getWeightList} from "../util/database/WeightTrackerMethods.js"
//import {getMealProgress} from "../util/database/MealsMethod.js"
//import {getWorkoutProgress} from "../util/database/WorkoutMethods"




/*If we want to hide information, then reveal it, looks at render() in this link;
https://reactnative.dev/docs/text


With this, I could turn each page into a touchable (ex: https://www.youtube.com/watch?v=0-S5a0eXPoc&t=3691s)
Have a touchable for each Total, so I hide everything else (set their opacity to invisbile),
then add a bunch of extra information to that section, such as a breakdown on everything.

Lastly, use a touchable to return the opacity, and remove all the extra information.
*/

const ProgressScreen = (props) => {

    const screenWidth = Dimensions.get("window").width;

    const weightData = {
        labels: ["Date 1", "Date 2", "Date 3", "Date 4", "Date 5"],
        datasets: [
          {
            data: [220, 215, 205, 210, 215],
            color: () => `#FE7422`, // optional
            strokeWidth: 5 // optional
          }
        ],
    }

    const waterData = {
        labels: ["Date 1", "Date 2", "Date 3", "Date 4", "Date 5"],
        datasets: [
          {
            data: [.3, .4, .23, .6, 1],
            color: () => `#FE7422`, // optional
            strokeWidth: 5 // optional
          }
        ],
    }

    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 1,
        color: () => `#FE7422`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        propsForVerticalLabels: {fontWeight: "bold"},
        propsForHorizontalLabels: {fontWeight: "bold"}
      };
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.greetingHeader}>
                    <Text style={{textAlign: "center", fontWeight: "bold", color: "white", fontSize: 50}}>Hello Jacob</Text>
                    <Text style={{textAlign: "center", fontWeight: "700", color: "white", fontSize: 25, marginTop: 10}}>Lets see your progress</Text>
                </View>

                <View style={styles.progressContainer}>
                    <View style={styles.progressContainerHeading}>
                        <Text style={styles.progressHeadingText}>Workout Progress</Text>
                    </View>
                    <WorkoutProgressCard workoutName="Bench Press" previous={30} mostRecent={100}></WorkoutProgressCard>
                    <WorkoutProgressCard workoutName="Dumbell Row" previous={100} mostRecent={30}></WorkoutProgressCard>
                </View>
                <View style={styles.progressContainer}>
                    <View style={styles.progressContainerHeading}>
                        <Text style={styles.progressHeadingText}>Diet Progress</Text>
                    </View>
                    <DietSummaryCard totalProtein={200} totalCarbs={100} totalFats={100} totalCalories={900}></DietSummaryCard>
                    <View style={styles.progressCircleContainer}>
                        <DietProgressCircle title="Maintain" currentTotal={900} requiredTotal={2500}></DietProgressCircle>
                        <DietProgressCircle title="Loose" currentTotal={900} requiredTotal={2000}></DietProgressCircle>
                        <DietProgressCircle title="Gain" currentTotal={900} requiredTotal={2800}></DietProgressCircle>
                        <DietProgressCircle title="Protein" currentTotal={200} requiredTotal={400}></DietProgressCircle>
                        <DietProgressCircle title="Carbs" currentTotal={100} requiredTotal={400}></DietProgressCircle>
                        <DietProgressCircle title="Fats" currentTotal={100} requiredTotal={400}></DietProgressCircle>
                    </View>
                </View>
                <View style={styles.progressContainer}>
                    <View style={styles.progressContainerHeading}>
                        <Text style={styles.progressHeadingText}>Water Progress</Text>
                    </View>
                    <LineChart
                        data={weightData}
                        width={screenWidth - 50}
                        height={250}
                        chartConfig={chartConfig}
                        style = {styles.lineGraph}
                    />
                </View>
                <View style={styles.progressContainer}>
                    <View style={styles.progressContainerHeading}>
                        <Text style={styles.progressHeadingText}>Weight Progress</Text>
                    </View>
                    <LineChart
                        data={waterData}
                        width={screenWidth - 50}
                        height={250}
                        chartConfig={chartConfig}
                        style = {styles.lineGraph}
                    />
                </View>
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    lineGraph: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        borderRadius: 4,
    },
    progressCircleContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between"
    },
    progressContainer: {
        padding: 25,
    },
    progressContainerHeading: {
        marginBottom: 25,
        borderBottomWidth: 3,
        padding: 5,
        width: '100%',
        justifyContent: 'center',
        borderBottomColor: "white"
    },
    progressHeadingText: {
        textAlign: "center",
        color: "white",
        fontSize: 35,
        fontWeight: "900"
    },
    greetingHeader: {
        paddingTop: 50,
        marginBottom: 40
    },
    scrollContainer: {
        backgroundColor: "rgba(46, 180, 153, 0.7)"
    },
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