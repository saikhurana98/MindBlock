import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
    Text, View,
} from 'react-native';
import { Card, Input, Button } from 'react-native-elements'
import styles from "./styles";
import createP2PKH from '../../helpers/createTxn'


export default function MakeTransaction({ route, navigation }) {
    const { currentAddress, payeeProp } = route.params;
    if (!currentAddress) { return };

    const [error, setError] = useState("");
    const [payee, setPayee] = useState(payeeProp);
    const [amount, setAmount] = useState("");

    const makeTXN = async () => {
        await createP2PKH(currentAddress, payee, amount)
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
        </SafeAreaView>
    );
}
