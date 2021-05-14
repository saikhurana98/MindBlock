import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Buttons, Lists, Header } from "_components";
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WonderingImage from '_assets/wonderingImage.svg'
import BeaconContext from '../../../constants/contextAPI';
import styles from "./styles";

const windowWidth = Dimensions.get('window').width;

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}

const ModuleInfo = ({ route, navigation }) => {
    const { refresher } = React.useContext(BeaconContext);
    const { moduleName, nextModule } = route.params;
    const [index, setIndex] = useState(0);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>What is a Bitcoin?</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>A short description of what the topics that this module covers. cannto be longer than this much. </Text>
            </View>
            <WonderingImage style={styles.wonderingImage} />
            <View style={styles.moduleInfoNextButton}>
                <Buttons.Next fill={true} label={"Done"}
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

export default ModuleInfo;
