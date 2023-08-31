import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Button } from 'react-native';
import {AsyncStorage} from 'react-native';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  try {
    const value = await AsyncStorage.setItem(
      'tasks',
      []
    );
    useEffect(() => {
      setTask(value);
    }, [value]);
  } catch (error) {
    console.error("No se guardara la data en el dispositivo");
  }
  
  const addTask = async(name, description) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      description,
      completed: false,
    };
    await mergeItem(key: string, value: string, [callback]: ?(error: ?Error) => void);
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
    <SafeAreaView style={styles.container}>
      <TaskList tasks={} completeTask={completeTask} deleteTask={deleteTask} />
      <Button title="Add Task" onPress={() => setModalVisible(true)} />
      <AddTaskModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        addTask={addTask}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;