import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ToastAndroid } from "react-native";

const ModuleButton = ({ label, timeReqdInMins, onPress, isComplete, percentage }) => {
    // isComplete = isComplete === "100"
    return (
        <TouchableOpacity
            onPress={() => (isComplete !== "0" ? onPress ? onPress() : {} : ToastAndroid.show("Module Locked !", ToastAndroid.SHORT))}
            style={styles(isComplete).container}
        >
            {isComplete === "100" ?
                <Image style={styles(isComplete).circle} source={require("_assets/check-circle.png")} />
                : <View style={styles(isComplete).circle} />
            }
            <Text style={styles(isComplete).text}>{label}</Text>
            <Text style={styles(isComplete).time}>{timeReqdInMins} Mins</Text>
            <Text style={styles(isComplete).percentage}>{isComplete}%</Text>

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
    percentage: {
        color: isComplete === "0" ? "#DF5060" : isComplete === "100" ? "#75BF72" : "#347AF0",
        alignSelf: 'flex-end',
        bottom: 60,
        right: 15,
    },
});

export default ModuleButton;
