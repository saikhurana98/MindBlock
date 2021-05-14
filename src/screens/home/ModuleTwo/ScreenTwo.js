import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Buttons, Lists, Header } from "_components";
import { Card } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScanImage from '_assets/scanImage.svg'
import BeaconContext from '../../../constants/contextAPI';
import styles from "./styles";

const windowWidth = Dimensions.get('window').width;

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}

const ScreenTwo = ({ route, navigation }) => {
    const { refresher } = React.useContext(BeaconContext);
    const [index, setIndex] = useState(0);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />

            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>No Central Body?</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Well if this is the case then how does anyone prove ownership
                    of an account because in traditional banking that is
                    the fundamental thing that is required to “encash” a cheqeue.
                </Text>
                <Text />
                <Text style={styles.descriptionText}>
                    Yep, Bitcoin world is no different here.
                    Similar to the way you sign documents to prove ownership.
                    Bitcoin wallets have something known as a secret key.
                </Text>
            </View>

            <View style={styles.privacyImage}>
                <ScanImage />
            </View>


            <View style={styles.moduleInfoNextButton}>
                <Buttons.Next fill={true} label={"Next"}
                    onPress={() => {
                        navigation.navigate("@ScreenThree")
                    }} />
            </View>

        </SafeAreaView >
    )
};

export default ScreenTwo;
