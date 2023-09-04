import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Button } from 'react-native';
import {AsyncStorage} from 'react-native';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  try {
    const value = AsyncStorage.setItem(
      'tasks',
      []
    );
    useEffect(() => {
      setTask(value);
    }, [value]);
  } catch (error) {
    console.log("No se guardara la data en el dispositivo");
    console.error(error)
  }
  
  const addTask = (name, description) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setItem("tasks",JSON.stringify(tasks), (error) => console.error(error));
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setItem("tasks",JSON.stringify(tasks), (error) => console.error(error));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setItem("tasks",JSON.stringify(tasks), (error) => console.error(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskList tasks={getItem("tasks",(error) => {
        console.error(error);
        return tasks;
      })} completeTask={completeTask} deleteTask={deleteTask} />
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