import React, { useState } from "react";
import { View, Image, SafeAreaView, Dimensions, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLoader from 'react-native-animated-loader';
import DropDownPicker from 'react-native-dropdown-picker';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Card, Input } from 'react-native-elements'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import { Buttons, Header } from "_components";
import styles from "./ModuleStyles";
import createP2PKH from '../../helpers/createTxn'

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width


const QRScanner = ({ QRHandler }) => {
    const onSuccess = e => {
        console.log(e.data)
    };
    return (
        <QRCodeScanner
            cameraStyle={{ width: windowWidth * 0.6, alignSelf: 'center', bottom: 20, flex: 2 }}
            topViewStyle={{ flex: 1, alignSelf: 'center', width: 250 }}
            bottomViewStyle={{ flex: 2 }}

            onRead={onSuccess}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <Text style={cardStyle(false).centerText}>
                    Scan an address{' '}
                    <Text style={cardStyle(false).textBold}>
                        generated via this app</Text>.
                </Text>
            }
            bottomContent={
                <TouchableOpacity
                    style={cardStyle(false).buttonTouchable}
                    onPress={() => QRHandler()}>
                    <Text style={cardStyle(false).buttonText}>Dismiss</Text>
                </TouchableOpacity>
            }
        />
    );
}

const AddressActivity = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [qrVisible, setQRVisible] = useState(false);
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
    const checkCameraPermissions = () => {
        check(PERMISSIONS.ANDROID.CAMERA)
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        console.log('This feature is not available (on this device / in this context)');
                        break;
                    case RESULTS.DENIED:
                        Alert.alert("Please allow camera permission to use QR Scanner")
                        request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
                            switch (result) {
                                case RESULTS.DENIED:
                                    Alert.alert("Please allow camera permission to use QR Scanner")
                                    break;
                                case RESULTS.GRANTED:
                                    console.log('The permission is granted');
                                    break;
                                case RESULTS.BLOCKED:
                                    console.log('The permission is denied and not requestable anymore');
                                    break;
                            }
                        })
                        break;
                    case RESULTS.LIMITED:
                        console.log('The permission is limited: some actions are possible');
                        break;
                    case RESULTS.GRANTED:
                        console.log('The permission is granted');
                        break;
                    case RESULTS.BLOCKED:
                        console.log('The permission is denied and not requestable anymore');
                        break;
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    React.useEffect(() => {
        checkCameraPermissions();
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
    const QRHandler = () => {
        setQRVisible(!qrVisible);
    }



    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Transactions</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    You can send bitcoins(fake) from here! </Text>
            </View>
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                speed={1}
            />
            {!qrVisible ?
                <Card containerStyle={styles.addressCard}>
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
                        <TouchableOpacity
                            style={cardStyle(false).txnAddressCardQR}
                            onPress={() => QRHandler()}>
                            <Text style={styles.txnAddressCardContentPaste}>
                                +Scan QR
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
                </Card>
                :
                <View style={{ flex: 1 }}>
                    <QRScanner QRHandler={QRHandler} />
                </View>}

            {!qrVisible ?
                <View style={cardStyle(false).addressNextButton}>
                    <View>
                        <Buttons.Next fill={true} label={"Pay"} onPress={() => makeTXN()} />
                    </View>
                </View> : null}


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
    },
    txnAddressCardQR: {
        // flex: 100,
        alignSelf: 'flex-start',
        // width:80
        bottom: 40,
    },


    // For QR:
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
        textAlign: 'center'
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
})

export default AddressActivity;