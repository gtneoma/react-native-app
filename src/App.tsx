/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Banner from './components/ui/Banner/Banner';
import { Provider } from 'react-redux';
import store from './store/store';
import CartList from './components/ui/lists/CartList/CartList.connected';
import ProductList from './components/ui/lists/ProductList/ProductList.connected';
import NavigationStack from './navigation/NavigationStack';
// import CartListUC from './components/ui/lists/CartList/CartList';
function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        <View style={{ paddingTop: 25 }}>
          <Banner text="Ma boutique" />
        </View>
        <NavigationStack/>
        <ProductList/>
        <CartList />
        {/* {state.length>0&&<CartListUC products={[{...state[0],quantity:10}]} addQuantityProductInCartById={()=>{}} removeQuantityProductInCartById={()=>{}} />} */}
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;