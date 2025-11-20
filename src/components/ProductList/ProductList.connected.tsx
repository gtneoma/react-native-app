import React, { useEffect, useState } from 'react';
import ProductListUnconnected from './ProductList';
import store from '../../store/store';
interface IProductListProps {
    height?: number;
  }
const ProductList = (props:IProductListProps) => {
  const [products, setproducts] = useState<Array<IProductListItem>>([]);
  useEffect(() => {
    setproducts(store.getState().stock.products);
    store.subscribe(() => {
      setproducts(store.getState().stock.products);
    });
  }, []);
  return (
    <ProductListUnconnected {...props} products={products} />
  );
};

export default ProductList;