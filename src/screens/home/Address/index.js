import React from "react";
import ScreenOne from './ScreenOne.js';
import ScreenTwo from './ScreenTwo.js';
import ScreenThree from './ScreenThree.js';
import StackOptions from '../../../constants/StackOptions'
import AddressIndexContext from './addressContext'
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = "@ScreenOne";

const AddressIndex = ({ route, navigation }) => {
    console.log(route.params)

    return (
        <AddressIndexContext.Provider value={{ params: route.params }}>
            <Stack.Navigator
                initialRouteName={INITIAL_ROUTE_NAME}
                screenOptions={StackOptions}
            >
                <Stack.Screen name="@ScreenOne" component={ScreenOne} />
                <Stack.Screen name="@ScreenTwo" component={ScreenTwo} />
                <Stack.Screen name="@ScreenThree" component={ScreenThree} />

            </Stack.Navigator>
        </AddressIndexContext.Provider>
    )
}

export default AddressIndex;