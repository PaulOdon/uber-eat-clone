import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "restaurant name",
  image:
    "https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM=",
  price: "$$",
  reviews: "1500",
  rating: "4.9",
  categories: [
    { title: "Thai" },
    { title: "Comfort food" },
    { title: "Comfort food" },
    { title: "Comfort food" },
  ],
};

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantInfo description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 200 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginHorizontal: 15,
      marginTop: 10,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantInfo = (props) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginHorizontal: 15,
      marginTop: 10,
    }}
  >
    {props.description}
  </Text>
);
