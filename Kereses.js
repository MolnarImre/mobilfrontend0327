import React from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
const Ip = require("./Ipcim");
export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, szo: "", dataSource: [] };
  }

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

  keres = () => {
    //alert("hello")
    var bemenet = {
      bevitel1: this.state.szo,
    };

    fetch(Ip.ipcim + "keres", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((x) => x.json())
      .then((y) => {
        //alert(JSON.stringify(y))
        this.setState({ dataSource: y });
      });
  };

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
        {/*-------------------------------------------------------------------------------------- keresés */}
        <Text
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          Add meg a keresendő autó típusát:
        </Text>
        <TextInput
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 10,
          }}
          placeholder="típus megadása megadása"
          onChangeText={(beirtszoveg) => this.setState({ szo: beirtszoveg })}
          value={this.state.szo}
        />
        <TouchableOpacity style={styles.kereses} onPress={() => this.keres()}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Keresés
          </Text>
        </TouchableOpacity>
        {/*------------------------------------------------------------------------------------------------- találatok*/}
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  color: "brown",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 15,
                  marginBottom: 5,
                }}
              >
                {this.state.tipus}{" "}
              </Text>
              <Image
                source={{ uri: Ip.ipcim + item.auto_tipus_kep }}
                style={{
                  width: 400,
                  height: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: 25,
                  resizeMode: "contain",
                }}
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
    backgroundColor: "blue",
    padding: 10,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  kereses: {
    alignItems: "center",
    backgroundColor: "darkblue",
    padding: 10,
    width: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
