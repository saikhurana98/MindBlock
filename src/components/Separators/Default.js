import React from "react";
import { View, Text } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  label: string;
}

const Default: React.FC<Props> = ({ label }) => {
  return (
    <View style={{ paddingHorizontal: 13, marginBottom: 15 }}>
      <Text style={{
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 15,
        color: "#0D1F3C"
      }}>
        {label}
      </Text>
    </View>
  );
};

export default Default;
