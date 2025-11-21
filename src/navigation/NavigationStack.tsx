import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../pages/CartView';
import Products from '../pages/ListProducts';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home';
import Banner from '../components/ui/Banner/Banner';
import ProductViewer from '../pages/ProductViewer';
const Stack = createNativeStackNavigator();
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Mon panier',
            headerStyle: { backgroundColor: '#F7AB8E' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            headerTitle: () => {
              return <Banner text="Produits" />;
            },
          }}
        />
        <Stack.Screen
          name="ProductView"
          component={(props: any) => {
            return <ProductViewer {...props} />;
          }}
          options={{
            headerTitle: () => {
              return <Banner text="Détails produit" />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
