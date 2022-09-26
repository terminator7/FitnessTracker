import react from "react";
import { StyleSheet, Text, View } from 'react-native';

const AppHeaderStyle = StyleSheet.create({
    container: {
        padding: 5,
        height: 80,
        alignContent: "flex-end",
        backgroundColor: "#FE7422"
    },
    title: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 35
    },
})


const AppHeader = (props) => {
    return (
        <View style={AppHeaderStyle.container}>
            <Text style={AppHeaderStyle.title}>R2F Companion</Text>
        </View>
    );
}

export default AppHeader;