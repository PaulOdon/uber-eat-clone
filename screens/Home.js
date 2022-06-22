import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY =
  "Zt4LRABPh_7mYUkSUxxYU7OatLV-uqQjltiCUEp_JT3e5Llh0dQ72pFy3KICr86I3_A7ITiTl-LD0Vycq-wkYsb7Oo-6dz1WBVfJg1s0HjJgljVeii1FdzNToq3mYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromyelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    axios.get(yelpUrl, apiOptions).then((res) => {
      var tempData = res.data.businesses;
      var data = [];
      tempData.forEach((business) => {
        if (business.transactions.includes(activeTab.toLowerCase())) {
          data.push(business);
        }
      });
      setRestaurantData(data);
    });
  };

  useEffect(() => {
    getRestaurantFromyelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
