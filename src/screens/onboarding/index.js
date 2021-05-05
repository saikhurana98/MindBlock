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
                        title="Welcome"
                        content={"Welcome to payBTC. \n This app will help you get started with the world of blockchain and cryptocurrencies. "}
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
                        title="What is this app about?"
                        content={"This application is a learning app. All the topics are arranged in different modules. You need to complete a module to move onto your next one. Some modules are just informative while others are interactive. So have fun learning!"}
                        imgSrc={require("_assets/scene2-walk.png")}
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
                        title="What the app isn't about?"
                        content={"This application includes features that can let you interact with a blockchain network. Under no circumstances do we promote the use of this application as a wallet. With that important disclaimer out of the way. let’s get started!"}
                        imgSrc={require("_assets/scene3-walk.png")}
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