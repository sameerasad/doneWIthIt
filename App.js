import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD!</Text>
      <Button
        styles={styles.container1}
        title="click me"
        onPress={() =>
          Alert.alert("Welcome", "Message", [{ text: "yes" }, { text: "no" }])
        }
      />
      <Image
        source={{
          width: "200",
          height: "300",
          uri: "https://picsum.photos/200/300",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    width: "100%",
    borderRadius:"2px"
  },
});
"