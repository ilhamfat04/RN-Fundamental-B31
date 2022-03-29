import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";

import List from "../components/list";

export default function Props() {
  // Create variable to insert link Image
  let pic = {
    uri: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>On the image element using the default props, namely source</Text>
      <Image source={pic} style={{ width: "100%", height: 200 }} />

      <List listData="BMW" />
      <List listData="Mercedes" />
      <List listData="Buggati" />
      <List listData="Jaguar" />
    </View>
  );
}
