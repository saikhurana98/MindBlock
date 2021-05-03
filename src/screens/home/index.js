import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from './HomeScreen';
import ModuleInfo from './ModuleInfo';
import ModuleAddress from './AddressGenActivity';

import StackOptions from '../../constants/StackOptions'
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "@home";

const HomeIndex = () => {
    return (
        <Stack.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            screenOptions={StackOptions}
        >
            <Stack.Screen name="@home" component={HomeScreen} />
            <Stack.Screen name="@moduleInfo" component={ModuleInfo} />
            <Stack.Screen name="@moduleAddress" component={ModuleAddress} />

        </Stack.Navigator>
    )
}

export default HomeIndex;