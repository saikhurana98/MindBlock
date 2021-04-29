import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Screens from "./screens";
import Main from "./navigation/HomeDrawer";
import StackOptions from "./constants/StackOptions";
const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "@onboarding";

export default function App() {

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
        </React.Fragment>
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
