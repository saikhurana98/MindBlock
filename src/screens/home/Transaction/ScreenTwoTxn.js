import React, { useState } from "react";
import { View, Image, SafeAreaView, Dimensions, Text, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { Separators, Buttons, Lists, Header } from "_components";
import { Card } from 'react-native-elements'
import styles from "../ModuleStyles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').width;

const ITEM_WIDTH = Math.round(windowWidth * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);


const AddressActivity = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'P2PKH', value: 'P2PKH' },
        { label: 'P2PSH', value: 'P2PSH', disabled: true },
        { label: 'Bech32', value: 'Bech32', disabled: true  },
    ]);


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
            <View style={cardStyle(false).addressNextButton}>
                <View>
                    <Buttons.Next fill={true} label={"Next"} onPress={() => navigation.navigate("@ScreenTwo")} disabled={disabled}/>
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