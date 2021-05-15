import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buttons } from '../../components'
const satoshiToB = 100000000 //100,000,000
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import WithdrawSVG from "_assets/withdrawn.svg";
import DepositedSVG from "_assets/depositedImage.svg";

import Separator from '_assets/separatorTxn.svg'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const TxnDetails = ({ route, navigation }) => {
    console.log(route)
    const { type,
        inputs,
        outputs,
        date,
        fees,
        confirmations,
        blockHash,
        amount } = route.params
    let inputAddDone = [];
    var fullDateTime = Date(date);
    var tokens = fullDateTime.split(' ');
    var newDate = tokens[1] + " " + tokens[2] + ", " + tokens[3]
    var time = tokens[4] + " " + tokens[5]
    console.log(time)
    return (

        <View style={{ flex: 1 }}>
            <ScrollView
                scrollEnabled={true}
                style={{
                    flex: 1
                }}
                contentContainerStyle={styles.mainContainer}
            >
                <View style={styles.greyContainer}>
                    <Text style={styles.mainHeading}> All Transaction </Text>
                </View>
                <View
                    style={styles.cardContainer}
                >
                    <View style={styles.svgImg}>
                        {type === "Deposited" ?
                            <DepositedSVG fill="white" />
                            :
                            <WithdrawSVG fill="white" />}
                    </View>
                    <Text style={styles.cardHeading}>{type}</Text>
                    <View style={styles.dateTimeHeading}>
                        <Text style={styles.dateHeading}>Date</Text>
                        <Text style={styles.timeHeading}>Time</Text>
                    </View>
                    <View style={styles.dateTimeHeading}>
                        <Text style={styles.dateValue}>{newDate}</Text>
                        <Text style={styles.timeValue}>{time}</Text>
                    </View>
                    <Separator width={windowWidth} style={{ top: 40 }} />
                    <Text style={styles.amountHeading}>Total Amount</Text>
                    <Text style={styles.amountValue}>{amount} BTC</Text>
                    <Text style={styles.feesHeading}>Fees</Text>
                    <Text style={styles.amountValue}>{fees} BTC</Text>
                    <Text style={styles.feesHeading}>Confirmations</Text>
                    <Text style={styles.amountValue}>{confirmations}</Text>
                    <Separator width={windowWidth} style={{ top: 100 }} />
                    <Text style={styles.hashHeading}>Block Hash</Text>
                    <View style={{ width: windowWidth * 0.8 }}>
                        <Text style={styles.hashValue}>{blockHash}</Text>
                    </View>
                    <Text style={styles.hashHeading}>Inputs</Text>
                    <View style={styles.txnContainer}>
                        {
                            inputs.length ? inputs.map((item, index) => {
                                return item.addresses.length ? item.addresses.map((address, key) => {
                                    return (
                                        <View key={key} style={{ padding: 3, top: 20, left: 20 }}>
                                            <Text>{index + 1}. {address}</Text>
                                        </View>
                                    )
                                    // }
                                }) : ""
                            }) : ""
                        }
                        <Text style={styles.outputHeading}>Outputs</Text>
                        <View style={styles.outputContainer}>
                            {
                                outputs.length ? outputs.map((item, index) => {
                                    return item.addresses.length ? item.addresses.map((address, key) => {
                                        // if (inputAddDone.includes(address)) {
                                        // } else {
                                        //     inputAddDone.push(address)
                                        return (
                                            <View key={key} style={{ padding: 3, top: 20, left: 20 }}>
                                                <Text>{index + 1}. {address}</Text>
                                            </View>
                                        )
                                        // }
                                    }) : ""
                                }) : ""
                            }
                        </View>
                    </View>
                    <Text style={{ marginTop: 500 }}></Text>
                </View>


            </ScrollView >
        </View >

    );
};

const styles = StyleSheet.create({

    mainContainer: {
        // flex: 1,
        flexDirection: "column",
        // alignItems: 'center',
        flexGrow: 1
    },

    mainHeading: {
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 26,
        alignSelf: 'center',
        top: 20
    },
    greyContainer: {
        marginTop: 16,
        flex: 2
    },

    cardContainer: {
        // flex: 13,
        top: 50,
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 50,
        width: windowWidth
    },
    txnContainer: {
        flex: 1,
        // alignItems: 'center',
        top: 90,
        // left: 30,
        // padding: 10
    },
    svgImg: {
        alignSelf: 'center',
        bottom: 28,
    },
    cardHeading: {
        alignSelf: 'center',
        color: "#DF5060",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 19,
        bottom: 20,
    },
    dateTimeHeading: {
        // width: windowWidth,
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // flex: 1,
    },
    dateHeading: {
        left: 20,
        color: "#B5BBC9",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 15,
    },
    timeHeading: {
        // alignSelf: "flex-end",
        left: windowWidth / 1.4,
        color: "#B5BBC9",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 15,
    },
    dateValue: {
        left: 20,
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-Regular",
        fontSize: 19,
    },

    timeValue: {
        left: windowWidth / 3.9,
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-Regular",
        fontSize: 19,
    },
    amountHeading: {
        left: 20,
        top: 60,
        color: "#B5BBC9",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 15,
    },
    amountValue: {
        left: 20,
        top: 60,
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-Regular",
        fontSize: 19,
    },
    feesHeading: {
        left: 20,
        top: 70,
        paddingBottom: 10,
        color: "#B5BBC9",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 15,
    },
    hashHeading: {
        left: 20,
        top: 120,
        paddingBottom: 10,
        color: "#B5BBC9",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 15,
    },
    hashValue: {
        left: 20,
        top: 110,
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-Regular",
        fontSize: 19,
    },
    outputHeading: {
        left: 20,
        top: 50,
        paddingBottom: 10,
        color: "#B5BBC9",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 15,
    },
    outputContainer: {
        flex: 1,
        top: 20,
    }


});

export default TxnDetails;