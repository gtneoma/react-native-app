import { createSlice } from '@reduxjs/toolkit'
import { IProductListItem } from '../interfaces/IProducts'

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
});

export const { resetStock, addProductToStock} = stock.actions

const stockReducer = stock.reducer;
export default stockReducer;