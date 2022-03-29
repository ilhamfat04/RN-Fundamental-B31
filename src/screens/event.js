import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Event() {
  // Create Function Here
  function Greeting() {
    return alert("Hello batch 31 fullstack")
  }

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>If you pressed Click Here then the alert will appear</Text>
      <TouchableOpacity onPress={Greeting} >
        <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}
