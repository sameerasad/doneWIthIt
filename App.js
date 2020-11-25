import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: "1",
        backgroundColor: "white",
        flexDirection: "row-reverse",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "dodgerblue",
        }}
      ></View>
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "orange" }}
      />
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "tomato" }}
      />
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});*/
