import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function EmbedExpression() {
  // Create Function Here
  function getMajor() {
    return "Fullstack Batch 31"
  }

  // Create a variable Here
  const companyName = "Dumbways.ID"

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>
        Welcome to {companyName} Class {getMajor()}
      </Text>
    </View>
  );
}
