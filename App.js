import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './Home';
import Direct from './Direct';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
          options={{headerShown:false}}
          />
          <Stack.Screen name="Direct" component={Direct} 
          
          
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}