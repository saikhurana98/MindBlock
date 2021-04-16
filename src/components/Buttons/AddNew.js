import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../constants/Colors";


const AddNew = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.grey,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderRadius: 25,
      }}
      onPress={() => {onPress()}}
    >
      <Feather name="plus" color={Colors.blackText} size={20} />
    </TouchableOpacity>
  );
};

export default AddNew;
