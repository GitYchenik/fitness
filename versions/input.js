import React, { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState(30);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
       <TextInput style={styles.input} placeholder='К примеру Митрофан' onChangeText={(value) => setName(value)}/>
       {/*placeholder - тескт который виден до ввода*/}

      <Text>Enter age:</Text>
       <TextInput style={styles.input} placeholder='к примеру 20' onChangeText={(value) => setAge(value)} keyboardType='numeric'/>
      <Text>Name: {name}, Age: {age}</Text>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,     //толщина рамка
    borderColor: '#777',   //цвет рамки    
    padding: 10,     //отступ рамки от текста который внутри 
    margin: 10,     //отступ  от рамки (если есть другие элементы они сдвинутся)
    width: 200,     //ширина рамки
  }
});
