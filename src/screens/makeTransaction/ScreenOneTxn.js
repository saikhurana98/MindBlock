import React, { useState } from "react";
import { View, Image, SafeAreaView, Dimensions, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCode from 'react-native-qrcode-generator';
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Buttons, Header } from "_components";
import styles from "./ModuleStyles";

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width

const AddressActivity = ({ navigation }) => {
    const [visible, setVisible] = useState(true);
    const [qrVisible, setQRVisible] = useState(false);
    const [disabled, setDisabled] = useState(true);


    const [open, setOpen] = useState(false);
    const [currentAddress, setCurrentAddress] = useState("");
    const qrCodeHandler = () => {
        setQRVisible(!qrVisible);
    }
    const getDetails = async () => {
        let userAddr = await AsyncStorage.getItem("@address");
        setCurrentAddress(userAddr)
    }

    React.useEffect(() => {
        getDetails();
    }, [])

    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'P2PKH', value: 'P2PKH' },
        { label: 'P2PSH', value: 'P2PSH', disabled: true },
        { label: 'Bech32', value: 'Bech32', disabled: true },
    ]);


    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Transactions</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    You can send/recieve bitcoins(fake) from here! </Text>
            </View>
            <View style={cardStyle(false).cardsContainerStyleTxn}>
                {!qrVisible ? <Text style={cardStyle(false).cardHeading}>Choose the type of transaction</Text> : <Text style={cardStyle(false).cardHeading}>Scan QR</Text>}
                {!qrVisible ?
                    !visible ?
                        <>
                            <Text style={cardStyle(false).cardHeading}>(only P2PKH available in this version)</Text>
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
                                        borderWidth: 0
                                    }}
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
                            <View style={{ alignSelf: 'center', top: 50 }}>
                                <Buttons.Next fill={true} label={"Next"} disabled={value ? false : true} onPress={() => navigation.navigate("@ScreenTwo")} />
                            </View>
                        </>
                        :
                        <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
                            <View style={{ padding: 10 }}>
                                <Buttons.Next fill={true} label={"Pay"} onPress={() => setVisible(false)} />
                            </View>
                            <Buttons.Next fill={true} label={"Receive"} onPress={() => qrCodeHandler()} />
                        </View>
                    :
                    <View style={{ alignSelf: 'center', padding: 20 }}>
                        <QRCode
                            value={currentAddress}
                            size={200}
                            bgColor='black'
                            fgColor='white' />
                    </View>
                }
            </View>


            {!qrVisible
                ? !visible
                    ?
                    <View style={cardStyle(false).addressNextButton}>
                        <View>
                            <Buttons.Next fill={true} label={"Back"} onPress={() => setVisible(true)} />
                        </View>
                    </View>
                    : null
                : <View style={cardStyle(false).addressNextButton}>
                    <View >
                        <Buttons.Next fill={true} label={"Done"} onPress={() => qrCodeHandler()} />
                    </View>
                </View>}

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
        height: hp('45%'),
        width: wp("80%"),
        alignSelf: 'center'
    },

    addressNextButton: {
        alignSelf: 'center',
        top: 0.1 * windowHeight,
        flex: 2,
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    cardHeading: {
        width: 250,
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
})

export default AddressActivity;