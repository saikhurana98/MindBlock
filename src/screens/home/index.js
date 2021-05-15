import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from './HomeScreen';
import ModuleInfo from './ModuleInfo';
import ModuleOne from './ModuleOne';
import ModuleTwo from './ModuleTwo';
import ModuleAddress from './Address';
import ModuleFour from './ModuleFour';
import ModuleTxn from './Transaction'
import ModuleSix from './ModuleSix';
import ModuleSeven from './ModuleSeven';





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
            <Stack.Screen name="@moduleSix" component={ModuleSix} />
            <Stack.Screen name="@moduleSeven" component={ModuleSeven} />






        </Stack.Navigator>
    )
}

export default HomeIndex;