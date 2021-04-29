import React from 'react';
// import Onboarding from 'react-native-onboarding-swiper';
import { Image, View, StyleSheet, Text } from 'react-native'
import PagerView from 'react-native-pager-view';
import Page from './page';

const OnboardingScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <PagerView style={{ flex: 1 }}>
                <View key="1">
                    <Page
                        backgroundColor="#F2F2F2"
                        iconName="sun"
                        title="Welcome to the BTC App"
                        imgSrc={require("_assets/walk1.png")}
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