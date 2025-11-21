import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { IProductItem } from '../../../../interfaces/IProducts';
import store from '../../../../store/store';
interface IProductListProps {
  products: Array<IProductItem>;
  onProductViewSelected:(product:IProductItem)=>void;
  height?: number;
}

const ProductList = ({products,onProductViewSelected, height = 350 }: IProductListProps) => {
  
  return (
    <ScrollView style={{ height: height }}>
      {products.map(item => (
        <ProductListItem produit={item} key={item.id} onProductViewSelected={onProductViewSelected} />
      ))}
    </ScrollView>
  );
};


export default ProductList;