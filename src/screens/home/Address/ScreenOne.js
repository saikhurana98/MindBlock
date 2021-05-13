import React, { useState } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import ScreenTwo from './ScreenTwo'
import { Separators, Buttons, Lists, Header } from "_components";
import styles from "../ModuleStyles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').width;

const ITEM_WIDTH = Math.round(windowWidth * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}
const AddressActivity = ({ route, navigation }) => {
    // console.log("ROUTE ADDR: ", navigation.dangerouslyGetParent().route)
    const [addgenClicked, setAddgenClicked] = useState(false);
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Address Generation</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>A short description of what the topics that this module covers. cannto be longer than this much. </Text>
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