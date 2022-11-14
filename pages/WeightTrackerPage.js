//General imports
import React from "react";
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

//Component Imports
// *Insert Page imports here*
import DropDownPicker from 'react-native-dropdown-picker';
import { showMessage, hideMessage } from 'react-native-flash-message';


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

        }
    };
    const [inputs, setInputs] = React.useState({
        weight: '',
        units: '',
    });
    const [errors, setErrors] = React.useState({});
    const HandleOnChange = (text, input) => {
        setInputs((prevState =>({...prevState, [input]: text})));
    };

    

    const [number, onChangeNumber] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    
    const [items, setItems] = React.useState([
      {label: 'Select an item', value: ''},
      {label: 'Kilograms', value: 'kg'},
      {label: 'Pounds', value: 'lbs'},
    ]);
    return (
        // Need to change styling of padding left for text
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <View style={styles.appButtonContainer}>
                    <Text style={{fontSize: 20, color: 'white', justifyContent: "center", paddingLeft:"34%"}}>Enter Weight</Text> 
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
                                backgroundColor: 'white',
                                marginVertical: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 7,
                            }}
                        >
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Submit</Text>
                        </TouchableOpacity>
                </View>
            </SafeAreaView>
        </DismissKeyboard>
    );
    
}

export default WeightTrackerScreen;