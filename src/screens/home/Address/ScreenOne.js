import React, { useState } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import ScreenTwo from './ScreenTwo'
import { Separators, Buttons, Lists, Header } from "_components";
import styles from "../ModuleStyles";


const AddressActivity = ({ route, navigation }) => {
    const [addgenClicked, setAddgenClicked] = useState(false);
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Address Generation</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Addresses are an integral part of the blockchain. In this module you'll generate on of your own. </Text>
            </View>
            {
                addgenClicked ?
                    <ScreenTwo navigation={navigation} />
                    :
                    <>
                        <View style={styles.addressImage}>
                            <Image source={require("_assets/addressImage.png")} />
                        </View>
                        <View style={styles.addressNextButton}>
                            <Buttons.Next fill={true} label={"Generate Address"} onPress={() => {
                                setAddgenClicked(true);
                            }} />
                        </View>
                    </>
            }


        </SafeAreaView>

    )
}

export default AddressActivity;