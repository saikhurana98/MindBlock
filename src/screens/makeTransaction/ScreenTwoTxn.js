import React, { useState } from "react";
import { View, Image, SafeAreaView, Dimensions, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLoader from 'react-native-animated-loader';
import DropDownPicker from 'react-native-dropdown-picker';
import { Separators, Buttons, Lists, Header } from "_components";
import { Card, Input } from 'react-native-elements'
import styles from "./ModuleStyles";
import createP2PKH from '../../helpers/createTxn'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').width;

const ITEM_WIDTH = Math.round(windowWidth * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);


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
        { label: 'P2PSH', value: 'P2PSH', disabled: true },
        { label: 'Bech32', value: 'Bech32', disabled: true },
    ]);
    const pasteHandler = async () => {
        console.log("her")
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
                    A short description of what the topics that this module covers. cannto be longer than this much. ? </Text>
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
                    <View>

                        <DropDownPicker
                            style={cardStyle(false).cardDropdownContainer}
                            textStyle={cardStyle(false).cardDropdownText}
                            dropDownContainerStyle={cardStyle(false).cardDropdownListContainer}
                            listParentLabelStyle={{
                                fontFamily: "TitilliumWeb-Light"
                            }}
                            listItemContainer={cardStyle(false).cardDropdownItemContainer}
                            itemSeparatorStyle={{
                                // backgroundColor: "#000",
                                // borderColor: 'red'
                                borderWidth: 0
                            }}
                            // itemSeparator={true}
                            onPress={(open) => console.log('was the picker open?', open)}
                            showTickIcon={true}
                            // disabled={true}
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
                </View>
                : <Card containerStyle={styles.addressCard}>
                    <Text style={styles.txnAddressCardHeading} >Public Address </Text>
                    <View style={styles.txnAddressCardContentContainer}>
                        <Input
                            placeholder=''
                            style={styles.txnAddressCardContent}
                            value={inputAddress}
                            onChangeText={val => setInputAddress(val)}
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
                <View>
                    <Buttons.Next fill={true} label={enableAddress ? "Pay" : "Next"} onPress={() => enableAddress ? makeTXN() : setEnableAddress(true)} disabled={disabled} />
                </View>
            </View>

        </SafeAreaView>
    )
}

const cardStyle = (val) => StyleSheet.create({
    cardsContainerStyleTxn: {
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
        height: 250,
        width: 300,
        alignSelf: 'center'
    },

    addressNextButton: {
        alignSelf: 'center',
        top: 0.3 * windowHeight,
        flex: 2,

    },
    cardHeading: {
        width: 200,
        textAlign: 'center',
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 24,
        alignSelf: 'center'
    },

    cardDropdownContainer: {
        top: 20,
        borderRadius: 26.5,
        backgroundColor: "#EDF1F9",
        paddingLeft: 20,
        height: 50,
        borderWidth: 0,
        elevation: 3,
    },

    cardDropdownListContainer: {
        top: 70,
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