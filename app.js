// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import About from './components/About.Js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Daftar Teman">
        <Stack.Screen name="Daftar Teman" component={Home} />
        <Stack.Screen name="Detail Informasi" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
