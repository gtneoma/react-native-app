/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View, ScrollView, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductListItem from './components/ProductListItem/ProductListItem';

import { useEffect, useState } from 'react';
import { IProductListItem } from './interfaces/IProducts';
import { RESSOURCES_NAMES, REST_ADR } from './config/constantes';
import './store/store'
import ProductList from './components/ProductList/ProductList';

function App() {
  const [products, setproducts] = useState<Array<IProductListItem>>([]);
  useEffect(() => {
    fetch(`${REST_ADR}${RESSOURCES_NAMES.PRODUCTS}`)
      .then(r => r.json())
      .then(data => {
        setproducts(data);
      })
      .catch(e => console.log(e));
    return () => {};
  }, []);
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <View style={{ paddingTop: 25 }}>
      <Button title="add empty product"  onPress={() => {
          setproducts([...products, { name: 'Produit vide', prix: 0, stock: 0, img: '', id:Math.random()*100000 }]);
        }} />
        <Button title="Coucou" onPress={() => alert('Coucou')} />
        <Text style={{ textAlign: 'center', fontSize: 18 }}>
          Liste des produits
        </Text>
        <ProductList products={products}/>
       
      </View>
    </SafeAreaProvider>
  );
}
export default App;