import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const Default = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => (onPress ? onPress() : {})}
    >
      <Text style={style.text}>{label}</Text>
      <FontAwesome name={icon} color={Colors.blackText} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey,
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    color: Colors.blackText,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default Default;
