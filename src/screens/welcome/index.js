import React from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import Colors from "../../constants/Colors";
import { Buttons } from "../../components";
import styles from "./styles";
const { height } = Dimensions.get("window");

const Welcome = ({ navigation }) => {
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
            label="Already have an address"
            icon="long-arrow-right"
            onPress={() => navigation.navigate("@main")}
          />
          <Buttons.Default label="Need one" 
            icon="long-arrow-right"
            onPress={() => navigation.navigate("@main")}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
