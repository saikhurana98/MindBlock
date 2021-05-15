import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, Dimensions, Text, Alert } from "react-native";
import YouTube from 'react-native-youtube';
import { Buttons, Lists, Header } from "_components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BeaconContext from '../../../constants/contextAPI';
import MoudleOneIndexContext from './moduleOneContext'
import styles from "./styles";
const windowWidth = Dimensions.get("window").width

const ScreenOne = ({ route, navigation }) => {
    const { refresher } = React.useContext(BeaconContext);
    const { moduleName, nextModule } = React.useContext(MoudleOneIndexContext).params;
    const [playing, setPlaying] = useState(false);
    const onStateChange = React.useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("You may proceed now!");
        }
    }, []);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />

            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Introduction to Bitcoin</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Here’s a small video we made to explain what
                    bitcoin is and gives a small idea of what makes it different
                </Text>
            </View>

            <View style={styles.wonderingImage}>
                <YouTube
                    apiKey="AIzaSyBoKd6BObc94P1fR5HsE7Y07cLhknmWff"
                    videoId="gg9htNm13kM" // The YouTube video ID
                    play={playing} // control playback of video with true/false
                    fullscreen={true} // control whether the video should play in fullscreen or inline
                    loop={false}// control whether the video should loop when ended
                    resumePlayAndroid={false}
                    // onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => onStateChange(e)}
                    // onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => Alert.alert("An error ocurred while playing!")}
                    style={{ width: windowWidth * 0.9, height: 300 }}
                />


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

export default ScreenOne;
