//General imports
import React, {useState} from "react";
import { Button, TextInput, Alert, SafeAreaView, Dimensions, Image, ImageBackground, Text, View, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';

//Component Imports
// *Insert Page imports here*
const AddWater = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'L', value: 'liters'},
        {label: 'fl. oz.', value: 'fluid ounces'}
    ]);
    return (
        <View>
        <View flexdirection = 'row' justifyContent = 'space-between'>
                <TextInput flexdirection = 'row' style ={style.input}  placeholder="Amount" maxLength={7}/>
                <DropDownPicker flexdirection = 'row' style ={style.dropdown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
        </View>
        </View>
    );
};

const WaterTrackerScreen = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
  };
    return (
        <View>
            <Text style={style.waterTracker}>(WaterAmount)/1 Gallon</Text>
            <Text style ={style.title}>Water Tracking</Text>
            <View style={style.button}>
                <Button 
                title="+"
                onPress={toggleModal}
                color= '#FFFFFF'
                />
            </View>
            <Modal
                isVisible={isModalVisible}>
                <View>
                <AddWater />
                <View style={style.button}>
                <Button 
                    title="OK"
                    onPress={toggleModal}
                    color= '#FFFFFF'
                />
                </View>
                </View>
            </Modal>
        </View>
    );
}
const style = StyleSheet.create({
    waterTracker: {
        fontSize:24,
        fontWeight: 'bold',
        position: "absolute",
        top: 10,
        right: 10,
    },
    button: {
        textAlign: 'center',
        width: "40%", 
        justifyContent: 'flex-end',
        fontSize:30,
        height: 40,
        marginTop: 20,
        marginBottom:50,
        marginHorizontal: "30%",
        backgroundColor: "#FE7422",
    },
    dropdown: {
        textAlign: 'center',
        width: "30%", 
        fontSize:30,
        height: 40,
        marginBottom:50,
        marginLeft: "25%",
        marginRight: "25%",
    },
    title: {
        fontSize: 30,
        marginTop: 50,
        textAlign: 'center',
    },
    input:{
        fontSize: 25,
        marginTop: 50,
        marginLeft: 25,
        width: '30%',
        backgroundColor: 'white',
    },
});
export default WaterTrackerScreen;