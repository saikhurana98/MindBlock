import React from "react";
import { View, Image, SafeAreaView, Text } from "react-native";
import { Buttons, Header } from "_components";
import ScanImage from '_assets/scanImage.svg'
import styles from "./styles";



const ScreenTwo = ({ navigation }) => {
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
