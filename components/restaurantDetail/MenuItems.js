import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
  {
    title: "Lasange",
    description: "With butter letuce, tomato and sauce bechamel",
    price: "$13,50",
    image:
      "https://media.istockphoto.com/photos/lasanga-picture-id152546746?b=1&k=20&m=152546746&s=170667a&w=0&h=orV-4EcGrpsVIv54jttSQGy9ZDcM1lQNm9it2IQBkU0=",
  },
  {
    title: "Lasange",
    description: "With butter letuce, tomato and sauce bechamel",
    price: "$19,50",
    image:
      "https://media.istockphoto.com/photos/lasanga-and-salad-picture-id92120896?b=1&k=20&m=92120896&s=170667a&w=0&h=PV50jnfBcVDlCZl5aQ9O_KSRxOkE5CFwwyDoJhIvaMw=",
  },
  {
    title: "Lasange",
    description: "With butter letuce, tomato and sauce bechamel",
    price: "$19,50",
    image:
      "https://media.istockphoto.com/photos/steamed-beef-meat-served-with-baked-potato-picture-id1171696534?b=1&k=20&m=1171696534&s=170667a&w=0&h=g9gUUseyUdQqSPHVm8v7V-mrku3N5gLRap9cU_N9U-I=",
  },
  {
    title: "Lasange",
    description: "With butter letuce, tomato and sauce bechamel",
    price: "$19,50",
    image:
      "https://media.istockphoto.com/photos/eggplant-lasagna-with-cheese-and-tomato-sauce-picture-id931130552?b=1&k=20&m=931130552&s=170667a&w=0&h=V_O1_v-QBIQ531uda1tUFzXjaMQE-OKEVyVQ3YrsGhY=",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderRadius: 0, borderColor: "lightgrey" }}
              fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          ></View>
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "600" }}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      style={{ height: 100, width: 100, borderRadius: 8 }}
      source={{ uri: props.food.image }}
    />
  </View>
);
