import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from '../Header.js';
import Footer from '../Footer.js';

const Exercises = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <Text>Exercises hello </Text>
        <Text>{props.route.params.znachenie}</Text>
        <View style={styles.button}><Button onPress={() => props.navigation.goBack()} title='Title from franch' /></View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 15,
    backgroundColor: "white",
  }
})

export default Exercises;