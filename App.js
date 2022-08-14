import React, { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');

  const clickHandler = () => {
    setName('chun-li');
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <View style={styles.ButtonContainer}>
        <Button title='Update State' onPress={clickHandler} />
      </View>
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
});
