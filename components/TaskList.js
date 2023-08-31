import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            task={item}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
  },
});

export default TaskList;
