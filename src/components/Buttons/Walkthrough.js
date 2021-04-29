import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Next = ({ label, onPress }) => {
    return (
        <TouchableOpacity
            onPress={() => (onPress ? onPress() : {})}
            style={styles.container}
        >
            <View style={styles.TextView}>
                <Text style={ styles.text}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: 'white',
        height: 60,
        width: 200
    },
    text: {
        color: Colors.blackText,
        marginRight: 10,
        fontFamily: 'TitilliumWeb-SemiBold',
        color: '#347AF0',
        fontSize: 19
    },
});

export default Next;
