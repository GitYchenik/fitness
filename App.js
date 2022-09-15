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
      <View style={styles.footer}>
        <Text style={styles.footerText}>Все права не защищены</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: '#00FF00',
    borderRadius: '20px',
    marginTop: '5px',
    marginLeft: '5px',
    marginRight: '5px'

  },
  headerText: { 
    fontSize: 30, 
    color: 'white',
    textAlign: 'center',
    fontWeight: '600'
  },
  main: {
    flex: 15, 
    backgroundColor: 'white'
  },
  mainText: {

  },
  footer: {
    flex: 1, 
    backgroundColor: 'steelblue'
  },
  footerText: {
    textAlign: 'center'
  }
});



export default Start;