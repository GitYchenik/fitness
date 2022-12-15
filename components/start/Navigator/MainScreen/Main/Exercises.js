import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../Header.js';
import Footer from '../Footer.js';


const Exercises = (props) => {
  console.log(props.route.params.znachenie)
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <Text>Exercises hello </Text>
        <Text>{props.route.params.znachenie}</Text>
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