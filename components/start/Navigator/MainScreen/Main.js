import React from 'react';
import Header from '../MainScreen/Header.js'
import { StyleSheet, View, Text, FlatList, TouchableHighlight, Button } from 'react-native';
import Footer from './Footer.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = (props) => {
  //console.log(props)
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <View style={styles.button_edit}>
          <Text style={styles.zagolovok}>{props.route.params[0].day}</Text>
          <Button title='Кнопка нах' />
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
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
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
    marginTop: 15
  },
  button: {
    marginVertical: 10,
    width: '95%',
    alignSelf: 'center'
  },
  button_edit: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginHorizontal: '10',
    
  }
})

export default Main;