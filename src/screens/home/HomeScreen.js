import React, { useState } from "react";
import { Image, Alert, RefreshControl, View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions, FlatList } from "react-native";
import { Button, Overlay } from 'react-native-elements';
import { DrawerActions } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Separators, Buttons, Lists, Header } from "_components";
import styles from './styles';
import Colors from "../../constants/Colors";
import helpers from "../../helpers";
import services from "../../mock/services.json";

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

    return (
        <View style={styles.pageContainer}>
            <Header.Default
                openDrawer={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
            <View style={styles.topContainer} >
                <View style={styles.balanceContainer}>
                    <View>
                        <Text style={styles.currentAmountValeuText}>{accountBalance / satoshiToB}฿</Text>
                        <Text style={styles.currentAmountLabelText}>Wallet Balance</Text>
                        <Text style={styles.addressText}>{address}</Text>
                    </View>
                    {/* <Buttons.Default label="See More" icon="" onPress={() => { navigation.navigate("@details", { accountDetails: accountDetails }) }} /> */}
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
                                        {index!=3 ? <Buttons.ModuleButton key={index} fill={true} onPress={() => navigation.navigate('@moduleInfo')}/>
                                        : <Buttons.ModuleActivityButton key={index} fill={true} onPress={() => navigation.navigate('@moduleAddress')}/> }
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

        </View>

    );
};


export default Home;
