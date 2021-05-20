import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { DownloadImage } from "../Utils";
import { GetPetInfo } from "../Utils";

export default class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {}
    };
  }

  componentDidMount = async () => {
    this.setState({ detail: await GetPetInfo(this.state.url) });
  };

  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${this.props.route.params.id}.png`,
            }}
            style={styles.image}
          />
        </View>
        {this.state.detail !== {} ? <Text>{this.state.detail.name}</Text> : <Text>False</Text>}
        <Button
          title="Change Params"
          onPress={() => {
            this.props.navigation.setParams({ id: 0 });
          }}
        />
        <Button
          title="Save Image"
          onPress={() => {
            DownloadImage(
              `https://pokeres.bastionbot.org/images/pokemon/${this.props.route.params.id + 1}.png`,
              "test"
            );
          }}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    backgroundColor: "white",
    padding: 40,
  },
  imagecontainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
});
