import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.quare}></TouchableOpacity>
        <Text style={styles.itemleft}>{props.Text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Task;
