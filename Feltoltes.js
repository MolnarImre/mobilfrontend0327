import React, { Component } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
const Ip = require("./Ipcim");
import * as ImagePicker from "expo-image-picker";

// export class FetchExample extends React.Component {}

export default class Feltoltes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      alkatreszgyarto: "",
      alkatresznev: "",
      alkatreszcikkszam: "",
      alkatreszar: "",
      kompmarka: "",
      komptipus: "",
      valaszto1: "",
      valaszto2: "",
      dataSource: [],
      dataSourcetipus: [],
      image: null,
    };
  }

  componentDidMount() {
    fetch(Ip.ipcim + "marka")
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
    //tipus fetchelése

    fetch(Ip.ipcim + "tipus")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSourcetipus: responseJson,
          },
          function () {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  kompmarka = () => {
    this.setState({ kompmarka: newValue });
  };

  komptipus = () => {
    this.setState({ komptipus: newValue });
  };

  feltoltes = () => {
    let kepObject = this.state.image;
    console.log(kepObject);
    let alkatreszkepnevLength = kepObject.split("/").length;
    const alkatreszkepnev = kepObject.split("/")[alkatreszkepnevLength - 1];
    console.log(alkatreszkepnev);

    var bemenet = {
      alkatreszgyarto: this.state.alkatreszgyarto,
      alkatresznev: this.state.alkatresznev,
      alkatreszcikkszam: this.state.alkatreszcikkszam,
      alkatreszar: this.state.alkatreszar,
      kompmarka: this.state.valaszto1,
      komptipus: this.state.valaszto2,
      alkatreszkepnev: alkatreszkepnev,
    };

    fetch(Ip.ipcim + "feltoltes", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((x) => x.text())
      .then((y) => {
        alert(y);
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 10 }}>
          <ActivityIndicator />
        </View>
      );
    }

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true, // Tartalmazza a kiválasztott kép kódját
      });

      // Set image
      if (!result.canceled) {
        this.setState({ image: result.assets[0].uri });
      }

      // Set image data (base64)
    };

    return (
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
        {/*-------------------------------------------------------------------------------------- keresés */}
        <Text
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          Alkatrész gyártója:
        </Text>
        <TextInput
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 10,
          }}
          placeholder="Ide írj"
          onChangeText={(beirtszoveg) =>
            this.setState({ alkatreszgyarto: beirtszoveg })
          }
          value={this.state.alkatreszgyarto}
        />
        <Text
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          Alkatrész megnevezése:
        </Text>
        <TextInput
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 10,
          }}
          placeholder="Ide írj"
          onChangeText={(beirtszoveg) =>
            this.setState({ alkatresznev: beirtszoveg })
          }
          value={this.state.alkatresznev}
        />
        <Text
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          Alkatrész cikkszáma:
        </Text>
        <TextInput
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 10,
          }}
          placeholder="Ide írj"
          onChangeText={(beirtszoveg) =>
            this.setState({ alkatreszcikkszam: beirtszoveg })
          }
          value={this.state.alkatreszcikkszam}
        />
        <Text
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          Alkatrész ára:
        </Text>
        <TextInput
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 10,
          }}
          placeholder="Ide írj"
          onChangeText={(beirtszoveg) =>
            this.setState({ alkatreszar: beirtszoveg })
          }
          value={this.state.alkatreszar}
        />
        <Text
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Kompatibilis márka:
        </Text>
        <Picker
          style={{ marginLeft: 12, marginBottom: 10 }}
          selectedValue={this.state.valaszto1}
          onValueChange={(ertek) => this.setState({ valaszto1: ertek })}
        >
          {this.state.dataSource.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.Auto_marka}
              value={item.marka_id}
            />
          ))}
        </Picker>

        <Text
          style={{
            color: "Light",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Kompatibilis tipus:
        </Text>
        <Picker
          style={{ marginLeft: 12, marginBottom: 10 }}
          selectedValue={this.state.valaszto2}
          onValueChange={(ertek) => this.setState({ valaszto2: ertek })}
        >
          {this.state.dataSourcetipus.map((item) => (
            <Picker.Item label={item.típus} value={item.autotipus_id} />
          ))}
        </Picker>

        <View style={{ height: 40 }}></View>

        <View>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
        </View>

        <TouchableOpacity
          style={styles.kereses}
          onPress={() => this.feltoltes()}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Feltöltés
          </Text>
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {this.state.image && (
            <Image
              source={{ uri: this.state.image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </ScrollView>
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
    marginVertical: 10,
  },
});
