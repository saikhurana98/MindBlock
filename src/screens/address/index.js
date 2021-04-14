import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from "../../constants/Colors";
import { Buttons } from "../../components";
import styles from "./styles";
const { height } = Dimensions.get("window");

// for bitcoin: 
import '_shim';
const bitcoin = require("bitcoinjs-lib");
const TESTNET = bitcoin.networks.testnet;

const Welcome = ({ navigation }) => {
    const keyPair = bitcoin.ECPair.makeRandom({ network: TESTNET });
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    const seckey = keyPair.privateKey.toString('hex');
    // console.log("SK: ", keyPair.privateKey.toString('hex'));

    useEffect(() => {
        fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}`)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                setAddress(data.address);
                setSeckey(data.private);
                try {
                    AsyncStorage.setItem('@privateKey', data.private);
                    AsyncStorage.setItem('@address', data.address);
                } catch (e) {
                    console.log("Error in saving to local storage: ", e);
                }
                console.log('Addresses:', data);
            })
            .catch((err) => {
                console.log("Error in generating address: ", err)
            });

        // fetch("https://api.blockcypher.com/v1/btc/test3/addrs", {
        //     method: 'POST',
        // }).then(function (response) {
        //     return response.json();
        // }).then(function (data) {
        //     setAddress(data.address);
        //     setSeckey(data.private);
        //     try {
        //         AsyncStorage.setItem('@privateKey', data.private);
        //         AsyncStorage.setItem('@address', data.address);
        //     } catch (e) {
        //         console.log("Error in saving to local storage: ", e);
        //     }
        //     console.log('Addresses:', data);
        // })
        //     .catch((err) => {
        //         console.log("Error in generating address: ", err)
        //     });
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/paybtc_logo.png")} />
            </View>
            <Card>
                <Card.Title>There you go!</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    Your Secret Key: {seckey}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Your Address: {address}
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Start!' />
            </Card>

        </SafeAreaView>
    );
};

export default Welcome;
