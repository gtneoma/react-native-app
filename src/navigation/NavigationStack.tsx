import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../pages/CartView';
import Products from '../pages/ListProducts';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home';
import Banner from '../components/ui/Banner/Banner';
import ProductViewer, { IProductViewerProps } from '../pages/ProductViewer';
import ProductEdit from '../components/functionnal/ProductEdition/ProductEdition';
import ProductEditor, { IProductEditorProps } from '../pages/ProductEditor';
import Camera from '../pages/Camera';


export type RootStackPramaList = {
  Home:undefined;
  Cart: undefined;
  Products:undefined;
  ProductView:IProductViewerProps;
  ProductEditor:IProductEditorProps;
  Camera:undefined;
}

const Stack = createNativeStackNavigator<RootStackPramaList>();
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
         <Stack.Screen
          name="ProductEditor"
          component={(props: any) => {
            return <ProductEditor {...props} />;
          }}
          options={{
            headerTitle:'Edition',
          }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{
            headerTitle:'Photo d\'article',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
