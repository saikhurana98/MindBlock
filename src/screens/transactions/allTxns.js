import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buttons } from '../../components'
const satoshiToB = 100000000 //100,000,000
const windowWidth = Dimensions.get('window').width;

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const AllTxns = ({ navigation }) => {
    const [txns, setTxns] = useState([]);
    const [userAdd, setUserAdd] = useState("");
    /* For refresh: */
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const initAddress = async () => {
        let addr = await AsyncStorage.getItem("@address")
        setUserAdd(addr);
    }

    const getTXNs = () => {
        fetch(`https://api.blockcypher.com/v1/bcy/test/addrs/${userAdd}/full`)
            .then(function (res) {
                return res.json();
            }).then(function (data) {
                setTxns(data.txs)
                console.log(data.txs)
            }).catch((err) => {
                Alert.alert("An error occurred: ", err)
                console.log("Error in getting TXN details: ", err)
            });
    }

    React.useEffect(() => {
        initAddress();
        userAdd ?
            setTimeout(() => {
                getTXNs();
            }, 1000)
            : ""
    }, [userAdd, refreshing]);

    return (

        <ScrollView
            contentContainerStyle={{ flex: 1 }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
            {/* <Buttons.TxnButton
                amount={200000000000000 / satoshiToB}
                onPress={() => {
                    navigation.navigate("@txnDetails");
                    console.log("asd")
                }}
                type={"type"}
                status={"status"}
                date={"date"} /> */}
            <View style={styles.mainContainer}>
                <View style={styles.greyContainer}>
                    <Text style={styles.mainHeading}> All Transaction </Text>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.txnContainer}>
                        {
                            !txns.length ? <Text>Loading...</Text> :
                                txns.map((item, index) => {
                                    const inputs = item.inputs;
                                    const outputs = item.outputs;
                                    let date = item.received;
                                    var fullDateTime = Date(date);
                                    var tokens = fullDateTime.split(' ');
                                    var newDate = tokens[1] + " " + tokens[2] + ", " + tokens[3]
                                    var timeComp = tokens[4].split(':'); var time = timeComp[0] + ":" + timeComp[1];
                                    let status = item.confirmations >= 6 ? "Confirmed" : "Unconfirmed"
                                    let amount = 0;
                                    let inputAmount = 0;
                                    let outputAmount = 0;
                                    let type = "";

                                    /* inputs contains the user address */
                                    if (inputs.some(e => e.addresses.includes(userAdd))) {
                                        let inputArray = inputs.filter(input => input['addresses'].includes(userAdd));
                                        if (inputArray.length) {
                                            inputArray.map((item) => {
                                                inputAmount += item.output_value;
                                            })
                                        }
                                        amount = inputAmount;
                                        type = "Sent";
                                    }

                                    if (outputs.some(e => e.addresses.includes(userAdd))) {
                                        let outputArray = outputs.filter(output => output['addresses'].includes(userAdd));
                                        if (outputArray.length) {
                                            outputArray.map((item) => {
                                                outputAmount += item.value;
                                            })
                                        }
                                        /*
                                            * If we see that the address was there in the input, we consider it to
                                            * be of "Sent" type.
                                        */

                                        if (type) { amount = inputAmount - outputAmount - item.fees; }
                                        else { amount = outputAmount; type = "Deposited" }
                                    }
                                    return (
                                        <View key={index} style={{ padding: 10 }}>
                                            <Buttons.TxnButton
                                                amount={amount / satoshiToB}
                                                onPress={() => {
                                                    navigation.navigate("@txnDetails", {
                                                        type: type,
                                                        inputs: inputs,
                                                        outputs: outputs,
                                                        type: type,
                                                        date: date,
                                                        fees: item.fees / satoshiToB,
                                                        confirmations: item.confirmations,
                                                        blockHash: item.block_hash,
                                                        amount: amount / satoshiToB,

                                                    });
                                                    console.log("asd")
                                                }}
                                                type={type}
                                                status={status}
                                                date={newDate + " at " + time} />
                                        </View>
                                    )
                                })
                        }

                    </View>
                </View>
            </View >
        </ScrollView >

    );
};

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
    },

    mainHeading: {
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 26,
        alignSelf: 'center',
        top: 20
    },
    greyContainer: {
        marginTop: 16,
        flex: 2
    },

    cardContainer: {
        flex: 13,
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 50,
        width: windowWidth
    },
    txnContainer: {
        flex: 1,
        alignItems: 'center',
        top: 30,
        // left: 30,
        // padding: 10
    }


});

export default AllTxns;