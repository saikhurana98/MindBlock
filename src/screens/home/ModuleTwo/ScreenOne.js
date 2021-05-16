import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { Buttons, Header } from "_components";
import GrowImage from '_assets/growImage.svg'
import styles from "./styles";


const ScreenOne = ({ navigation }) => {
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
                        navigation.navigate("@ScreenTwo")
                    }} />
            </View>

        </SafeAreaView >
    )
};

export default ScreenOne;
