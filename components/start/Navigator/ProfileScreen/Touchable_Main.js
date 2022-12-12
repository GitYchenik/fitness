import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


const Touchable_Main = ( props ) => {
  //const { navigation, data_id, data_zn } = props;
  console.log(props.navigation.navigate)
  return (
    <View style={styles.mainblock}>
      <Text style={styles.zagolovok}>День! </Text>
      <TouchableHighlight onPress={() => props.navigation.navigate("Main")} style={styles.button} underlayColor="blue">
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