import React, { useState, useEffect } from "react";
import { Image, Alert, RefreshControl, View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions, FlatList } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Separators, Buttons, Lists, Header } from "_components";
import styles from './styles';
import helpers from "../../helpers";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const satoshiToB = 100000000 //100,000,000
const buttonAdd = {
    id: "1",
    fullName: "template",
    avatar: "",
};

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const Home = ({ navigation }) => {
    const [accountBalance, setAccountBalance] = useState(0.0);
    const [accountDetails, setAccountDetails] = useState(null);
    const [friends, setFriends] = useState(helpers.genFriendsList());
    const [address, setAddress] = useState('');


    // For overlay: 
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    // For refresh: 
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@address')
            if (value !== null) {
                console.log("val: ", value)
                setAddress(value);
            } else {
                console.log("E<P: ", value)
            }
        } catch (e) {
            // Alert.alert("We could not find your address!", "\n Error: ", e);
            console.log(e);
        }
    }

    // API call to get the address details
    const getDetails = () => {
        fetch(`https://api.blockcypher.com/v1/bcy/test/addrs/${address}`)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                // console.log("TXN: ", address);
                setAccountBalance(data.final_balance);
                setAccountDetails(data);
            })
            .catch((err) => {
                // Alert.alert("An error occurred: ", err)
                console.log("Error in getting details: ", err)
            });
    }

    useEffect(() => {
        if (!address) { return; }

        // API call to get the address details
        getDetails();
    }, [address, refreshing]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
            <View style={styles.pageContainer}>
                <Header.Default
                    openDrawer={() => navigation.dispatch(DrawerActions.openDrawer())}
                />

                <View style={styles.topContainer} >
                    <View style={styles.balanceContainer}>
                        <View>
                            <Text style={styles.currentAmountValeuText}>{accountBalance / satoshiToB}฿</Text>
                            <Text style={styles.currentAmountLabelText}>Wallet Balance</Text>
                            {/* <Text style={styles.addressText}>{address}</Text> */}
                            <Image style={{ top: 60 }} source={require("_assets/btcGraph.png")} />
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <ScrollView >
                        <View style={styles.subHeadingContainer}>
                            <Text style={styles.subHeading}>Learning Modules</Text>
                        </View>
                        <View style={styles.modulesContainer}>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                                    return (
                                        <View key={index} style={{ padding: 10 }}>
                                            {index != 3 ?
                                                index === 5 ? <Buttons.ModuleActivityButton
                                                    key={index} fill={true} label={"Transaction"}
                                                    label2={"Milestone 2"}
                                                    isComplete={true}
                                                    onPress={() => navigation.navigate('@moduleTxn')} />

                                                    : <Buttons.ModuleButton
                                                        key={index} fill={true}
                                                        label={"Module Name"}
                                                        timeReqdInMins={"3"}
                                                        isComplete={true}
                                                        onPress={() => navigation.navigate('@moduleInfo')} />

                                                : <Buttons.ModuleActivityButton
                                                    key={index} fill={true}
                                                    label={"Address Generation"}
                                                    label2={"Milestone 1"}
                                                    isComplete={false}
                                                    onPress={() => navigation.navigate('@moduleAddress')} />}
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <View style={styles.textContainer} />
                        <Separators.Default label="Send Money" />
                        <Lists.FriendsList list={[buttonAdd, ...friends]} onPress={toggleOverlay} />
                    </ScrollView>
                </View>
            </View >
        </ScrollView>


    );
};


export default Home;
