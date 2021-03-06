import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AddNew from "../Buttons/AddNew";
import Avatar from "../Avatars/Menu";
import Colors from "../../constants/Colors";
import { User } from "../../helpers/interfaces";

const FriendsList = ({ list, onPress }) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={{
          alignItems: "center",
          paddingLeft: 13,
          marginBottom: 40,
        }}
        data={list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <>
            {index === 0 ? (
              <AddNew key={item.fullName} onPress={onPress} />
            ) : index === 1 ? (
              <TouchableOpacity
                key={item.id}
                onPress={() => onPress()}
                style={{
                  backgroundColor: Colors.offWhite,
                  marginHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  borderRadius: 8,
                }}
              >
                <Avatar uri={item.avatar} />
                <Text style={{ marginTop: 10, color: Colors.darkBlue }}>
                  {"Test-Address"}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: Colors.offWhite,
                  marginHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  borderRadius: 8,
                }}
              >
                <Avatar uri={item.avatar} />
                <Text style={{ marginTop: 10, color: Colors.darkBlue }}>
                  {item.fullName}
                </Text>
              </TouchableOpacity>
            )}
          </>
        )}
      />
    </View>
  );
};

export default FriendsList;
