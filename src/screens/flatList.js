import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, FlatList, Text } from "react-native";

export default function List() {
  // Make Dummy Data with Array

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>This is List on RN using FlatList</Text>
      <FlatList
        data={[
          {
            name: "Ilham Fathullah"
          },
          {
            name: "Jody Septiawan"
          },
          {
            name: "Samsul Rijal"
          },
        ]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
