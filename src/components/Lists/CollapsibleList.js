import React, { useState } from 'react';
import {
    SafeAreaView, View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager,
} from 'react-native';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
import styles from "./styles";

function Item({ item, header }) {
    const [open, setopen] = useState(false);
    const onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setopen(!open);
    };

    return (
        <SafeAreaView style={styles.balanceContainer}>
            <TouchableOpacity style={[styles.item, !open && { height: 60 }]} onPress={onPress} activeOpacity={1}>
                <Text style={styles.sectionHeading}>{header}</Text>
                {open && (
                    <View>
                        <Text> BLOCK HEIGHT: {item.block_height}</Text>
                        <Text> CONFIRMATIONS: {item.confirmations}</Text>
                        <Text> SPENT? {item.spent.toString()}</Text>
                        <Text> Value: {item.value}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Item;
