import React from 'react';
import HomeScreen from './Navigator/HomeScreen.js';
import MainScreen from './Navigator/MainScreen.js'
import Main from './Navigator/MainScreen/Main.js';
import Exercises from './Navigator/MainScreen/Main/Exercises.js'
import Testing from './Navigator/MainScreen/Main/Testing.js';

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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Exercises"
          component={Exercises}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Testing"
          component={Testing}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default MyStack;