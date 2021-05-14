import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from './HomeScreen';
import ModuleInfo from './ModuleInfo';
import ModuleAddress from './Address';
import ModuleTxn from './Transaction';
import ModuleOne from './ModuleOne';
import ModuleTwo from './ModuleTwo';
import ModuleFour from './ModuleFour';



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

            <Stack.Screen name="@moduleOne" component={ModuleOne} />
            <Stack.Screen name="@moduleTwo" component={ModuleTwo} />
            <Stack.Screen name="@moduleAddress" component={ModuleAddress} />
            <Stack.Screen name="@moduleFour" component={ModuleFour} />
            <Stack.Screen name="@moduleTxn" component={ModuleTxn} />




        </Stack.Navigator>
    )
}

export default HomeIndex;