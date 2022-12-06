//General imports
import React from "react";
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

//Component Imports
// *Insert Page imports here*
import DropDownPicker from 'react-native-dropdown-picker';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { addWeight } from './util/database/WeightTrackerMethods';
import global from './util/data/global';


const DismissKeyboard = ({ children}) => (
    <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 50,
        backgroundColor: "rgba(46, 180, 153, 0.7)"
    },
    fittotext: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin:10,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 4,
        marginHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
      },
      appButtonContextContainer: {
        padding: 12,
      },
      input: {
        height: 40,
        marginLeft: 0,
        marginRight: 0,
        margin: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "black",
        color: "black",
        backgroundColor: "white",
        paddingLeft: 10,
        
      },
});

const WeightTrackerScreen = (props) => {
    
    const validate = () => {
        // Currently this does actually work but the text for the errors is not showing up for the user.
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.weight) {
            showMessage({message:'ERROR: Please input a weight...', backgroundColor: 'red'})
            valid = false;
        }
        else if (!inputs.weight.match(/^\d+\.?\d*$/)) {
            showMessage({message:'ERROR: Please input a weight (numbers)...', backgroundColor: 'red'})
            valid = false;
        }
        else if (!inputs.units) {
            showMessage({message:'ERROR: Please pick a unit to work with...', backgroundColor: 'red'})
            valid = false;
        }
        else if (valid) {
            // send to database if valid is true
            addWeight({profileID: global.profile["profileID"], weight: inputs.weight, date:"Date('now')", units: inputs.units}, (result) => console.log("Weight Added: " + result))
        }
    };
    const [inputs, setInputs] = React.useState({
        weight: '',
        units: '',
    });
    
    const HandleOnChange = (text, input) => {
        setInputs((prevState =>({...prevState, [input]: text})));
    };

    
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    
    const [items, setItems] = React.useState([
      {label: 'Select a unit', value: ''},
      {label: 'Kilograms', value: 'kilograms'},
      {label: 'Pounds', value: 'pounds'},
    ]);
    return (
        // Need to change styling of padding left for text
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <View style={styles.appButtonContainer}>
                    <View style={{alignItems: "center", backgroundColor: "#FE7422", borderTopRightRadius: 4, borderTopLeftRadius: 4, padding: 10}}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: "bold"}}>Enter Weight</Text> 
                    </View>
                    <View style={styles.appButtonContextContainer}>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            onChangeText={text => HandleOnChange(text,"weight")}
                            placeholder="Add Here"
                        />
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            onChangeValue={value => {inputs.units = value; console.log(inputs)}}
                        />
                        <TouchableOpacity 
                            activeOpacity={0.7}
                            onPress={validate}
                            style={{
                                height: 40,
                                width: '100%',
                                backgroundColor: '#FE7422',
                                marginVertical: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 7,
                            }}
                        >
                            <Text style={{fontWeight: 'bold', fontSize: 18, color: "white"}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </DismissKeyboard>
    );
    
}

export default WeightTrackerScreen;