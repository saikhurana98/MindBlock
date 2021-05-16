import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Next = ({ label, onPress, fill, disabled }) => {
    return (
        <TouchableOpacity
            onPress={() => (!disabled ? onPress ? onPress() : {} : {})}
            style={styles.container}
        >
            <View style={styles(fill, disabled).TextView}>
                <Text style={styles(fill, disabled).text}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = (fill, disabled) => StyleSheet.create({
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
        borderColor: disabled ? "#B5BBC9" : '#347AF0',
        width: '80%',
        padding: 5,
        backgroundColor: fill ? disabled ? "#F2F2F2" : "#347AF0" : 'white',
        height: 60,
        width: 200
    },
    text: {
        color: fill ? disabled ? "#B5BBC9" : "#FFFFFF" : "#347AF0",
        marginRight: 10,
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 19
    },
});

export default Next;
