import React, { useState, useEffect } from 'react';
import Header from '../MainScreen/Header.js'
import { StyleSheet, View, Text, FlatList, TouchableHighlight, Button, TextInput } from 'react-native';
import Footer from './Footer.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = (props) => {
  console.log(props)
  //<TextInput defaultValue={props.route.params[0].day} style={styles.zagolovok}  - для работы инпута
  
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <View style={styles.block_zagolovok}>
          <TextInput defaultValue={props.route.params[0].day} style={styles.zagolovok} />
          <Button style={{ width: '50' }} title='х' onPress={console.log('тыц')} />
        </View>

        <View>
          <FlatList
            data={props.route.params}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => props.navigation.navigate("Exercises", item)}>
                <View style={styles.item}>
                  <Text> {item.znachenie} </Text>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>

        <View style={styles.button_nazad}><Button onPress={() => props.navigation.goBack()} title='Вернутся назад' /></View>

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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    width: '95%',
    alignSelf: 'center'
  },
  zagolovok: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button_nazad: {
    marginVertical: 10,
    width: '95%',
    alignSelf: 'center'
  },
  block_zagolovok: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  }
})

export default Main;