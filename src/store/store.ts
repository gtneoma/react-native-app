import { configureStore } from '@reduxjs/toolkit';
import stockReducer, { fetchProducts } from './stock';
import cartReducer from './cart';
const store = configureStore({
  reducer: {stock:stockReducer, cart:cartReducer},
});





export default store;
//typage du store(states et dispatch) invariable
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



store.subscribe(() => {
  console.log('Store updated : ', store.getState());
});

store.dispatch(fetchProducts());

// store.dispatch(addProductToStock(products[0]));
// store.dispatch(addProductToStock(products[1]));
// store.dispatch(addProductToStock(products[2])); 

// store.dispatch(addProductToCart(products[0]));
// store.dispatch(addProductToCart(products[0]));
// store.dispatch(addProductToCart(products[2]));
// store.dispatch(addProductToCart(products[2]));
// store.dispatch(addProductToCart(products[2]));

// store.dispatch(removeQuantityProductInCartById(products[2].id));

