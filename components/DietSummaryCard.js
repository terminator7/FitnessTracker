
import { View, Text, StyleSheet} from "react-native"
const DietSummaryCard = ({totalProtein, totalCarbs, totalFats, totalCalories}) => {

    return (
        <View style={styles.container}>
            <View style={{alignItems: "center", backgroundColor: "#FE7422", borderTopRightRadius: 4, borderTopLeftRadius: 4, padding: 10}}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: "bold"}}>Macro Stats</Text> 
                    </View>
            <View style={styles.contentContainer}>
                <View style={styles.dataContainer}>
                    <Text style={styles.dataHeading}>Total Protein</Text>
                    <Text style={{paddingTop: 10, textAlign: "center", fontSize: 20}}>{totalProtein}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.dataHeading}>Total Carbs</Text>
                    <Text style={{paddingTop: 10, textAlign: "center", fontSize: 20}}>{totalCarbs}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.dataHeading}>Total Fats</Text>
                    <Text style={{paddingTop: 10, textAlign: "center", fontSize: 20}}>{totalFats}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.dataHeading}>Total Calories</Text>
                    <Text style={{paddingTop: 10, textAlign: "center", fontSize: 20}}>{totalCalories}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: '100%',
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        borderRadius: 4,
    },
    contentContainer: {
        paddingVertical: 20,
        flexWrap: "wrap",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dataHeading: {
        fontWeight: "500",
        color: "#FE7422",
        fontSize: 20,
        textAlign: "center",
    },
    dataContainer: {
        marginBottom: 20,
        flex: 1
    }
})
export default DietSummaryCard