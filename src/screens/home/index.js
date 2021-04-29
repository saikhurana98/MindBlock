import React, { useState } from "react";
import { Image, Alert, RefreshControl, View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Button, Overlay } from 'react-native-elements';
import { DrawerActions } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Separators, Buttons, Lists, Header } from "_components";
import Colors from "../../constants/Colors";
import helpers from "../../helpers";
import services from "../../mock/services.json";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const satoshiToB = 100000000 //100,000,000
const buttonAdd = {
    id: "1",
    fullName: "template",
    avatar: "",
};

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const Home = ({ navigation }) => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.topContainer} >
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.image}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Hello</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Molestie adipiscing est eu volutpat scelerisque senectus sit.
                            Tempus, lobortis tellus nulla eget pellentesque egestas.
                    </Text>
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    pageContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: "#347AF0"
    },

    topContainer: {
        // marginTop: 16, 
        flex: 2,
        backgroundColor: "#347AF0"
    },

    cardContainer: {
        flex: 4,
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 50
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: windowWidth
    },
    progressBar: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        position: 'relative'
    },

    headingContainer: {
        flex: 5,
        marginBottom: 300,
        alignSelf: 'center',
        width: 0.8 * windowWidth,
        left: 20
    },

    textContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 0.8 * windowWidth
    },

    text: {
        color: "black",
        fontSize: 15,
        textAlign: "center",
        fontFamily: "TitilliumWeb-Regular",
    },

    heading: {
        color: "black",
        fontSize: 45,
        alignSelf: "flex-start",
        textAlign: "center",
        fontFamily: "TitilliumWeb-Bold",
    },
    buttonContainer: { position: "absolute", bottom: 100, alignSelf: 'center' },
});

export default Home;
