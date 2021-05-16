import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { Buttons, Header } from "_components";
import MobileImage from '_assets/mobileImage.svg'
import styles from "./styles";

const ScreenThree = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />

            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>More on Secret Key</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    A Secret key is somethig well is kept a secret.
                    It’s also a random bits of string but this time, it’s the owners due diligence to keep it a secret.
                    It’s like an ATM pin, You NEED the secret key to make any bitcoin transaction.
                </Text>
                <Text></Text>
                <Text></Text>

            </View>

            <View style={styles.privacyImage}>
                <MobileImage />
            </View>

            <View style={styles.moduleInfoNextButton}>
                <Buttons.Next fill={true} label={"Next"}
                    onPress={() => {
                        navigation.navigate("@ScreenFour")
                    }} />
            </View>

        </SafeAreaView >
    )
};

export default ScreenThree;
