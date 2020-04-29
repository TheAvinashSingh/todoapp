import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const TodoInput = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const todoInputHandler = (enteredTodo) => {
    setEnteredTodo(enteredTodo);
  };

  const addTodoHandler = () => {
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Today's To Do"
          placeholderTextColor='gray'
          style={styles.input}
          onChangeText={todoInputHandler}
          value={enteredTodo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='Add' color='blue' onPress={addTodoHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
    color: 'black'
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
export default TodoInput;
