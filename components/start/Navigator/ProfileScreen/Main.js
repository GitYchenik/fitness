import React, { useState } from 'react';
import Header from '../ProfileScreen/Header.js'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Footer from './Footer.js';


const Main = () => {
  const [Data_db, setData_db] = useState([
    { id: 1, znachenie: 'Тренажер 4' },
    { id: 2, znachenie: 'Блок назад' },
    { id: 3, znachenie: 'Отжимания' },
    { id: 4, znachenie: 'Разведение в блоке' }
  ]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <FlatList data={Data_db} renderItem={({ item }) => (
          <Text>{item.znachenie}</Text>
        )} />
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