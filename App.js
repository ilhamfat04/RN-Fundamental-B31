import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

// Import Component
import Header from "./src/components/header";
import Content from "./src/components/content";

export default function App() {
  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>Testing Test</Text>
      <Header />
      <Content />
    </View>
  );
}
