import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ToastAndroid } from "react-native";
import Colors from "../../constants/Colors";

const ModuleActivityButton = ({ label, label2, onPress, isComplete, fill }) => {
    return (
        <TouchableOpacity
            onPress={() => (isComplete !== "100" && isComplete !== "0" ? onPress ? onPress() : {} : ToastAndroid.show("Module Locked !", ToastAndroid.SHORT))}
            style={styles(fill).container}
        >
            { isComplete === "100" ?
                <Image style={styles(isComplete).circle} source={require("_assets/check-circle.png")} />
                : <View style={styles(isComplete).circle} />
            }
            <Text style={styles(isComplete).text}>{label}</Text>
            <Text style={styles(isComplete).subText}>{label2}</Text>
            <Text style={styles(isComplete).status}>{isComplete === "100" ? "Completed" : "Not Completed"}</Text>
            <Text style={styles(isComplete).percentage}>{isComplete}%</Text>
        </TouchableOpacity >
    );
};

const styles = (isComplete) => StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 30,
        padding: 5,
        backgroundColor: "#EDF1F9",
        height: 140,
        width: 340,
        right: 30,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    text: {
        color: isComplete === "0" ? "#0D1F3C60" : "#0D1F3C",
        marginLeft: 45,
        alignSelf: 'flex-start',
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 24,
        bottom: 20,
    },
    subText: {
        color: "#0D1F3C60",
        marginRight: 155,
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 15,
        bottom: 20,
    },
    status: {
        color: isComplete === "0" ? "#0D1F3C60" : "#0D1F3C",
        marginLeft: 45,
        alignSelf: 'flex-start',
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 20,
        top: 15,
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
        bottom: 90,
        right: 15,
    },
});

export default ModuleActivityButton;
