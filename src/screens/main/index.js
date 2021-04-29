import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../home'
import Transactions from '../transactions'
import { Buttons } from '../../components'
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
                    paddingBottom: 30,
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
            tabBar={(props) => (
                <View style={styles.navigatorContainer}>
                    <BottomTabBar
                        {...props}
                    />
                </View>
            )}
            tabBarOptions={{
                showIcon: true,
                style: styles.navigator,
                tabStyle: {
                    backgroundColor: "#EDF1F9"
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
                    tabBarButton: (props) => (
                        <Buttons.TabBarAdvancedButton
                            bgColor={"#EDF1F9"}
                            {...props}
                        />
                    )
                }}
            />

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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigatorContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    navigator: {
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 30
    },
    xFillLine: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 34
    }
});

export default Main;