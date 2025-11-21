import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../pages/CartView';
import Products from '../pages/ListProducts';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home';
const Stack = createNativeStackNavigator();
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;