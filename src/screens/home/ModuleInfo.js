import React, { useState } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import Carousel from 'react-native-snap-carousel';
import styles from "./ModuleStyles";

const windowWidth = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(windowWidth * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}

const ModuleInfo = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const renderSlides = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Carousel
                data={DATA}
                layout={"default"}
                renderItem={renderSlides}
                sliderWidth={windowWidth}
                itemWidth={300}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Text style={styles.counter}
            >
                {index}
            </Text>
        </SafeAreaView>
    )
};

export default ModuleInfo;
