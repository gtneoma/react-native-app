import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProductListItem } from '../interfaces/IProducts';
import { RESSOURCES_NAMES, REST_ADR } from '../config/constantes';
interface IStockState {
  products: Array<IProductListItem>;
  categories?: Array<{id:number}>;
  loaded: boolean;
}
const initialState: IStockState = {
  products: [],
  categories: [],
  loaded: false,
};

const stock = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addProductToStock(
      state,
      action: { type: string; payload: IProductListItem },
    ) {
      console.log(action);
      state.products.push(action.payload);
    },
    resetStock(state) {
      state.products = [];
      state.loaded = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action);
        
      state.products = action.payload.products;
      state.categories = action.payload.categories;
      state.loaded = true;
    });
  },
});

export const { resetStock, addProductToStock } = stock.actions;

const stockReducer = stock.reducer;
export default stockReducer;

export const fetchProducts = createAsyncThunk(
  'stock/fetchProducts',
  async () => {
    const promise = fetch(`${REST_ADR}${RESSOURCES_NAMES.PRODUCTS}`);
    const promise2 = fetch(`${REST_ADR}/categorys`);
    console.log('fetching products and categories...'); 
    
    const prAll=await Promise.all([promise, promise2]);
    console.log(prAll);
    
    const data = {products:await prAll[0].json(),categories:await prAll[1].json()};
    console.log(data);
    return data;
  },
);
// export const validateCart = createAsyncThunk(
//     'cart/fetchProducts',
//     async (userId:number) => {
//         console.log(userId)
//     },
//   );
//   store.dispatch(validateCart(12345));