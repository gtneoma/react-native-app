import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { IProductItem } from '../../../../interfaces/IProducts';
import store from '../../../../store/store';
import { useNavigation } from '@react-navigation/native';
interface IProductListProps {
  products: Array<IProductItem>;
  onProductViewSelected?: (product: IProductItem) => void;
  height?: number;
}

const ProductList = ({
  products,
  height = 350,
}: IProductListProps) => {
  const nav = useNavigation();
  return (
    <ScrollView style={{ height: height }}>
      {products.map(item => (
        <ProductListItem
          produit={item}
          key={item.id}
          onProductViewSelected={(product: IProductItem) => {
            nav.navigate('ProductView' as never, { product: product });
          }} 
          onProductAddCartSelected={() => {}}
        />
      ))}
    </ScrollView>
  );
};

export default ProductList;
