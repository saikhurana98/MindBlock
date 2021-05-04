import React from 'react';
import { View, Text, Image, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { Buttons } from '../../components'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AllTxns = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.greyContainer}>
                <Text style={styles.mainHeading}> All Transaction </Text>
            </View>
            <View style={styles.cardContainer}>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
    },

    mainHeading: {
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 26,
        alignSelf: 'center',
        top: 20
    },
    greyContainer: {
        marginTop: 16,
        flex: 2
    },

    cardContainer: {
        flex: 13,
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 50,
        width: windowWidth
    },


});

export default AllTxns;