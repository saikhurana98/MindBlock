import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet, Button } from "react-native";
import Colors from "../../constants/Colors";

const ModuleButton = ({ label, onPress, fill }) => {
    return (
        <TouchableOpacity
            onPress={() => (onPress ? onPress() : {})}
            style={styles.container}
        >
            <View style={styles(fill).TextView}>
                <View style={styles(fill).circle} />
                <Text style={styles(fill).text}>Module Name</Text>
                <Text style={styles(fill).time}>3 Mins</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = (fill) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextView: {
        alignItems: 'center',
        borderRadius: 50,
        width: '80%',
        padding: 5,
        backgroundColor: fill ? "#EDF1F9" : 'white',
        height: 60,
        width: 300,
        right: 40,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    text: {
        color: fill ? "#0D1F3C60" : "#347AF0",
        marginRight: 100,
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 15,
        bottom: 20,
    },
    time: {
        color: fill ? "#485068" : "#347AF0",
        marginRight: 140,
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 15,
        bottom: 15,
    },
    circle: {
        top: 20,
        right:120, 
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        borderWidth: 1,
        borderColor: "#0D1F3C60"
    },
});

export default ModuleButton;
