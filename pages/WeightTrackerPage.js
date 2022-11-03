//General imports
import React from "react";
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

//Component Imports
// *Insert Page imports here*
import DropDownPicker from 'react-native-dropdown-picker';


const DismissKeyboard = ({ children}) => (
    <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    fittotext: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin:10,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#f27329",
        borderRadius: 10,
        padding: 12,
        margin: 7,
      },
      input: {
        height: 40,
        width: "100%",
        marginBottom: 5,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "black",
        color: "white",
        padding: 8,
        paddingBottom: 22,
        paddingTop: 22,
        backgroundColor: "white",
      },
});

const WeightTrackerScreen = (props) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
      {label: 'Kilograms', value: 'kg'},
      {label: 'Pounds', value: 'lbs'},
      {label: 'Stones', value: 'stone'},
    ]);
    return (
        // Need to change styling of padding left for text
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <View style={styles.appButtonContainer}>
                    <Text style={{fontSize: 20, color: 'white', justifyContent: "center", paddingLeft:"34%"}}>Enter Weight</Text> 
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Add Weight Here"
                            style={styles.input}
                            onChangeText={null}
                            value={value}
                        />
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                        <View style={{elevation: 8,
                            backgroundColor: "white",
                            borderRadius: 10,
                            paddingVertical: 10,
                            paddingHorizontal: 50,
                            margin: 10,}}>
                        <Button
                            onPress={console.log("This is the value of weight and unit ")}
                            style={{fontSize: 10, color: 'green'}}
                            color="black"
                            title="Submit"
                        /></View>
                    
                </View>
            
            
            </SafeAreaView>
        </DismissKeyboard>
    );
}

export default WeightTrackerScreen;