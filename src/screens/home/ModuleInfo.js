import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Buttons, Lists, Header } from "_components";
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BeaconContext from '../../constants/contextAPI';
import styles from "./ModuleStyles";

const windowWidth = Dimensions.get('window').width;

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}

const ModuleInfo = ({ route, navigation }) => {
    const { refresher } = React.useContext(BeaconContext);
    const { moduleName, nextModule } = route.params;
    const [index, setIndex] = useState(0);
    const carouselRef = useRef(null);
    const renderSlides = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.carouselHeading}>
                    <Text style={styles.carouselHeadingText}>Section Heading</Text>
                </View>
                <View style={styles.carouselTextContainer}>
                    <Text style={styles.carouselText}>
                        All the information will be in these cards which can be swiped right and left to move forward and back. They will be broken down in snippets as thats how people retain the most. mixture of videos, pictures and text. preferably one picture and some text like like card because people remember pictures more easily and by relating it to the accompanying text, retention will be even more.
                </Text>
                </View>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Module Name</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>A short description of what the topics that this module covers. cannto be longer than this much. </Text>
            </View>
            <View style={styles.carouselContainer}>
                <Carousel
                    ref={carouselRef}
                    data={DATA}
                    layout={"default"}
                    renderItem={renderSlides}
                    sliderWidth={windowWidth}
                    itemWidth={295}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={false}
                />
            </View>
            <View style={styles.moduleInfoNextButton}>
                {index === 9 ?
                    <Buttons.Next fill={true} label={"Done"} onPress={() => {
                        AsyncStorage.setItem(moduleName, "100");
                        AsyncStorage.setItem(nextModule, "1");
                        refresher();
                        navigation.navigate("@home")
                    }} />
                    : <Buttons.Next fill={true} label={"Next"} onPress={() => carouselRef.current.snapToNext()} />}
            </View>
        </SafeAreaView >
    )
};

export default ModuleInfo;
