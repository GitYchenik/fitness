import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from '../Header.js';
import Footer from '../Footer.js';

const Testing = (props) => {
console.log(props)
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <Text>Exercises helfdgfglo </Text>
        {/* <View style={styles.button}><Button onPress={() => navigation.goBack()} title='Вернутся назад' /></View> */}
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

export default Testing;