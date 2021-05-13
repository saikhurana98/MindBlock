import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Screens from "./screens";
import Main from "./navigation/HomeDrawer";
import StackOptions from "./constants/StackOptions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BeaconContext from './constants/contextAPI'

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "@onboarding";

export default function App() {
    const NUM_MODULES = 7;

    const [refreshPercentages, setRefreshPercentages] = useState(false)

    const [module1, setModule1] = useState("false");
    const [module2, setModule2] = useState("false");
    const [module3, setModule3] = useState("false");
    const [module4, setModule4] = useState("false");
    const [module5, setModule5] = useState("false");
    const [module6, setModule6] = useState("false");
    const [module7, setModule7] = useState("false");

    const moduleSetters = [setModule1, setModule2, setModule3, setModule4, setModule5, setModule6, setModule7];
    const moduleNames = ["@Module1", "@Module2", "@Module3", "@Module4", "@Module5", "@Module6", "@Module7"];
    // var moduleValues = [module1, module2, module3, module4, module5, module6, module7]

    const onRefresh = React.useCallback(() => {
        console.log("I WAS FCALLEDS")
        setRefreshPercentages(true);
        wait(2000).then(() => setRefreshPercentages(false));
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const initializeStatuses = async () => {
        const value = await AsyncStorage.getItem('ModulesInit');
        console.log("here", value)
        if (!value) {
            AsyncStorage.setItem('@testAddress', "BvSQEFWSZt1pFvBckCAArzYxN99GViERNK");
            for (let i = 0; i < NUM_MODULES; ++i) {
                AsyncStorage.setItem(moduleNames[i], "false");
            }
            AsyncStorage.setItem('ModulesInit', "true");
        } else {
            var tempStorage;
            for (let i = 0; i < NUM_MODULES; ++i) {
                tempStorage = await AsyncStorage.getItem(moduleNames[i]);
                console.log(moduleNames[i], ": ", tempStorage)
                moduleSetters[i](tempStorage);
            }
        }
    }

    React.useEffect(() => {
        initializeStatuses();

    }, [refreshPercentages])

    /* The code below is to recieve money from the bcy faucet: */

    // var data = { "address": "C5ZquCLMdUHDuzpwwzJcAmujgNgmTAwQau", "amount": 1000000 }
    // fetch('https://api.blockcypher.com/v1/bcy/test/faucet?token=02a7199e41fd432ea722e0561762a98e', {
    //     method: "POST",
    //     body: JSON.stringify(data)
    // }).then(function (response) {
    //     console.log(response);
    //     return response.json();
    // }).then(function (tmptx) { console.log(tmptx) });

    return (
        <React.Fragment>
            <StatusBar style="dark" />
            <BeaconContext.Provider value={
                {
                    module1: module1, module2: module2, module3: module3, module4: module4, module5: module5, module6: module6, module7: module7,
                    refresher: onRefresh
                }} >
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={INITIAL_ROUTE_NAME}
                        screenOptions={StackOptions}
                    >
                        <Stack.Screen name="@onboarding" component={Screens.Onboarding} />
                        <Stack.Screen name="@welcome" component={Screens.Welcome} />
                        <Stack.Screen name="@address" component={Screens.Address} />
                        <Stack.Screen name="@details" component={Screens.Details} />
                        <Stack.Screen name="@makeTransaction" component={Screens.MakeTransaction} />
                        <Stack.Screen name="@mainModule" component={Screens.MainModule} />
                        <Stack.Screen name="@main" component={Main} />
                    </Stack.Navigator>
                </NavigationContainer>
            </BeaconContext.Provider >
        </React.Fragment >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
