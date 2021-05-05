import React, { useState } from 'react';
import {
    Text, View, SafeAreaView
} from 'react-native';
import { Card, Input, Button, Overlay } from 'react-native-elements'
import styles from "./styles";
import createP2PKH from '../../helpers/createTxn'


export default function MakeTransaction({ route, navigation }) {
    // For overlay: 
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const { currentAddress, payeeProp } = route.params;
    if (!currentAddress) { return };

    const [error, setError] = useState("");
    const [payee, setPayee] = useState(payeeProp);
    const [amount, setAmount] = useState("");

    const makeTXN = async () => {
        await createP2PKH(currentAddress, payee, amount)
        toggleOverlay();
    }
    return (
        <SafeAreaView>
            <View style={{ "marginBottom": 200 }}></View>
            <Card>
                <Card.Title>Enter Details</Card.Title>
                <Card.Divider />
                <Input
                    value={payee}
                    placeholder='Enter Payee'
                    errorStyle={{ color: 'red' }}
                    errorMessage={error}
                    onChangeText={setPayee}
                />

                <Input
                    value={amount}
                    placeholder='Enter Satoshis'
                    errorStyle={{ color: 'red' }}
                    errorMessage={error}
                    keyboardType="number-pad"
                    onChangeText={setAmount}
                />
                <Button title="Pay" onPress={() => makeTXN()} />
            </Card>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} >
                <View style={{ "justifyContent": "center", "width": 200, "height": 200 }}>
                    <Text> TXN Success!</Text>
                </View>
            </Overlay>
        </SafeAreaView>
    );
}
