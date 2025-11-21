import { View, Text } from 'react-native';
import React from 'react';
import ProductEdition from '../components/functionnal/ProductEdition/ProductEdition';
import { StaticScreenProps } from '@react-navigation/native';
import { IProductItem } from '../interfaces/IProducts';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../store/stock';
import { AppDispatch } from '../store/store';

const ProductEditor = ({
  route,
}: StaticScreenProps<{ product: IProductItem }>) => {
  const d:AppDispatch = useDispatch();
  return (
    <ProductEdition
      product={route.params.product}
      onSubmit={(product:IProductItem) => {
        d(updateProduct(product));
      }}
    />
  );
};

export default ProductEditor;
