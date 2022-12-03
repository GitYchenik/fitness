import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const Touchable_Main = ({ navigation }) => {

  return (
    <View style={styles.mainblock}>
      <Text style={styles.zagolovok}> Hello  !</Text>
      <TouchableHighlight onPress={() => navigation.navigate("Main", { data: { title: 'Hello World'}})} style={styles.button} underlayColor="blue">
        <Text> dfsdfsfsfsdfsdf</Text>
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