import React, { useState, useEffect  } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Touchable_Main = ( props ) => {
//console.log(props) //- расскоментировать для проверки что передается на страницу

useEffect(() => {
  getData()
}, []);

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('UserName')
    console.log(value)
    if (value !== null) {
      console.log('Не пустое нах')
    }
  } catch (e) {
    console.log('что то не так нах')
  }
}

  return (
    <View style={styles.mainblock}>
      <Text style={styles.zagolovok}> { props.data_db_zn[0].day } </Text>
      <TouchableHighlight onPress={() => props.navigation.navigate("Main", props.data_db_zn)} style={styles.button} underlayColor="blue">
        <View>{props.data_db_zn.map(({znachenie}, key) => {
          return (
            <View key={key}>
              <Text>{znachenie}</Text>
            </View>
          )
        })}
        </View>
      </TouchableHighlight>
    </View>
  )
};
const styles = StyleSheet.create({
  mainblock: {
    width: "95%",
    alignSelf: "center"
  },
  zagolovok: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    padding: 10,
    color: "white"
  },
})
export default Touchable_Main;