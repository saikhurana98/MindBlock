import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buttons } from '../../components'
const satoshiToB = 100000000 //100,000,000
const windowWidth = Dimensions.get('window').width;
import WithdrawSVG from "_assets/withdrawn.svg";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const TxnDetails = ({ navigation }) => {
    return (

        <ScrollView
            contentContainerStyle={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <View style={styles.greyContainer}>
                    <Text style={styles.mainHeading}> All Transaction </Text>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.svgImg}>
                        <WithdrawSVG fill="white"/>
                    </View>
                    <View style={styles.txnContainer}>
                        
                    </View>
                </View>
            </View >
        </ScrollView >

    );
};

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
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
        flex: 13,
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 50,
        width: windowWidth
    },
    txnContainer: {
        flex: 1,
        alignItems: 'center',
        top: 30,
        left: 30,
        // padding: 10
    }, 
    svgImg: {
        alignSelf: 'center',
        bottom: 28,
    }


});

export default TxnDetails;