import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Separators, Buttons, Lists, Header } from "_components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./ModuleStyles";

const AddressActivity = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Well Done!</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Congratulations on successfully making another transaction! </Text>
            </View>
            <View style={styles.rewardContainer}>
                <Text style={styles.rewardHeading}>
                    You're all set
                </Text>
            </View>
            <View style={styles.rewardImage}>
                <Image source={require("_assets/faucetIcon.png")} />
            </View>
            <View style={styles.rewardNextButton}>
                <Buttons.Next fill={true} label={"Home"} onPress={() => navigation.navigate("@home")} />
            </View>
        </SafeAreaView>
    )
}

export default AddressActivity;