import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
          <Text style={styles.headerText}>Fitness</Text>
        </View>
    )
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
})

export default Header;