import React, { useState, useReducer } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
export default function App() {
  const [dailyTodo, setDailyTodo] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addTodoHandler = (todoName) => {
    setDailyTodo((currentTodo) => [
      ...dailyTodo,
      { id: Math.random().toString(), value: todoName },
    ]);
    setIsAddMode(false);
  };
  const removeTodoHandler = (todoId) => {
    setDailyTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id != todoId);
    });
  };

  const cancelButtonHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button color='deepskyblue' title='New To-Do' onPress={() => setIsAddMode(true)}/>
      <TodoInput
        visible={isAddMode}
        onAddTodo={addTodoHandler}
        onCancel={cancelButtonHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={dailyTodo}
        renderItem={(itemData) => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removeTodoHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: 'lightgreen',
    height: '100%',
  }
});
