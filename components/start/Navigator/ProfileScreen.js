import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight, Touchable } from 'react-native';
import Header from './ProfileScreen/Header.js'
import Footer from './ProfileScreen/Footer.js'
import Main from './ProfileScreen/Main.js';
import Touchable_Main from './ProfileScreen/Touchable_Main.js'


const ProfileScreen = ({ navigation }) => {
  return (

    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.mainText}>Дневник занятий</Text>

          <Touchable_Main navigation={navigation}/>
          <Touchable_Main navigation={navigation}/>
          <Touchable_Main navigation={navigation}/> 
          
        </ScrollView>
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


export default ProfileScreen;