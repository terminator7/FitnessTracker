//General imports
import React, {useState} from "react";
import { Button, TextInput, Alert, SafeAreaView, Dimensions, Image, ImageBackground, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import ProgressCircle from 'react-native-progress-circle-updated'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'


const DismissKeyboard = ({ children}) => (
    <TouchableWithoutFeedback onPress ={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

//Component Imports
// *Insert Page imports here*


const WaterTrackerScreen = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'mL', value: 'milliliters'},
        {label: 'L', value: 'liters'},
        {label: 'fl. oz.', value: 'fluid ounces'}
    ]);
    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <View style={styles.progressContainer}>
                    <ProgressCircle
                        percent={55}
                        radius={150}
                        borderWidth={15}
                        color="#FE7422"
                        shadowColor="rgba(46, 180, 153, 1)"
                        bgColor="white"
                    >
                        <View style={{alignItems: "center"}}>
                            <MaterialCommunityIcon name="water" size="100" color="#FE7422"/>
                            <Text style={{ fontSize: 25,textAlign: "center", marginTop: 10, fontWeight: "600", color: "#FE7422"}}>{'30%'} of a Gallon!</Text>
                        </View>
                    </ProgressCircle>
                </View>
                <View style={styles.appButtonContainer}>
                    <View style={{alignItems: "center", backgroundColor: "#FE7422", borderTopRightRadius: 4, borderTopLeftRadius: 4, padding: 10}}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: "bold"}}>Enter Water</Text> 
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
      progressContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: "50%",
      }
});
export default WaterTrackerScreen;