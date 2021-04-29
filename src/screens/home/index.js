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
                    <Buttons.Default label="See More" icon="" onPress={() => { navigation.navigate("@details", { accountDetails: accountDetails }) }} />
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.subHeadingContainer}>
                    <Text style={styles.subHeading}>Learning Modules</Text>
                </View>
                <View style={styles.modulesContainer}>
                    <FlatList
                        style={styles.listContainer}
                        data={[
                            { key: 'Devin' },
                            { key: 'Dan' },
                            { key: 'Dominic' },
                            { key: 'Jackson' },
                            { key: 'James' },
                            { key: 'Joel' },
                            { key: 'John' },
                            { key: 'Jillian' },
                            { key: 'Jimmy' },
                            { key: 'Julie' },
                        ]}
                        renderItem={({ item }) => <Buttons.ModuleButton/>}
                    />
                </View>
                <View style={styles.textContainer}>
                </View>
            </View>
        </View>
    );
};


export default Home;
