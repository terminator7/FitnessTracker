//General imports
import React from "react";
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';

//Component Imports
// *Insert Page imports here*
import DropDownPicker from 'react-native-dropdown-picker';

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
        marginLeft: 0,
        marginRight: 0,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "black",
        color: "black",
        backgroundColor: "white",
        padding: 10,
      },
});

const WeightTrackerScreen = (props) => {
    const [text, onChangeText] = React.useState("Add Here");
    const [number, onChangeNumber] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
      {label: 'Kilograms', value: 'kg'},
      {label: 'Pounds', value: 'lbs'},
      {label: 'Stones', value: 'stone'},
    ]);
    return (
        // Need to change styling of padding left for text
        <SafeAreaView style={styles.container}>
            <View style={styles.appButtonContainer}>
                <Text style={{fontSize: 20, color: 'white', justifyContent: "center", paddingLeft:"34%"}}>Enter Weight</Text> 
                    
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Add Here"
                    />
                    <DropDownPicker
                    modalTitle="Add One"
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
        margin: 10,}}><Button
                        style={{fontSize: 10, color: 'green'}}
                        color="black"
                        title="Submit"
                    /></View>
                
            </View>
            
        </SafeAreaView>
    );
}

export default WeightTrackerScreen;