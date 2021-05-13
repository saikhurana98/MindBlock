import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Separators, Buttons, Lists, Header } from "_components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddressIndexContext from './addressContext'
import BeaconContext from '../../../constants/contextAPI'
import styles from "../ModuleStyles";

const AddressActivity = ({ route, navigation }) => {
    const { refresher } = React.useContext(BeaconContext);
    const { moduleName, nextModule } = React.useContext(AddressIndexContext).params;
    console.log("ROUTE ADDR: ", moduleName, nextModule)
    useEffect(() => {
        const faucetMoney = async () => {
            const value = await AsyncStorage.getItem('@address')
            console.log(value)
            /* The code below is to recieve money from the bcy faucet: */
            var data = { "address": value, "amount": 500000 }
            fetch('https://api.blockcypher.com/v1/bcy/test/faucet?token=02a7199e41fd432ea722e0561762a98e', {
                method: "POST",
                body: JSON.stringify(data)
            }).then(function (response) {
                console.log(response);
                return response.json();
            }).then(function (tmptx) { console.log(tmptx) })
                .catch((err) => {
                    console.log("Error recieving money", err);
                })
        }
        faucetMoney();

    }, []);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Well Done!</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Congratulations on successfully completeing Milestone 1! </Text>
            </View>
            <View style={styles.rewardContainer}>
                <Text style={styles.rewardHeading}>
                    You get:
                </Text>
                <Text style={styles.rewardAmount}>
                    0.005 Bitcoins!
                </Text>
            </View>
            <View style={styles.rewardImage}>
                <Image source={require("_assets/faucetIcon.png")} />
            </View>
            <View style={styles.rewardNextButton}>
                <Buttons.Next fill={true} label={"Collect Reward"} onPress={() => {
                    navigation.navigate("@home");
                    AsyncStorage.setItem(moduleName, "100");
                    AsyncStorage.setItem(nextModule, "1");
                    refresher();
                }} />
            </View>
        </SafeAreaView>
    )
}

export default AddressActivity;