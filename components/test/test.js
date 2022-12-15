import React from 'react';
import HomeScreen from './HomeScreen.js';
import MainScreen from './MainScreen.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default MyStack;