import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Buttons, Lists, Header } from "_components";
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WonderingImage from '_assets/wonderingImage.svg'
import BeaconContext from '../../../constants/contextAPI';
import MoudleOneIndexContext from './moduleOneContext'
import styles from "./styles";

const windowWidth = Dimensions.get('window').width;

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}

const ScreenOne = ({ route, navigation }) => {
    const { refresher } = React.useContext(BeaconContext);
    // const { moduleName, nextModule } = React.useContext(MoudleOneIndexContext).params;
    const [index, setIndex] = useState(0);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />

            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>What is a Bitcoin?</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Bitcoin is a cryptocurrency which is created, maintained and used by the people.
                    In other words, the trust is not left with a single financial institution like a bank!
                </Text>
            </View>

            <View style={styles.wonderingImage}>
                <WonderingImage />
            </View>

            <View style={styles.moduleInfoNextButton}>
                <Buttons.Next fill={true} label={"Next"}
                    onPress={() => {
                        // AsyncStorage.setItem(moduleName, "100");
                        // AsyncStorage.setItem(nextModule, "1");
                        // refresher();
                        navigation.navigate("@ScreenTwo")
                    }} />
            </View>

        </SafeAreaView >
    )
};

export default ScreenOne;
