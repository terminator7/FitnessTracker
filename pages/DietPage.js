//General imports
import React from "react";
import { Text, View, StyleSheet, Button, Alert, TextInput } from 'react-native'

//Component Imports
// *Insert Page imports here*

const DietScreen = (props) => {
    return (
        <View style={styles.container}>
        <Text style={styles.Title}>Diet Page</Text>
        <Text style={styles.Padding}></Text>
        <Text style={styles.Border}>
        <Text style={styles.MealTitle}>Meal Name:____________{"\n"}Date:____________{"\n"}</Text>
        <Text style={styles.MealInfo}>{"\n"}Fat:_____________{"\n"}Protein:____________{"\n"}Carbs:_____________{"\n"}Total Calories:__________</Text></Text>
        <Text style={styles.Button}>
        <Button
        title="Add Meal"
        color="#FE7422"
        onPress={() => Alert.alert('Action for this button is in progress')}
      />
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
    },
    Title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      borderBottomWidth: 4,
      borderBottomColor: "#303030",
      marginHorizontal: 50,    
    },
    Border: {
      textAlign: 'center',
      borderWidth: 4,
      borderRadius: 20,
      marginHorizontal: 55,
      marginVertical: 0,
    },
    MealTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      borderWidth: 0,
      borderRadius: 20,
    },
    MealInfo: {
      textAlign: 'center',
      backgroundColor: "FFFFFF",
    },
    Button: {
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: "37%",
    },
  });

export default DietScreen;