import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.quare}></TouchableOpacity>
        <Text style={styles.itemText}>{props.Text}</Text>
      </View>
      <View style={styles.cirular}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Task;
