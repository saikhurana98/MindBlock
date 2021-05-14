import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home'
import Transactions from '../transactions'
import MakeTxn from '../makeTransaction'
import { Buttons } from '../../components'
import LearningIconSVG from "_assets/learningIconSVG.svg"
import TxnsIcnonSVG from "_assets/txnsIcnonSVG.svg"

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
                },
                labelPosition: 'beside-icon'
            }}
        >

            <Tab.Screen name="Transactions" component={Transactions}
                options={{
                    showIcon: true,
                    tabBarIcon: () => {
                        return (
                            <TxnsIcnonSVG />
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
                options={{
                    showIcon: true,
                    tabBarIcon: () => {
                        return (
                            <LearningIconSVG />
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
        elevation: 30,
        height: 50,
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