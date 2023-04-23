import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';


function AddTodo({addTask}) {

    let[task, setTask] = useState("");

    const changeHandler = (val) => {
      setTask(val);
    }
    
  return (
    <View>

        <TextInput 
          maxLength={40} 
          style={styles.inputField} 
          onChangeText={changeHandler}
          placeholder='task....'
        />
        <Button 
          onPress={() => addTask(task)}
          title="add task"
          color="coral"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    inputField: {
      backgroundColor: "#ededed",
      fontSize: 20,
      borderRadius: 7,
      padding:9,
      marginBottom: 15,
    },
    button: {
        backgroundColor: "green",
        color: "white",
        fontSize: 35,
        marginBottom: 15,
    },
  });

export default AddTodo