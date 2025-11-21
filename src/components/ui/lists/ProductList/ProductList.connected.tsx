import { View, Text } from 'react-native';
import React from 'react';
import Pl from './ProductList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { IProductItem } from '../../../../interfaces/IProducts';
const ProductList = () => {
  const products = useSelector((state: RootState) => state.stock.products);
  return (
    <Pl
      products={products}
      onProductViewSelected={(product: IProductItem) => {
        console.log('Produit sélectionné :', product);
      }}
    />
  );
};

export default ProductList;