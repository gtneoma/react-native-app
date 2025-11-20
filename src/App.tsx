/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme, View, Text, Alert} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Button from './components/Button/Button';
import ProductListItem from './components/ProductListItem/ProductListItem';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
    <Text>
        Hello World !
    </Text>
      <Button bgcolor='skyblue' children="test 1" obligatoire={undefined} onButtonClick={() => {
        Alert.alert('cliqué')
      }}/>
      <ProductListItem
          produit={{ id: 1, name: 'Produit 1', img: 'https://reactnative.dev/img/tiny_logo.png', prix: 3.99, stock: 6 }}
        ></ProductListItem>
        <ProductListItem
          produit={{ id: 2, name: 'Produit 2', img: 'https://reactnative.dev/img/tiny_logo.png', prix: 1.99, stock: 0 }}
        ></ProductListItem>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
