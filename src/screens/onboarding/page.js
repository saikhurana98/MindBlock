import React from 'react';
import { View, Text, Image, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { Dots, Dot } from '../../components/DotProgressBar'
import { Buttons } from '../../components'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = ({
    navigation, backgroundColor,
    iconName, title, content,
    imgSrc, numPages,
    isLight, currentPage,
    nextLabel, nextButtonPress, fill }) => {
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
            <View style={styles.cardContainer}>
                <View style={styles.image} source={require("_assets/walk-bottom.png")}>
                    <View style={styles.progressBar}>
                        <Dots Dot={Dot} numPages={3} currentPage={currentPage} isLight={true} />
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>{title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {content}
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Buttons.Next
                            label={nextLabel}
                            onPress={nextButtonPress}
                            fill={fill}
                        />
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    cardContainer: {
        flex: 4,
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 50
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

    headingContainer: {
        flex: 5,
        marginBottom: 300,
        alignSelf: 'center',
        width: 0.8 * windowWidth,
        // left: 20
    },

    textContainer: {
        alignSelf: 'center',
        // justifyContent: 'center',
        position: 'absolute',
        width: 0.8 * windowWidth
        // marginTop: 200,
    },

    text: {
        color: "black",
        fontSize: 15,
        textAlign: "center",
        fontFamily: "TitilliumWeb-Regular",
    },

    heading: {
        color: "black",
        fontSize: 45,
        textAlign: "center",
        fontFamily: "TitilliumWeb-Bold",
    },
    buttonContainer: { position: "absolute", bottom: 100, alignSelf: 'center' },
});

export default Page;