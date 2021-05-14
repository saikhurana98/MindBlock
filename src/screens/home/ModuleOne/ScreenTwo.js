import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Buttons, Lists, Header } from "_components";
import { Card } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import PrivacyImage from '_assets/privacyImage.svg'
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
                    Well if there is no central body then how does the  sytem works?
                    More importantly can you trust the system?
                </Text>
            </View>

            <View style={styles.privacyImage}>
                <PrivacyImage />
            </View>

            <Card
                containerStyle={styles.addressCard}
                wrapperStyle={{ padding: 8 }}
            >
                <Text style={styles.cardText}>
                    This is where we get into the beauty of bitcoing,
                    blockchain and the world of cryptocurrencies.
                </Text>
                <Text></Text>
                <Text style={styles.cardText}>
                    To get a better idea of what it is,
                    let’s watch a video that explain everything in simple language
                </Text>
            </Card>

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
