import { View } from 'react-native';
import React from 'react';
import Product from '../components/ui/Products/Product';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface IProductViewerProps {
  id: number;
}
const ProductViewer = ({ id }: IProductViewerProps) => {
  const product = useSelector((state: RootState) => {
    return state.stock.products.find(prod => prod.id === id);
  });
  return (
    <View>
      <Product product={product} onEditClick={() => {}} />
    </View>
  );
};

export default ProductViewer;