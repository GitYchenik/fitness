import React from 'react';
import HomeScreen from './HomeScreen.js';
import ProfileScreen from './ProfileScreen.js';

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
          options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default MyStack;