import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function Form() {
  return (
    <View style={style.container}>
      <StatusBar />
      {/* Code Here */}
      <Text style={style.header} >Sign In</Text>

      <Text style={style.textStyle}>Email</Text>
      <TextInput style={style.textInput} />

      <Text style={style.textStyle}>Password</Text>
      <TextInput secureTextEntry={true} style={style.textInput} />

      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

// Create Variable for CSS
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    color: "#e74c3c",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#e74c3c",
    height: 45,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center"
  },
  textButton: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center"
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 5,
    paddingLeft: 5
  },
  textStyle: {
    color: "#e74c3c",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  }
})
