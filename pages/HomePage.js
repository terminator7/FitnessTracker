import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Icon imports
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

//Page Imports
import WorkoutNavigator from './WorkoutNavigator';
import DietScreen from './DietPage';
import ProgressScreen from './ProgressPage';
import WaterTrackerScreen from './WaterTrackerPage';
import WeightTrackerScreen from './WeightTrackerPage'; 

//Navigation Labels
const workoutLabel = "Workouts";
const dietLabel = "Diet";
const progressLabel = "Progress";
const waterTrackerLabel = "Water"
const weightTrackerLabel = "Weight"

const Tab = createBottomTabNavigator();
const ICON_SIZE = 20;
const DEFAULT_ICON_COLOR = "#303030"
const FOCUSED_ICON_COLOR = "#FE7422"

//Other Imports
import AppHeader from '../components/AppHeader'
import DietStackNavigator from './DietPageNavigator';

const HomeScreen = ({navigation}) => {
    return (
        <Tab.Navigator
        initialRouteName={progressLabel}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === workoutLabel) {
                return <FontAwesomeIcon name="bicycle" size={size} color={color}/>;
            } else if (route.name === dietLabel) {
                return <MaterialCommunityIcon name="food-apple" size={size} color={color}/>;
            } else if (route.name === progressLabel) {
                return <EntypoIcon name="clipboard" size={size} color={color}/>;
            } else if (route.name === waterTrackerLabel) {
                return <MaterialCommunityIcon name="water" size={size} color={color}/>;
            } else if (route.name === weightTrackerLabel) {
                return <FontAwesome5Icon name="weight" size={size} color={color}/>;
            }
            },
            tabBarActiveTintColor: FOCUSED_ICON_COLOR,
            tabBarInactiveTintColor: DEFAULT_ICON_COLOR,
            header: () => <AppHeader />
        })}
        >
            <Tab.Screen name={workoutLabel} component={WorkoutNavigator} />
            <Tab.Screen name={dietLabel} component={DietStackNavigator} />
            <Tab.Screen name={progressLabel} component={ProgressScreen} />
            <Tab.Screen name={waterTrackerLabel} component={WaterTrackerScreen} />
            <Tab.Screen name={weightTrackerLabel} component={WeightTrackerScreen} />
        </Tab.Navigator>
    );
}

export default HomeScreen;