import React from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
const Ip = require("./Ipcim");

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  szavazat = (szam) => {
    //alert(szam)
    var bemenet = {
      bevitel1: szam,
    };

    fetch(Ip.ipcim + "tipus", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((x) => x.text())
      .then((y) => alert(y));
  };

  componentDidMount() {
    return fetch(Ip.ipcim + "tipus")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              >
                {item.Auto_marka + " " + item.típus}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              >
                {"évjárat:" + " " + item.evjarat}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              >
                {"üzemanyag:" + " " + item.auto_uzemanyag}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              >
                {"motor méret:" + " " + item.auto_motor_meret}
              </Text>
              <Image
                source={{ uri: Ip.ipcim + item.auto_tipus_kep }}
                style={{
                  width: 400,
                  height: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  resizeMode: "contain",
                }}
              />
              <View style={{ borderBottomWidth: 5, marginTop: 10 }}></View>
            </View>
          )}
          keyExtractor={({ autotipus_id }, index) => autotipus_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  kekgomb: {
    alignItems: "center",
    backgroundColor: "#4f0373",
    padding: 10,
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
