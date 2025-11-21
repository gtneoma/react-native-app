import React from 'react';
import Ci from './CartIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
const CartIcon = () => {
  const productsQuantity = useSelector((state: RootState) => {
    return state.cart.products.reduce(
      (acc, produit) => acc + produit.quantity,
      0,
    );
  });

  return <Ci quantity={productsQuantity} />;
};

export default CartIcon;
