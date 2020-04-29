import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const TodoItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.resultList}>
        <Text style={{color:'white'}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resultList: {
    padding: 5,
    marginVertical: 10,
    backgroundColor: "green",
    borderColor: "green",
    borderWidth: 1,
    width: "100%"
  },
});

export default TodoItem;
