import React, { useState, useEffect  } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from '../Header.js';
import Footer from '../Footer.js';

const Exercises = (props) => {
  //console.log(props)
  const [ name, setname ] = useState('пошел нах')
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <Text>Exercises hello </Text>
        <Text>{props.route.params.znachenie}</Text>
        <View style={styles.button}>
          <Button onPress={() => props.navigation.goBack()} title='Вернутся назад' />
          <Button onPress={() => props.navigation.navigate("Testing", name)} title='Вперед' />
        </View>
      </View>
      <Footer />
    </View >
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 15,
    backgroundColor: "white",
  }
})

export default Exercises;