import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function Map() {
  // Create Dummy Data With Array
  const cars = ["BMW", "Mercedes", "Bugati", "Jaguar"]

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>This is List on RN</Text>
      {cars.map((car) => (
        <Text style={{ color: "red" }} key={car}>{car}</Text>
      ))}
    </View>
  );
}
