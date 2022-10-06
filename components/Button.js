import react from "react";
import { StyleSheet, Text, View } from 'react-native';

const ButtonStyle = StyleSheet.create({
    container_left: {
        flex: 1,
        padding: 24,
        width: '100%'
        
    },
    container_right: {
        flex: 2,
        padding: 24,
        width: '50%',
        position: 'absolute',
        right: 5,
    },
    square_left: {
        color: "#20232a",
        marginTop: 16,
        borderWidth: 4,
    },
})


const Button = (props) => {
    return (
        <View style={ButtonStyle.container_left}>
            <Text style={ButtonStyle.square_left}>===Insert Weight Here===</Text>
        </View>
    );
}

export default Button;