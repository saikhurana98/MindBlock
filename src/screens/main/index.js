import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home'
import Transactions from '../transactions'
import MakeTxn from '../makeTransaction'
import { Buttons } from '../../components'

const Tab = createBottomTabNavigator();

const Main = ({ navigation, route }) => {

    return (
        <Tab.Navigator initialRouteName="Learning"
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
            }}
        // initialParams={{ moduleValues: route.params.moduleValues }}
        >

            <Tab.Screen name="Transactions" component={Transactions}
                options={{
                    showIcon: true,
                    tabBarIcon: () => {
                        return (
                            <Image source={require("_assets/txnIcon.png")} />
                        )
                    }
                }}
            />

            <Tab.Screen name="Deposit" component={MakeTxn}
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
                initialParams={{ fd: "Hello" }}
                options={{
                    showIcon: true,
                    tabBarIcon: () => {
                        return (
                            <Image source={require("_assets/learningIcon.png")} />
                        )
                    }
                }}

            />

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