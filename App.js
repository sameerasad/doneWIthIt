import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableHighlight,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  console.log(useDimensions);
  return (
    <View
      styles={{ width: "100%", height: "30%", backgroundColor: "dodgerblue" }}
    >
      Hello wORLD!
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
});*/
