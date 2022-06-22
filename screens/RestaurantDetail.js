import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <View
        style={{
          borderTopWidth: 2,
          borderTopColor: "#eee",
          marginVertical: 20,
        }}
      ></View>
      <MenuItems />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
