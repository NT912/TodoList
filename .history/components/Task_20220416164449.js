import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.quare}></TouchableOpacity>
        <Text style={styles.itemText}>{props.Text}</Text>
      </View>
      <View style={styles.cirular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  itemleft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  quare: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
  },
  itemText: {},
  cirular: {},
});

export default Task;