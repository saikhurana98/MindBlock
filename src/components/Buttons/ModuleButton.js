import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Button } from "react-native";
import Colors from "../../constants/Colors";

const ModuleButton = ({ label, timeReqdInMins, onPress, isComplete }) => {
    return (
        <TouchableOpacity
            onPress={() => (onPress ? onPress() : {})}
            style={styles(isComplete).container}
        >
            {isComplete ?
                <Image style={styles(isComplete).circle} source={require("_assets/check-circle.png")} />
                : <View style={styles(isComplete).circle} />
            }
            <Text style={styles(isComplete).text}>{label}</Text>
            <Text style={styles(isComplete).time}>{timeReqdInMins} Mins</Text>
        </TouchableOpacity>
    );
};

const styles = (fill) => StyleSheet.create({
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
        color: !fill ? "#0D1F3C60" : "#0D1F3C",
        marginRight: 140,
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
});

export default ModuleButton;
