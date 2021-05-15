import React from "react";
import ScreenOne from './ScreenOneTxn.js';
import ScreenTwo from './ScreenTwoTxn.js';
import ScreenThree from './ScreenThreeTxn.js';
import ScreenFour from './ScreenFourTxn.js';
import TxnContext from './txnContext';
import StackOptions from '../../../constants/StackOptions'
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const INITIAL_ROUTE_NAME = "@ScreenTwo";

const TxnIndex = ({ route }) => {
    console.log("TXN: ", route)
    return (
        <TxnContext.Provider value={{ params: route.params }}>
            <Stack.Navigator
                initialRouteName={INITIAL_ROUTE_NAME}
                screenOptions={StackOptions}
            >
                <Stack.Screen name="@ScreenOne" component={ScreenOne} />
                <Stack.Screen name="@ScreenTwo" component={ScreenTwo} />
                <Stack.Screen name="@ScreenThree" component={ScreenThree} />
                <Stack.Screen name="@ScreenFour" component={ScreenFour} />
            </Stack.Navigator>
        </TxnContext.Provider>
    )
}

export default TxnIndex;