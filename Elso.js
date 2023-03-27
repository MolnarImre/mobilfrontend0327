import React from "react";
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
const Ip = require("./Ipcim");

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      szo: "",
    };
  }

  vasarlas = (szam) => {
    //alert(szam)
    var bemenet = {
      bevitel1: szam,
      bevitel2: this.state.szo,
    };

    fetch(Ip.ipcim + "erdekel", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((x) => x.text())
      .then((y) => alert(y));
  };

  componentDidMount() {
    return fetch(Ip.ipcim + "alkatresz")
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
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: "white" }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View key={item.alkatresz_cikkszam}>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              >
                {"Kompatibilis autó:" +
                  " " +
                  item.Auto_marka +
                  " " +
                  item.típus}
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
                {"Évjárat:" + " " + item.evjarat}
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
                {"Gyártó:" + " " + item.alkatresz_gyarto}
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
                {"Megnevezése:" + " " + item.alkatresz_nev}
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
                {"Cikkszáma:" + " " + item.alkatresz_cikkszam}
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
                {"Ára:" + " " + item.alkatresz_ar + " " + "Ft"}
              </Text>
              <Image
                source={{ uri: Ip.ipcim + item.alkatresz_kep }}
                style={{
                  width: 350,
                  height: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  resizeMode: "contain",
                }}
              />

              <TouchableOpacity
                style={styles.kekgomb}
                onPress={async () => this.vasarlas(item.alkatresz_id)}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  Megvétel
                </Text>
              </TouchableOpacity>

              <TextInput
                style={{
                  color: "Light",
                  fontSize: 15,
                  marginLeft: 20,
                  marginTop: 10,
                  height: 100,
                }}
                placeholder="Elérhetőségek:"
                onChangeText={(beirtszoveg) =>
                  this.setState({ szo: beirtszoveg })
                }
                value={this.state.szo}
              />
              <View style={{ borderBottomWidth: 5 }}></View>
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
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
