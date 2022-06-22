import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";

export default function BottomTabs() {
  return (
    <View style={{ borderTopWidth: 1, borderTopColor: "#ddd" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 30,
          margin: 10,
        }}
      >
        <Icon icon="home" text="Home" />
        <Icon icon="search" text="Browse" />
        <Icon icon="shopping-bag" text="Grocery" />
        <Icon icon="receipt" text="Order" />
        <Icon icon="user" text="Account" />
      </View>
    </View>
  );
}

const Icon = (props) => (
  <>
    <TouchableOpacity>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text style={{ fontWeight: "700", textAlign: "center" }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </>
);
