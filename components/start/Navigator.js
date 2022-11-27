import React from 'react';
import HomeScreen from './Navigator/HomeScreen.js';
import ProfileScreen from './Navigator/ProfileScreen.js';

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
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default MyStack;