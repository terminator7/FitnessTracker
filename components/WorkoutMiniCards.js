import react, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Dimensions, TouchableWithoutFeedback } from 'react-native';


const WorkoutMiniCards = ({workoutName, workoutType}) => {

  const [isSetFocused, setSetFocus] = useState(false)
  const [isRepFocused, setRepFocus] = useState(false)
  const [isCaloriesFocused, setCaloriesFocus] = useState(false)
    return (
        <View style={ styles.container}>
          <View style = {styles.cardHeader}>
            <Text style = { styles.workoutName}>{workoutName}</Text>
            <Text style = { styles.workoutType}>{workoutType}</Text>
          </View>
       </View>
    );
}

const styles = StyleSheet.create({
  container: {
      borderWidth: 3,
      borderRadius: 15,
      width: '100%',
      marginBottom: 20
  },
  title: {
    fontWeight: 'bold'
  },
  cardHeader: {
    backgroundColor: "#FE7422",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    padding: 10,
    alignItems: 'center'
  },
  workoutName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 5
  },
  workoutType: {
    fontStyle: 'italic',
    color: '#FCB419',
    fontWeight: '500'
  },
  cardContent: {
    padding: 10
  },
  input:{
    borderBottomWidth: 1.25,
    width: 100
  },
  inputField: {
    flexDirection: 'row', //fix alignment
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    padding: 5,
    justifyContent: 'space-between',
  }
  });
export default WorkoutMiniCards;