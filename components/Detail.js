import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { GetPetInfo } from "../Utils";
import Collapse from "./Collapse";

const window = Dimensions.get("window");

export default function Detail({ route, navigation }) {
  let { url, id } = route.params;
  let [detail, setDetail] = useState({});

  useEffect(() => {
    let executor = async () => {
      let det = await GetPetInfo(url);
      setDetail(det);
    };

    executor();
  }, [url]);

  let AbilitiesView = (data = []) => {
    let collapses = [];
    data.map((value, index) => {
      collapses.push(
        <View key={index} style={{ flex: 1 }}>
          <Text>{value.ability.name}</Text>
          <Text>{value.ability.url}</Text>
        </View>
      );
    });
    return <Collapse title={"Abilities"} content={collapses} isText={false} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageview}>
        <Image
          source={{
            uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentview}>{AbilitiesView(detail.abilities)}</View>
      <View style={styles.buttonview}>
        <Button
          title="Change Params"
          onPress={() => {
            console.log(detail);
            navigation.setParams({ id: 0 });
          }}
        />
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    backgroundColor: "white",
    padding: 40,
    width: window.width,
    height: window.height,
  },
  imageview: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  contentview: {
    flex: 1,
  },
  buttonview: {},
  text: {},
  collapse: {},
});
