import { View } from 'react-native';
import React from 'react';
import Product from '../components/ui/Products/Product';
import { IProductItem } from '../interfaces/IProducts';
import {StaticScreenProps} from '@react-navigation/native';
// interface IProductViewerProps {
//   route:
// }
const ProductViewer = ({route}: StaticScreenProps<{product:IProductItem}>) => {
  return (
    <View>
      <Product product={route.params.product} onEditClick={() => {}} />
    </View>
  );
};

export default ProductViewer;
