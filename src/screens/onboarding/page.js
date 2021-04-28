import React from 'react';
import { View, Text, Image, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { Dots, Dot } from '../../components/DotProgressBar'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = ({ backgroundColor, iconName, title, imgSrc, numPages, isLight, selected }) => {
    return (
        <View
            style={{
                flex: 1,
                // justifyContent: 'center',
                alignItems: 'center',
                backgroundColor
            }}
        >
            <View style={{ marginTop: 16 }}>
                
                <Image source={imgSrc} height={200} />
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
                    {title}
                </Text>
            </View>
            <ImageBackground style={styles.image} source={require("_assets/walk-bottom.png")}>
                <View style={styles.progressBar}>
                    <Dots Dot={Dot} numPages={10} selected={selected} isLight={true}/>  
                </View>
                {/* <Text style={styles.text}>Hello</Text> */}
            </ImageBackground>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        // resizeMode: "cover",
        justifyContent: "center",
        width: windowWidth 
    },
    progressBar: {
        marginBottom: 500,
        alignItems: 'center'
    },

    text: {
        color: "white",
        fontSize: 42,
        // fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0",
        fontFamily: "TitilliumWeb-Black",
        // marginBottom: 500
    }
});

export default Page;