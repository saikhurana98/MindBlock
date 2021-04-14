import React from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import Colors from "../../constants/Colors";
import { Buttons } from "../../components";
import styles from "./styles";
const { height } = Dimensions.get("window");
// for bitcoin: 
import '_shim';
const bitcoin = require("bitcoinjs-lib");

const Welcome = ({ navigation }) => {
  const keyPair = bitcoin.ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
  console.log(address);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/blockchain.jpg")}
        style={{ height, width: 120 }}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <View>
          <Image source={require("../../assets/paybtc_logo.png")} />
          <Text style={{ color: Colors.defaultText, fontSize: 16 }}>
            {'Generate an address to transact on the blockchain NOW!'}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Buttons.Default
            label="Have an address"
            icon="long-arrow-right"
            onPress={() => navigation.navigate("@main")}
          />
          <Buttons.Default label="Need one"
            icon="long-arrow-right"
            onPress={() => navigation.navigate("@address")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
