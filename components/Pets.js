import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { FetchData } from "../Utils";

export default class Pets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    this.setState({ data: await FetchData() });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.data.map((item, key) => (
          <Text key={key} style={styles.item}>{item.name}</Text>          
        ))} */}
        <FlatList
          ItemSeparatorComponent={
            "web" !== "android" &&
            (({ highlighted }) => (
              <View
              //style={[style.separator, highlighted && { marginLeft: 0 }]}
              />
            ))
          }
          data={this.state.data}
          renderItem={({ item, index, separators }) => (
            <View style={styles.item}>
              <Image
                //source={require("../assets/favicon.png")}
                source={{
                  uri: `https://pokeres.bastionbot.org/images/pokemon/${
                    index + 1
                  }.png`,
                }}
                style={styles.image}
              />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Detail", {
                    id: index + 1,
                    name: item.name,
                    url: item.url
                  })
                }
                style={styles.button}
              >
                <Text key={index} style={styles.name}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
  },
  item: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  button: {
    marginLeft: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  name: {
    fontSize: 16.5,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
