import * as React from "react";
import { Button, View, StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Elso from "./Elso";
import Tipusok from "./Tipusok";
import Kereses from "./Kereses";
import Alkatreszkeres from "./Alkatreszkeres";
import Feltolt from "./Feltoltes";
import Nevjegy from "./Nevjegy";

function HomeScreen({ navigation }) {
  return (
    <View style={style.Button}>
      <Button
        onPress={() => navigation.navigate("Alkatrészek")}
        title="Megnézem az alkatrészeket"
      />
      <View style={{ height: 20 }}></View>
      <Button
        onPress={() => navigation.navigate("Típusok")}
        title="Megnézem a gépjármű típusokat"
      />
      <View style={{ height: 20 }}></View>
      <Button
        onPress={() => navigation.navigate("Keresés")}
        title="Tipus szerinti keresés"
      />
      <View style={{ height: 20 }}></View>
      <Button
        onPress={() => navigation.navigate("Alkatrész keresés")}
        title="Alkatrész szerinti keresés"
      />
      <View style={{ height: 20 }}></View>
      <Button
        onPress={() => navigation.navigate("Feltöltés")}
        title="Feltöltök egy alkatrészt"
      />
      <View style={{ height: 20 }}></View>
      <Button onPress={() => navigation.navigate("Névjegy")} title="Névjegy" />
    </View>
  );
}

function Elso_lap({ navigation }) {
  return <Elso />;
}

function Tipus_fugg({ navigation }) {
  return <Tipusok />;
}

function Keres({ navigation }) {
  return <Kereses />;
}

function Alkatreszkereses({ navigation }) {
  return <Alkatreszkeres />;
}

function Feltoltes({ navigation }) {
  return <Feltolt />;
}
function Keszito({ navigation }) {
  return <Nevjegy />;
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Kezdőlap" component={HomeScreen} />
        <Drawer.Screen name="Alkatrészek" component={Elso_lap} />
        <Drawer.Screen name="Tipusok" component={Tipus_fugg} />
        <Drawer.Screen name="Keresés" component={Keres} />
        <Drawer.Screen name="Alkatrész keresés" component={Alkatreszkereses} />
        <Drawer.Screen name="Feltöltés" component={Feltoltes} />
        <Drawer.Screen name="Névjegy" component={Keszito} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
});
