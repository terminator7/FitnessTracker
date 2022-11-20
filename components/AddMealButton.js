import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function AddMealButton() {
     const navigation = useNavigation();
     return (
             <Button onPress = {() => navigation.push('AddMealPage')} title="Press Me"/>
    
     );
}
export default AddMealButton;