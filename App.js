import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD!</Text>

      <StatusBar style="auto" />
      <Button
        title="click here"
        onPress={() =>
          Alert.alert("TITLE", "MESSAGE", [
            { text: "yes", onPress: () => console.log("YES PRESSED") },
            { text: "no", onPress: () => console.log("NO PRESSED") },
          ])
        }
      />
      <Image
        source={{
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
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
