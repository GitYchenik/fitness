import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Start = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fitness</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.mainText}>Дневник заданий</Text>
      </View>
      <View>
        <Text>Бицепс + Трицепс</Text>
        <Text>1. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Штанга</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Все права не защищены</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: '#00FF00'
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 20
  },
  main: {
    flex: 15,
    backgroundColor: 'white'
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: 'steelblue'
  },
  footerText: {
    textAlign: 'center'
  }
})


export default Start;