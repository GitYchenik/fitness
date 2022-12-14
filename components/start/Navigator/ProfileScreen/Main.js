import React from 'react';
import Header from '../ProfileScreen/Header.js'
import { StyleSheet, View, Text, FlatList, TouchableHighlight } from 'react-native';
import Footer from './Footer.js';


const Main = (props) => {
  console.log(props)
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <Text style={styles.zagolovok}>{props.route.params[0].day}</Text>
        <View>
          <TouchableHighlight>
            <FlatList
              data={props.route.params}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text> {item.znachenie} </Text>
                </View>
              )}
            />
          </TouchableHighlight>
        </View>
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  zagolovok: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15
  },
})

export default Main;