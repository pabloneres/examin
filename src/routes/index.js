import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from '~/views/Home';
import Login from '~/views/Login';

function App() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false, animationEnabled: false}}
      style={{flex: 1, backgroundColor: '#fff'}}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default App;