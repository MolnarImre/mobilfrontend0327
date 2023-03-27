import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: "purple",
          textAlign: "center",
        }}
      >
        Névjegy
      </Text>
      <View style={{ height: 10 }}></View>
      <Text style={{ fontSize: 22, textAlign: "center", color: "purple" }}>
        Készítette: Molnár Imre{" "}
      </Text>
      <Text style={{ fontSize: 22, textAlign: "center", color: "purple" }}>
        2023.01.27
      </Text>
      <View style={{ height: 10 }}></View>
      <Text style={{ fontSize: 22, textAlign: "center", color: "#a54fe3" }}>
        Debreceni SZC Baross Gábor Technikum, Szakképző Iskola és Kollégium
        tanulója
      </Text>
      <View style={{ height: 20 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default LotsOfStyles;
