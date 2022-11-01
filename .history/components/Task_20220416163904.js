import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.quare}></TouchableOpacity>
      </View>
      <Text>{props.Text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Task;
