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
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(useDeviceOrientation()); //landscape true and portrait false
  const { landscape } = useDeviceOrientation(); //destructing to get just landscape
  return (
    <View
      style={styles.container}
      style={{
        width: "100%",
        height: landscape ? "30%" : "100%",
        backgroundColor: "dodgerblue",
      }}
    >
      Hello WORLD!
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
