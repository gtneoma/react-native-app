import { createSlice } from '@reduxjs/toolkit';
import { IProductItem, TProductCart } from '../interfaces/IProducts';
import { fetchProducts } from './stock';

const initialState = {
  products: [] as Array<TProductCart>,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: { type: string; payload: IProductItem }) {
      const position = state.products.findIndex(
        p => p.id === action.payload.id,
      );
      if (position >= 0) {
        state.products[position].quantity++;
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeQuantityProductInCartById(
      state,
      action: { type: string; payload: number },
    ) {
      const position = state.products.findIndex(p => p.id === action.payload);
      if (position >= 0) {
        if (state.products[position].quantity > 1) {
          state.products[position].quantity--;
        } else {
          state.products = [
            ...state.products.slice(0, position),
            ...state.products.slice(position + 1),
          ];
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products.push(
        { ...action.payload.products[0], quantity: 2 },
        { ...action.payload.products[1], quantity: 2 },
      );
    });
  },
});

export const { addProductToCart, removeQuantityProductInCartById } =
  cart.actions;

const cartReducer = cart.reducer;
export default cartReducer;
