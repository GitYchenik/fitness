import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Main from './Main';

const Touchable_Main = ({ navigation }) => {
  return (
  <View style={styles.mainblock}>
      <Text style={styles.zagolovok}> День 1. Бицепс + Трицепс </Text>
      <TouchableHighlight onPress={() => navigation.navigate("Main")} style={styles.button} underlayColor="blue">
        <Main />
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