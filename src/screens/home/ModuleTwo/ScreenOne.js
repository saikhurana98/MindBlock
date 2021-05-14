import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Buttons, Lists, Header } from "_components";
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GrowImage from '_assets/growImage.svg'
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
                <Text style={styles.headingText}>Bitcoin Address</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Like Traditional Banking, Bitcoin also has something very similar.
                    It’s like an email address except that it’s a string of random set of characters.
                </Text>
                <Text style={styles.descriptionText}>
                    The Important thing to note here is that a person can have multiple bitcoin address(s)
                    and having the address of a person reveals no extra information of the owner.
                    </Text>
            </View>

            <View style={styles.wonderingImage}>
                <GrowImage />
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
