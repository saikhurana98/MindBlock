import React from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import StackOptions from '../../constants/StackOptions'
import { createStackNavigator } from "@react-navigation/stack";
import AllTxns from './allTxns'
import TxnDetails from './txnDetails'

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "@allTxns";

const { height } = Dimensions.get("window");

const Transactions = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            screenOptions={StackOptions}
        >
            <Stack.Screen name="@allTxns" component={AllTxns} />
            <Stack.Screen name="@txnDetails" component={TxnDetails} />



        </Stack.Navigator>

    )
};

export default Transactions;