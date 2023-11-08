import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet } from 'react-native';

const AddTaskModal = ({ visible, onClose, addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (!visible) {
      // Reset input fields when modal is closed
      setTaskName('');
      setTaskDescription('');
    }
  }, [visible]);

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      addTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Name"
            value={taskName}
            onChangeText={(text) => setTaskName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={taskDescription}
            onChangeText={(text) => setTaskDescription(text)}
          />
          <Button title="Add" onPress={handleAddTask} />
          <Button title="Cancel" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }
});

export default AddTaskModal;