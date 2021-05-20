import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default function Collapse(props) {
  let [collapse, setCollapse] = useState(true);
  let action = () => {
    if (collapse) setCollapse(false);
    else setCollapse(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={action}>
        <Text>
          <Text style={styles.text}>{props.title}</Text>
          <Icon
            name="chevron-down"
            type="evilicon"
            style={{ marginLeft: 5 }}
            size={20}
          />
        </Text>
      </TouchableOpacity>
      <View style={styles.contentview}>
        {props.isText ? (
          <Text
            style={
              (styles.content,
              {
                display: collapse ? "none" : "flex",
              })
            }
          >
            {props.content}
          </Text>
        ) : (
          <View
            style={
              (styles.content,
              {
                display: collapse ? "none" : "flex",
              })
            }
          >
            {props.content}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderBottomWidth: 1,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  contentview: {
    flex: 1,
  },
  content: {},
});
