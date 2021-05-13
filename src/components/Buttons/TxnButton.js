import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const ModuleButton = ({ amount, onPress, type, status, date }) => {
    return (
        <TouchableOpacity
            onPress={onPress ?() =>  onPress() : {}}
            style={styles(type).container}
        >
            {type === "Sent" ?
                <Image style={styles(type).circle} source={require("_assets/withdrawIcon.png")} />
                : type === "Deposited" ?
                    <Image style={styles(type).circle} source={require("_assets/depositIcon.png")} />
                    : <View style={styles(type).circle} />
            }
            <Text style={styles(type).text}>{amount} BTC </Text>
            <Text style={styles(type).time}>{status}</Text>
            <Text style={styles(type).percentage}>{type}</Text>
            <Text style={styles(type).date}>{date}</Text>

        </TouchableOpacity>
    );
};

const styles = (isComplete) => StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 30,
        padding: 5,
        backgroundColor: "#EDF1F9",
        height: 60,
        width: 340,
        right: 30,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    text: {
        color: isComplete === "0" ? "#0D1F3C60" : "#0D1F3C",
        marginRight: 180,
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 15,
        bottom: 20,
    },
    time: {
        color: "#485068",
        marginRight: 180,
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 15,
        bottom: 15,
    },
    circle: {
        top: 15,
        right: 150,
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        borderWidth: 1,
        borderColor: "#0D1F3C60"
    },
    percentage: {
        color: "#DF5060",
        alignSelf: 'flex-end',
        bottom: 60,
        right: 15,
    },
    date: {
        color: "#485068",
        alignSelf: 'flex-end',
        bottom: 55,
        right: 15,
    }
});

export default ModuleButton;
