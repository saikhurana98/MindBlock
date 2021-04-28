import React, { useState, useEffect } from "react";
import { Alert, View, Image, SafeAreaView, Dimensions, Text } from "react-native";
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

const Address = ({ navigation }) => {
    const [seckey, setseckey] = useState("")
    const [address, setaddress] = useState("")
    /* The code below is used in generating a p2pkh address locally: */

    // const keyPair = bitcoin.ECPair.makeRandom({ network: TESTNET });
    // const { address } = bitcoin.payments.p2pkh({
    //     pubkey: keyPair.publicKey,
    //     network: TESTNET,
    // });
    // const seckey = keyPair.privateKey.toString('hex');

    useEffect(() => {
        fetch("https://api.blockcypher.com/v1/bcy/test/addrs",
            {
                method: "POST"
            })
            .then(function (response) {
                // console.log(response);
                return response.json();
            }).then(function (finalRes) { 
                console.log(finalRes) 
                setseckey(finalRes.private);
                setaddress(finalRes.address);
                AsyncStorage.setItem('@privateKey', finalRes.private);
                AsyncStorage.setItem('@address', finalRes.address);
                AsyncStorage.setItem('@publicKey', finalRes.public)
                Alert.alert("We've saved your address! You should note it down as well")
            });
        // save the keys in local storage of the phone: 
        // try {
        //     AsyncStorage.setItem('@privateKey', seckey);
        //     AsyncStorage.setItem('@address', address);
        //     AsyncStorage.setItem('@publicKey', keyPair.publicKey.toString('hex'))
        //     Alert.alert("We've saved your address! You should note it down as well")
        // } catch (e) {
        //     console.log("Error in saving to local storage: ", e);
        // }
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
                    title='Start!'
                    onPress={() => navigation.navigate("@main")} />
            </Card>

        </SafeAreaView>
    );
};

export default Address;
