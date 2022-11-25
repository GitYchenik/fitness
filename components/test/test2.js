import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      Alert.alert('I am appearing...', 'After 5 seconds!');
    }, 5000);
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Alert will appear after 5 seconds</Text>
    </View>
  );
};

export default App;

setTimeout(()=>{ this.props.navigation.navigate("HomeScreen") }, 3000);}