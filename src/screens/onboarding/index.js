import React, { useRef } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native'
import PagerView from 'react-native-pager-view';
import Page from './page';

const OnboardingScreen = ({ navigation }) => {
    const pagerRef = useRef(null);

    const handlePageChange = pageNumber => {
        if (pageNumber == 3) {
            navigation.navigate("@mainModule")
        }
            pagerRef.current.setPage(pageNumber);
    };

    return (
        <View style={{ flex: 1 }}>
            <PagerView style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
                <View key="0">
                    <Page
                        currentPage={0}
                        backgroundColor="#F2F2F2"
                        iconName="sun"
                        title="Walkthrough Heading"
                        imgSrc={require("_assets/walk1.png")}
                        nextLabel="Next"
                        nextButtonPress={() => {
                            handlePageChange(1);
                        }}
                    />
                </View>
                <View key="1">
                    <Page
                        currentPage={1}
                        backgroundColor="#F2F2F2"
                        iconName="sun"
                        title="Walkthrough Heading"
                        imgSrc={require("_assets/walk1.png")}
                        nextLabel="Next"
                        nextButtonPress={() => {
                            handlePageChange(2);
                        }}
                    />
                </View>
                <View key="2">
                    <Page
                        currentPage={2}
                        backgroundColor="#F2F2F2"
                        title="Walkthrough Heading"
                        imgSrc={require("_assets/walk1.png")}
                        nextLabel="Let's Get Started"
                        nextButtonPress={() => {
                            handlePageChange(3);
                        }}
                        fill={true}
                    />
                </View>
            </PagerView>

        </View>
    )
};

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
});


export default OnboardingScreen;