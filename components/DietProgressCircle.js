import {View, Text, StyleSheet} from "react-native"
import ProgressCircle from 'react-native-progress-circle-updated'


const DietProgressCircle = ({title, currentTotal, requiredTotal}) => {

    return (
        <View style={{alignItems: "center", marginBottom: 10, paddingHorizontal: 10}}>
            <ProgressCircle
                percent={Math.round((currentTotal/requiredTotal)*100)}
                radius={40}
                borderWidth={8}
                color="#FE7422"
                shadowColor="rgba(46, 180, 153, 1)"
                bgColor="white"
            >
                <View style={{alignItems: "center"}}>
                    <Text style={{ fontSize: 18,textAlign: "center", fontWeight: "600", color: "#FE7422"}}>{Math.round((currentTotal/requiredTotal)*100)}%</Text>
                </View>
            </ProgressCircle>
            <Text style={{textAlign: "center", marginTop: 5, color: "white", fontWeight: "bold", fontSize: 20}}>{title}</Text>
        </View>
    )
}

export default DietProgressCircle