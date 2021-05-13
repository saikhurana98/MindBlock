import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, Dimensions, Text, TouchableOpacity, Alert } from "react-native";
import { Separators, Buttons, Lists, Header } from "_components";
import AnimatedLoader from 'react-native-animated-loader';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Clipboard from '@react-native-community/clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "../ModuleStyles";

// for bitcoin: 
import '_shim';
const bitcoin = require("bitcoinjs-lib");
const TESTNET = bitcoin.networks.testnet;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').width;

const ITEM_WIDTH = Math.round(windowWidth * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}
const AddressActivity = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [addressLoaded, setAddressLoaded] = useState(false);
    const [seckey, setSeckey] = useState("")
    const [userAddress, setAddress] = useState("")

    useEffect(() => {
        handleButtonPress();
    }, []);

    const renderAddressComponent = () => {
        return (
            <View>
                <AddressCard />
                <View style={styles.addressNextButton}>
                    <Buttons.Next fill={true} label={"Woohoo!"} onPress={() => navigation.navigate("@ScreenThree")} />
                </View>
            </View>
        )
    }

    const copyAddressToClipboard = () => {
        Clipboard.setString(userAddress);
    };

    const copySeckeyToClipboard = () => {
        Clipboard.setString(seckey);
    };

    const handleButtonPress = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setAddressLoaded(true);
            fetch("https://api.blockcypher.com/v1/bcy/test/addrs",
                {
                    method: "POST"
                })
                .then(function (response) {
                    return response.json();
                }).then(function (finalRes) {
                    console.log(finalRes)
                    setSeckey(finalRes.private);
                    setAddress(finalRes.address);
                    AsyncStorage.setItem('@privateKey', finalRes.private);
                    AsyncStorage.setItem('@address', finalRes.address);
                    AsyncStorage.setItem('@publicKey', finalRes.public)
                    Alert.alert("We've saved your address! You should note it down as well")
                });
            // let localKeyPair = bitcoin.ECPair.makeRandom({ network: TESTNET });
            // let { address } = bitcoin.payments.p2pkh({
            //     pubkey: localKeyPair.publicKey,
            //     network: TESTNET,
            // });
            // setSeckey(localKeyPair.privateKey.toString('hex'));
            // setAddress(address);
            // try {
            //     AsyncStorage.setItem('@privateKey', seckey);
            //     AsyncStorage.setItem('@address', address);
            //     AsyncStorage.setItem('@publicKey', localKeyPair.publicKey.toString('hex'))
            //     Alert.alert("We've saved your address! You should note it down as well")
            // } catch (e) {
            //     console.log("Error in saving to local storage: ", e);
            // }
            // console.log("pk: ", address);
        }, 3000);
    }

    const AddressCard = () => {
        return (
            <Card containerStyle={styles.addressCard}>
                <Text style={styles.addressCardHeading} >Your Secret Key: </Text>
                <View style={styles.addressCardContentContainer}>
                    <Text style={styles.addressCardContent}>{seckey}</Text>
                    <TouchableOpacity
                        style={styles.copyButton}
                        onPress={() => copySeckeyToClipboard()}>
                        <Image source={require("_assets/copyIcon.png")} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.addressCardHeading} >Your Address: </Text>
                <View style={styles.addressCardContentContainer}>
                    <Text style={styles.addressCardContent}>{userAddress}</Text>
                    <TouchableOpacity
                        style={styles.copyButton}
                        onPress={() => copyAddressToClipboard()}
                    >
                        <Image source={require("_assets/copyIcon.png")} />
                    </TouchableOpacity>
                </View>

            </Card>
        )
    }
    return (
        <>
            <View style={styles.addressImage}>
                <AnimatedLoader
                    visible={visible}
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={styles.lottie}
                    speed={1}
                />
            </View>
            {!addressLoaded ? null : renderAddressComponent()}
        </>
    )
}

export default AddressActivity;