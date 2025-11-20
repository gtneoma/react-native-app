import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IProductListItem } from '../interfaces/IProducts'
import { REST_ADR } from '../config/constantes';
import { RESSOURCES_NAMES } from '../config/constantes';

interface IStockState {
    products: Array<IProductListItem>;
    loaded: boolean;
}
const initialState: IStockState = {
    products: [],
    loaded: false
}

const stock = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addProductToStock(
        state,
        action: {type: string; payload: IProductListItem },
    ) {
        state.products.push(action.payload)
    },
    resetStock(state) {
        state.products = [];
        state.loaded= false;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loaded = true
    })
  }
});

export const { resetStock, addProductToStock} = stock.actions

const stockReducer = stock.reducer;
export default stockReducer;

export const fetchProducts = createAsyncThunk('stock/fetchProducts', async () => {
    const promise = await fetch(`${REST_ADR}${RESSOURCES_NAMES.PRODUCTS}`);
    const data = await promise.json();
    return data;
    
})