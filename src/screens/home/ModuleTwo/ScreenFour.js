import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, Dimensions, Text, Alert } from "react-native";
import { Buttons, Lists, Header } from "_components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BeaconContext from '../../../constants/contextAPI';
import MoudleOneIndexContext from './moduleOneContext'
import FingerprintImage from '_assets/fingerprintImage.svg'

import styles from "./styles";
const windowWidth = Dimensions.get("window").width

const ScreenThree = ({ route, navigation }) => {
    const { refresher } = React.useContext(BeaconContext);
    const { moduleName, nextModule } = React.useContext(MoudleOneIndexContext).params;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />

            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Fingerprint</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    For the sake of convience and because this is a education application,
                    We will bind your secret key to your fingerprint.
                    So anytime you use your fingerprint while using the application,
                    It means that your secret key is being used.
                </Text>
                <Text></Text>
                <Text></Text>

            </View>
            <View style={styles.privacyImage}>
                <FingerprintImage />
            </View>
            
            <View style={styles.disclaimerTextContainer}>
                <Text style={styles.disclaimerText}>
                    IMPORTANT NOTE: It’s not a safe practice
                    to share your secret key with any person or application.
                </Text>
            </View>

            <View style={styles.moduleInfoNextButton}>
                <Buttons.Next fill={true} label={"Finished"}
                    onPress={() => {
                        AsyncStorage.setItem(moduleName, "100");
                        AsyncStorage.setItem(nextModule, "1");
                        refresher();
                        navigation.navigate("@home")
                    }} />
            </View>

        </SafeAreaView >
    )
};

export default ScreenThree;
