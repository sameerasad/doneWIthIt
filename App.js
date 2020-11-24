import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 0.3,
          backgroundColor: "dodgerblue",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            paddingTop: "20px",
            flex: 1,

            backgroundColor: "red",
          }}
        >
          {" "}
          hello world
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "orange" }} />
      <View style={{ flex: 1, backgroundColor: "tomato" }} />
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
