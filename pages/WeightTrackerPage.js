//General imports
import React from "react";
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';

//Component Imports
// *Insert Page imports here*
import Buttons from '../components/Buttons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    fittotext: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#f27329",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 7,
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "white",
        color: "white",
        padding: 10,
      },
});

const WeightTrackerScreen = (props) => {
    const [text, onChangeText] = React.useState("Add Here");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.appButtonContainer}>
                <Button
                    style={{fontSize: 20, color: 'green'}}
                    color="white"
                    // onPress={() => this._handlePress()}
                    title="Enter Weight"
                >
                </Button>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <View style={styles.appButtonContainer}>
                <Button
                    style={{fontSize: 20, color: 'Blue'}}
                    color="white"
                    // onPress={() => this._handlePress()}
                    title="Enter Units"
                >

                </Button>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeText}
                    value={text}
                />
            </View>
        </SafeAreaView>
    );
}

export default WeightTrackerScreen;