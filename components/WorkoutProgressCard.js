
import { View, Text, StyleSheet} from "react-native"
const WorkoutProgressCard = ({workoutName, previous, mostRecent}) => {

    return (
        <View style={styles.container}>
            <View style={{alignItems: "center", backgroundColor: "#FE7422", borderTopRightRadius: 4, borderTopLeftRadius: 4, padding: 10}}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: "bold"}}>{workoutName}</Text> 
                    </View>
            <View style={styles.contentContainer}>
                <View style={styles.dataContainer}>
                    <Text style={styles.dataHeading}>Previous Stat</Text>
                    <Text style={{paddingTop: 10, textAlign: "center", fontSize: 20}}>{previous}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.dataHeading}>Latest Stat</Text>
                    <Text style={{paddingTop: 10, textAlign: "center", fontSize: 20, fontWeight: "bold", color: `${previous > mostRecent ? "red" : "#18991d"}`}}>{mostRecent}</Text>
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
        paddingHorizontal: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dataHeading: {
        fontWeight: "500",
        color: "#FE7422",
        fontSize: 20,
        textAlign: "center"
    }
})
export default WorkoutProgressCard