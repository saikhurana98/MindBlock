import React from "react";
import ScreenOne from './ScreenOne.js';
import ScreenTwo from './ScreenTwo.js';
import ScreenThree from './ScreenThree.js';
import ScreenFour from './ScreenFour.js';
import StackOptions from '../../../constants/StackOptions'
import MoudleOneIndexContext from './moduleOneContext'
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = "@ScreenOne";

const ModuleTwoIndex = ({ route, navigation }) => {

    return (
        <MoudleOneIndexContext.Provider value={{ params: route.params }}>
            <Stack.Navigator
                initialRouteName={INITIAL_ROUTE_NAME}
                screenOptions={StackOptions}
            >
                <Stack.Screen name="@ScreenOne" component={ScreenOne} />
                <Stack.Screen name="@ScreenTwo" component={ScreenTwo} />
                <Stack.Screen name="@ScreenThree" component={ScreenThree} />
                <Stack.Screen name="@ScreenFour" component={ScreenFour} />


            </Stack.Navigator>
        </MoudleOneIndexContext.Provider>
    )
}

export default ModuleTwoIndex;