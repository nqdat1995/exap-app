import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  let action = () => {
    return (
      <View>
        <TouchableOpacity onPress={action} style={styles.button}>
          <Text style={{ textAlign: "center" }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
        Your Pet Shop
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Pets")}
          style={styles.button}
        >
          <Text style={{ textAlign: "center" }}>Click Me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 100,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});
