import React from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import Colors from "../../constants/Colors";
import { Buttons } from "../../components";
import styles from "./styles";
const { height } = Dimensions.get("window");

// for bitcoin: 
import '_shim';
const bitcoin = require("bitcoinjs-lib");

const Welcome = ({ navigation }) => {
    const keyPair = bitcoin.ECPair.makeRandom();
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    console.log(address);
    const addGen = async () => {
        let res = fetch("https://api.blockcypher.com/v1/btc/test3/addrs", {
            method: 'POST',
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log('Created Gist:', data.address);
        });
        console.log(res)
    }
    addGen();

    // .then((response) => {
    //     console.log(response);
    // })
    // .catch((err) => {
    //     console.log("Error in generating address: ", err)
    // })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/paybtc_logo.png")} />
            </View>
            <Card>
                <Card.Title>There you go!</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    Your Secret Key:
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Your Public Key:
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW' />
            </Card>

        </SafeAreaView>
    );
};

export default Welcome;
