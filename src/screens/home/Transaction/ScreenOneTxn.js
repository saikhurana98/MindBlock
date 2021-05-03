import React, { useState } from "react";
import { View, Image, SafeAreaView, Dimensions, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Separators, Buttons, Lists, Header } from "_components";
import { Card } from 'react-native-elements'
import styles from "../ModuleStyles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').width;

const ITEM_WIDTH = Math.round(windowWidth * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);


const AddressActivity = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Transactions</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Which is not a genuine address? </Text>
            </View>
            <View style={styles.cardsContainerTxn}>
                <Card containerStyle={cardStyle(1).cardsContainerStyleTxn}>
                    <TouchableOpacity onPress={() => setIndex(1)}>
                        <Card.Image source={require('_assets/questionMark.png')} />
                        <Text> 1BvBMSEYstWe...</Text>
                    </TouchableOpacity>
                </Card>

                <Card containerStyle={cardStyle(2).cardsContainerStyleTxn}>
                    <TouchableOpacity onPress={() => setIndex(2)}>
                        <Card.Image source={require('_assets/questionMark.png')} />
                        <Text>3J98t1WpEZ73N...</Text>
                    </TouchableOpacity>
                </Card>

                <Card containerStyle={cardStyle(index).cardsContainerStyleTxn}>
                    <TouchableOpacity onPress={() => setIndex(3)}>
                        <Card.Image source={require('_assets/questionMark.png')} />
                        <Text>BvSQEFWSZt1pFv...</Text>
                    </TouchableOpacity>
                </Card>

                <Card containerStyle={cardStyle(4).cardsContainerStyleTxn}>
                    <TouchableOpacity onPress={() => setIndex(4)}>
                        <Card.Image source={require('_assets/questionMark.png')} />
                        <Text> bc1qar0srrr7xfk...</Text>
                    </TouchableOpacity>
                </Card>

            </View>
            {index === 3 ? <View style={cardStyle(false).addressNextButton}>
                <View>
                    <Buttons.Next fill={true} label={"Correct!"} onPress={() => navigation.navigate("@ScreenTwo")} />
                </View>
            </View> : null}

        </SafeAreaView>
    )
}

const cardStyle = (val) => StyleSheet.create({
    cardsContainerStyleTxn: {
        borderRadius: 16,
        padding: 10,
        backgroundColor: val === 3 ? 'green' : 'white',
        borderWidth: 0,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'black',
        marginTop: 50,
        elevation: 10,
        height: 190
    },

    addressNextButton: {
        alignSelf: 'center',
        top: 0.3 * windowHeight,
        flex: 2,
        // top: 200,
        // left: 200,
        // position: 'absolute'
        // bottom: 200,

    }
})

export default AddressActivity;