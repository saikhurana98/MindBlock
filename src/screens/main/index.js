import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home'
import Transactions from '../transactions'

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator initialRouteName="Transactions">
            <Tab.Screen name="Transactions" component={Transactions} />
            <Tab.Screen name="Learning" component={Home} />
        </Tab.Navigator>
    );
}

export default Main;