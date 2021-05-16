import React, { useState } from "react";
import { View, SafeAreaView, Dimensions, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLoader from 'react-native-animated-loader';
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Buttons, Header } from "_components";
import { Card, Input } from 'react-native-elements'
import styles from "../ModuleStyles";
import createP2PKH from '../../../helpers/createTxn'


const AddressActivity = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [currentAddress, setCurrentAddress] = useState("");
    const [enableAddress, setEnableAddress] = useState(false);
    const [inputAddress, setInputAddress] = useState("");
    const [inputAmount, setInputAmount] = useState("");

    const getDetails = async () => {
        let userAddr = await AsyncStorage.getItem("@address");
        setCurrentAddress(userAddr)
    }

    React.useEffect(() => {
        getDetails();
    }, [])

    const makeTXN = () => {
        console.log(currentAddress)
        if (currentAddress) {
            setVisible(true);
            setTimeout(() => {
                createP2PKH(currentAddress, inputAddress, inputAmount)
                setVisible(false);
                navigation.navigate("@ScreenThree")
            }, 3000)
        }
    }


    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'P2PKH', value: 'P2PKH' },
        // { label: 'P2PSH', value: 'P2PSH', disabled: true },
        // { label: 'Bech32', value: 'Bech32', disabled: true },
    ]);
    const pasteHandler = async () => {
        const testAddress = await AsyncStorage.getItem("@testAddress");
        setInputAddress(testAddress);
    }



    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Transactions</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Now we'll finally make our first transaction! All you have to do is chose a transaction type (we'll) cover this more later, and then just enter an address. Enter ours if you can't find any! </Text>
            </View>
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                speed={1}
            />
            {!enableAddress ?
                <View style={cardStyle(false).cardsContainerStyleTxn}>
                    <Text style={cardStyle(false).cardHeading}>Choose the type of transaction</Text>
                    <DropDownPicker
                        style={cardStyle(false).cardDropdownContainer}
                        textStyle={cardStyle(false).cardDropdownText}
                        dropDownContainerStyle={cardStyle(false).cardDropdownListContainer}
                        listParentLabelStyle={{
                            fontFamily: "TitilliumWeb-Light"
                        }}
                        listItemContainer={cardStyle(false).cardDropdownItemContainer}
                        itemSeparatorStyle={{
                            borderWidth: 0
                        }}
                        onPress={(open) => console.log('was the picker open?', open)}
                        showTickIcon={true}
                        open={open}
                        value={value}
                        items={items}
                        setValue={setValue}
                        setItems={setItems}
                        setOpen={setOpen}
                        placeholder={"Select"}
                        searchable={false}
                        closeAfterSelecting={true}
                        onClose={() => setDisabled(false)}
                    />
                </View>
                :
                <Card containerStyle={cardStyle(false).addressCard}>
                    <Text style={styles.txnAddressCardHeading} >Public Address </Text>
                    <View style={styles.txnAddressCardContentContainer}>
                        <Input
                            placeholder=''
                            style={styles.txnAddressCardContent}
                            value={inputAddress}
                            onChangeText={val => setInputAddress(val)}
                            multiline={true}
                        />
                        <TouchableOpacity
                            style={styles.txnAddressCardContentPasteContainer}
                            onPress={() => pasteHandler()}>
                            <Text style={styles.txnAddressCardContentPaste}>
                                +Paste Our Address
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.txnAddressCardHeading} >Satoshis to Pay </Text>
                    <View style={styles.txnAddressCardContentContainer}>
                        <Input
                            placeholder=''
                            editable={true}
                            style={styles.txnAddressCardContent}
                            value={inputAmount}
                            onChangeText={val => setInputAmount(val)}
                            keyboardType={"number-pad"}
                        />
                    </View>
                </Card>}
            <View style={cardStyle(false).addressNextButton}>
                <Buttons.Next fill={true} label={enableAddress ? "Pay" : "Next"} onPress={() => enableAddress ? makeTXN() : setEnableAddress(true)} disabled={disabled} />
            </View>

        </SafeAreaView>
    )
}

const cardStyle = (val) => StyleSheet.create({
    addressCard: {
        flex: 5,
        minHeight: hp("10%"),
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    cardsContainerStyleTxn: {
        flex: 6,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 10,
        backgroundColor: val === 3 ? 'green' : 'white',
        borderWidth: 0,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'black',
        marginTop: 50,
        elevation: 10,
        width: wp("80%"),
        alignSelf: 'center'
    },

    addressNextButton: {
        alignSelf: 'center',
        top: 40,
        flex: 4,

    },
    cardHeading: {
        width: wp("70%"),
        textAlign: 'center',
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 24,
        alignSelf: 'center'
    },

    cardDropdownContainer: {
        top: 40,
        borderRadius: 26.5,
        backgroundColor: "#EDF1F9",
        paddingLeft: 20,
        height: 50,
        borderWidth: 0,
        elevation: 3,
    },

    cardDropdownListContainer: {
        top: 90,
        backgroundColor: "#EDF1F9",
        borderRadius: 20,
        elevation: 3,
        borderWidth: 0,
    },

    cardDropdownItemContainer: {
        borderRadius: 20,
        elevation: 3,
    },

    cardDropdownText: {
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 19,
    }
})

export default AddressActivity;