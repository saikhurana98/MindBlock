import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet, Button } from "react-native";
import Colors from "../../constants/Colors";

const ModuleActivityButton = ({ label, onPress, fill }) => {
    return (
        <TouchableOpacity
            onPress={() => (onPress ? onPress() : {})}
            style={styles(fill).container}
        >
            {/* <View style={styles(fill).TextView}> */}
                <View style={styles(fill).circle} />
                <Text style={styles(fill).text}>Address Generation</Text>
                <Text style={styles(fill).subText}>Milestone 1</Text>
                <Text style={styles(fill).status}>Not Completed</Text>
            {/* </View> */}
        </TouchableOpacity>
    );
};

const styles = (fill) => StyleSheet.create({
    container: {
        // width: 200,
        // height: 2000,
        alignItems: 'center',
        borderRadius: 50,
        padding: 5,
        backgroundColor: fill ? "#EDF1F9" : 'white',
        height: 140,
        width: 360,
        right: 40,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    text: {
        color: fill ? "#0D1F3C60" : "#347AF0",
        marginRight: 25,
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 24,
        bottom: 20,
    },
    subText: {
        color: fill ? "#0D1F3C60" : "#347AF0",
        marginRight: 155,
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 15,
        bottom: 20,
    },
    status: {
        color: fill ? "#0D1F3C60" : "#0D1F3C",
        marginRight: 110,
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
});

export default ModuleActivityButton;
