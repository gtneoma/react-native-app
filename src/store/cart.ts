import { createSlice } from '@reduxjs/toolkit';
import { IProductListItem, TProductCartList } from '../interfaces/IProducts';

const initialState = {
  products: [] as Array<TProductCartList>,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(
      state,
      action: { type: string; payload: IProductListItem },
    ) {
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
});

export const { addProductToCart, removeQuantityProductInCartById } =
  cart.actions;

const cartReducer= cart.reducer;
export default cartReducer;