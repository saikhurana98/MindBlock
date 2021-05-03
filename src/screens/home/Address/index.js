import React from "react";
import ScreenOne from './ScreenOne.js';
import ScreenTwo from './ScreenTwo.js';
import ScreenThree from './ScreenThree.js';
import StackOptions from '../../../constants/StackOptions'
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = "@ScreenOne";

const HomeIndex = () => {
    return (
        <Stack.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            screenOptions={StackOptions}
        >
            <Stack.Screen name="@ScreenOne" component={ScreenOne} />
            <Stack.Screen name="@ScreenTwo" component={ScreenTwo} />
            <Stack.Screen name="@ScreenThree" component={ScreenThree} />

        </Stack.Navigator>
    )
}

export default HomeIndex;