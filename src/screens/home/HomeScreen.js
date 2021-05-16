import React, { useState, useEffect } from "react";
import { Image, Alert, RefreshControl, View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions, FlatList } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Separators, Buttons, Lists, Header } from "_components";
import DATA from '../../constants/ModuleData';
import styles from './styles';
import helpers from "../../helpers";
import GraphSVG from "_assets/graphSVG.svg"
import { exp } from "react-native-reanimated";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const satoshiToB = 100000000 //100,000,000
// const buttonAdd = {
//     id: "1",
//     fullName: "template",
//     avatar: "",
// };

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


var NAVIGATION;

const Home = ({ route, navigation }) => {
    NAVIGATION = navigation;

    const [accountBalance, setAccountBalance] = useState(0.0);
    const [accountDetails, setAccountDetails] = useState(null);
    // const [friends, setFriends] = useState(helpers.genFriendsList());
    const [address, setAddress] = useState('');

    // For overlay: 
    // const [visible, setVisible] = useState(false);
    // const toggleOverlay = () => {
    //     setVisible(!visible);
    // };

    // For refresh: 
    const [manualRefresh, setManualRefresh] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    useEffect(() => {
        setManualRefresh(true);
    }, [route.params && route.params.pleaseRefresh])
    // if (route.params && route.params.pleaseRefresh) {
    //     setManualRefresh(true)
    // }

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
                console.log("TXN: ", address);
                setAccountBalance(data.final_balance);
                setAccountDetails(data);
            })
            .catch((err) => {
                Alert.alert("An error occurred: ", err)
                console.log("Error in getting details: ", err)
            });
    }

    useEffect(() => {
        if (!address) { return; }

        // API call to get the address details
        getDetails();
    }, [refreshing]);

    useEffect(() => {
        getData();
    }, [address]);

    return (
        <ScrollView
            style={styles.scrollContainer}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
            <View style={{ flex: 1 }}>
                <Header.Default
                    openDrawer={() => navigation.dispatch(DrawerActions.openDrawer())}
                />
            </View>

            <View style={styles.topContainer} >
                <View style={styles.balanceContainer}>
                    <View>
                        <Text style={styles.currentAmountValeuText}>{accountBalance / satoshiToB}฿</Text>
                        <Text style={styles.currentAmountLabelText}>Wallet Balance</Text>
                        {/* <Text style={styles.addressText}>{address}</Text> */}
                        <GraphSVG style={{ top: 60 }} />
                        {/* <Image style={{ top: 60 }} source={require("_assets/btcGraph.png")} /> */}
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.subHeadingContainer}>
                    <Text style={styles.subHeading}>Learning Modules</Text>
                </View>
                <View style={styles.modulesContainer}>
                    {
                        DATA.map((item, index) => {
                            return (
                                <View key={index} style={{ paddingBottom: 20 }}>
                                    {item}
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.textContainer} />
                {/* <Separators.Default label="Send Money" /> */}
                {/* <Lists.FriendsList list={[buttonAdd, ...friends]} onPress={toggleOverlay} /> */}
                <Text style={{ top: 200 }}></Text>
            </View>

        </ScrollView>


    );
};


export default Home;
export { NAVIGATION };
