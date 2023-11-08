import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Task = ({ task, completeTask, deleteTask }) => {
  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={handleComplete} style={styles.taskTouchable}>
        <Ionicons
          name={task.completed ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'}
          size={24}
          color={task.completed ? 'green' : 'gray'}
        />
      </TouchableOpacity>
      <View style={styles.taskInfo}>
        <Text style={[styles.taskText, task.completed && styles.completedTaskText]}>{task.name}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
      </View>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteTouchable}>
        <Ionicons name="ios-trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  taskTouchable: {
    marginRight: 10,
  },
  taskInfo: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  taskDescription: {
    color: 'gray',
  },
  deleteTouchable: {
    marginLeft: 10,
  },
});

export default Task;