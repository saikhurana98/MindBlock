import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../home'
import Transactions from '../transactions'

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator initialRouteName="Transactions"
            tabBarOptions={{
                style: {
                    backgroundColor: "#EDF1F9",
                    borderRadius: 100,
                    elevation: 3,
                }
            }}>
            <Tab.Screen name="Transactions" component={Transactions} 
            options={{
                tabBarIcon: () => {
                    <Icon name="money-check" size={30} color={"red"}/>
                }
            }}/>
            <Tab.Screen name="Learning" component={Home} />
        </Tab.Navigator>
    );
}

export default Main;