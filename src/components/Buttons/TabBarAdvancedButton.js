import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { TabBg } from '../SVG/TabBg';


const TabBarAdvancedButton = ({
    bgColor,
    ...props
}) => (
    <View
        style={styles.container}
        pointerEvents="box-none"
    >
        <TabBg
            color={bgColor}
            style={styles.background}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}
        >
            <Image source={require('_assets/plusIcon.png')} style={styles.buttonIcon}/>
            {/* <Icon
                name="rocket"
                style={styles.buttonIcon}
            /> */}
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 75,
        alignItems: 'center'
    },
    background: {
        position: 'absolute',
        top: 0,
    },
    button: {
        top: -22.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 27,
        backgroundColor: '#E94F37',
    },
    buttonIcon: {
        fontSize: 16,
        color: '#F6F7EB'
    }
});
export default TabBarAdvancedButton;