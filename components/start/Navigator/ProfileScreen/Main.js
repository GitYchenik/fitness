import React, { useState } from 'react';
import Header from '../ProfileScreen/Header.js'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Footer from './Footer.js';


const Main = ( props ) => {
console.log(props)
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <Text>oooogo</Text>
      </View>
      <Footer />
    </View>
  ); 
}

const styles = StyleSheet.create({
  main: {
    flex: 15,
    backgroundColor: "white",
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
  }
})

export default Main;