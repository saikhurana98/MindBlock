import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
    View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager,
} from 'react-native';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
import styles from "./styles";


export default function TestFile() {
    return (
        <View style={styles.container}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </View>
    );
}


function Item() {
    const [open, setopen] = useState(false);
    const onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setopen(!open);
    };
    return (
        <SafeAreaView style={styles.balanceContainer}>
            <TouchableOpacity style={[styles.item, !open && { height: 60 }]} onPress={onPress} activeOpacity={1}>
                <Text style={styles.sectionHeading}>Header</Text>
                {open && (
                    <View>
                        <Text> SOME DATA</Text>
                        <Text> SOME DATA</Text>
                        <Text> SOME DATA</Text>
                        <Text> SOME DATA</Text>
                        <Text> SOME DATA</Text>
                        <Text> SOME DATA</Text>
                    </View>
                )}
            </TouchableOpacity>
        </SafeAreaView>
    );
}
