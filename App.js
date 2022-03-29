import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Screen
import Map from "./src/screens/map";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      {/* Use Component */}
      <Map />
    </View>
  );
}
