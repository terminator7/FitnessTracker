//General imports
import {React, useState, useEffect} from "react";
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

//Component Imports
// *Insert Page imports here*
import DropDownPicker from 'react-native-dropdown-picker';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { addWeight } from '../util/database/WeightTrackerMethods';
import global from '../util/data/global';
import {getDateAndTime} from '../util/dateMethods/dateMethods'
import Toast from "react-native-root-toast";

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
    
    const [toastVisable, setToastVisable] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    const showToast = (message) => {
        setToastMessage(message)
        setToastVisable(true)
        setTimeout(() => {
            setToastVisable(false)
        }, 1000);
    }

    const validate = () => {
        // Currently this does actually work but the text for the errors is not showing up for the user.
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.weight) {
            showToast('ERROR: Please input a weight')
            valid = false;
        }
        else if (!inputs.weight.match(/^\d+\.?\d*$/)) {
            showToast('ERROR: Please input a weight (numbers)')
            valid = false;
        }
        else if (!inputs.units) {
            showToast('ERROR: Please pick a unit to work with')
            valid = false;
        }
        else if (valid) {
            addWeight({profileID: global.profile["profileID"], weight: inputs.weight, date:getDateAndTime(), units: inputs.units}, (result) => {
                if(result) {
                    showToast("Weight Added")
                } else {
                    showToast("Weight Not Added, Try Again Later")
                }
            })
        }
    };
    const [inputs, setInputs] = useState({
        weight: '',
        units: '',
    });
    
    const HandleOnChange = (text, input) => {
        setInputs((prevState =>({...prevState, [input]: text})));
    };

    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    
    const [items, setItems] = useState([
      {label: 'Select a unit', value: ''},
      {label: 'Kilograms', value: 'Kg'},
      {label: 'Pounds', value: 'lbs'},
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
                    <Toast visible={toastVisable} position={-100} shadow={false} animation={false} hideOnPress={true}>{toastMessage}</Toast>
                </View>
            </SafeAreaView>
        </DismissKeyboard>
    );
    
}

export default WeightTrackerScreen;