import React from 'react';
import Cl from './CartList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';
import {
  addProductToCart,
  removeQuantityProductInCartById,
} from '../../../../store/cart';
import { TProductCart } from '../../../../interfaces/IProducts';
const CartList = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch: AppDispatch = useDispatch();
  return (
    <Cl
      products={products}
      addQuantityProductInCartById={(prod: TProductCart) => {
        dispatch(addProductToCart(prod));
      }}
      removeQuantityProductInCartById={id => {
        dispatch(removeQuantityProductInCartById(id));
      }}
    />
  );
};

export default CartList;
