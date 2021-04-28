import React from 'react';
import { View, Text, Image, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { Dots, Dot } from '../../components/DotProgressBar'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = ({ backgroundColor, iconName, title, imgSrc, numPages, isLight, selected }) => {
    return (
        <View
            style={{
                // justifyContent: 'center',
                flex: 1,
                flexDirection: "column",
                alignItems: 'center',
                backgroundColor
            }}
        >
            <View style={{ marginTop: 16, flex: 2 }}>
                <Image source={imgSrc} height={200} />
            </View>
            <View style={styles.imgContainer}>
                <ImageBackground style={styles.image} source={require("_assets/walk-bottom.png")}>
                    <View style={styles.progressBar}>
                        <Dots Dot={Dot} numPages={10} selected={selected} isLight={true} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Hello</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    imgContainer: {
        flex: 4,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        // resizeMode: "cover",
        justifyContent: "center",
        width: windowWidth
    },
    progressBar: {
        // marginBottom: 500,
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        position: 'relative'
    },

    textContainer: {
        flex: 5, 
        marginBottom: 300,
        alignSelf: 'center'
    }, 

    text: {
        color: "white",
        fontSize: 42,
        alignSelf: "flex-start",
        // fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0",
        fontFamily: "TitilliumWeb-Black",
        // marginBottom: 500
    }
});

export default Page;