import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Start = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fitness</Text>
      </View>
      <View style={{ flex: 15, backgroundColor: 'white' }}>
        <Text style={{ align: 'center' }}>Дневник заданий</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
        <Text style={{ textAlign: 'center' }}>Все права не защищены</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: '#0a0a0a'
  },
  headerText: {
    fontFamily: 'Inter-Black', 
    fontSize: 30, 
    color: 'white'
  }
});



export default Start;