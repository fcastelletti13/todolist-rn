import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Button } from 'react-native';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const addTask = (name, description) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.card}>
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      <Button title="Add Task" onPress={() => setModalVisible(true)} />
      <AddTaskModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        addTask={addTask}
      />
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    padding: 20,
    width: 500,
    height: 700,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 100
  },
  container: {
    display: "flex",
    alignItems: 'center',
    flex:1
  }
});

export default App;