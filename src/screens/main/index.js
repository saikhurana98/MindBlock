import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../home'
import Transactions from '../transactions'
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const CustomTabButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                top: -40,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
            <View
                style={{
                    width: 80,
                    height: 80,
                    paddingBottom:30, 
                    borderRadius: 40,
                    backgroundColor: '#EDF1F9'
                }}>
                {children}
            </View>

        </TouchableOpacity>
    )
}

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
                    showIcon: true,
                    tabBarIcon: () => {
                        return (
                            <Icon name="money-check" size={30} color={"black"} />
                        )
                    }
                }} />

            <Tab.Screen name="Deposit" component={Transactions}
                options={{
                    showIcon: true,
                    tabBarIcon: () => {
                        return (
                            <Icon name="plus" size={30} color={"black"} />
                        )
                    },
                    tabBarButton: (props) => {
                        return (
                            <CustomTabButton {...props} />
                        )

                    }
                }} />

            <Tab.Screen name="Learning" component={Home}
                options={{
                    showIcon: true,
                    tabBarIcon: () => {
                        return (
                            <Icon name="book-reader" size={30} color={"black"} />
                        )
                    }
                }} />
        </Tab.Navigator>
    );
}

export default Main;