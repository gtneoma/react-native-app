/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View, Button, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProductList from './components/ProductList/ProductList.connected';
import { AddProductButtonConnected } from './components/AddProductButton/AddProductButton';
function App() {
  return (
      <SafeAreaProvider>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        <View style={{ paddingTop: 25 }}>
          <AddProductButtonConnected />
          <Button title="Coucou" onPress={() => Alert.alert('Coucou')} />
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Liste des produits
          </Text>
          <ProductList />
        </View>
      </SafeAreaProvider>
  );
}
export default App;