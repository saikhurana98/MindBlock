import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const ModuleButton = ({ label, onPress, fill }) => {
    return (
        <TouchableOpacity
            onPress={() => (onPress ? onPress() : {})}
            style={styles.container}
        >
            <View style={styles(fill).TextView}>
                <Text style={styles(fill).text}>{label}</Text>
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
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#347AF0',
        width: '80%',
        padding: 5,
        backgroundColor: fill ? "#347AF0" : 'white',
        height: 60,
        width: 200
    },
    text: {
        color: fill ? "#FFFFFF" : "#347AF0",
        marginRight: 10,
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 19
    },
});

export default ModuleButton;
