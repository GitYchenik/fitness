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

          <View style={{ width: "95%", alignSelf: "center" }}>
            <Text style={styles.zagolovok}> День 1. Бицепс + Трицепс </Text>
            <TouchableHighlight onPress={() => navigation.navigate("Main")} style={styles.button}>
              <Main />
            </TouchableHighlight>
          </View>

          <Touchable_Main navigation={navigation}/>
          <Touchable_Main navigation={navigation}/>
          <Touchable_Main navigation={navigation}/> 

          <View style={{ width: "95%", alignSelf: "center" }}>
            <Text style={styles.zagolovok}> День 2. Грудь + Спина </Text>
            <TouchableHighlight onPress={() => navigation.navigate('Main')} style={styles.button}>
              <Main />
            </TouchableHighlight>
          </View>

          <View style={{ width: "95%", alignSelf: "center" }}>
            <Text style={styles.zagolovok}> День 3. Плечи + Трапеция </Text>
            <TouchableHighlight onPress={() => navigation.navigate('Main')} style={styles.button}>
              <Main />
            </TouchableHighlight>
          </View>
          
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


export default ProfileScreen;