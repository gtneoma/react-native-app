import { Button, View } from 'react-native';
import React from 'react';
import Product from '../components/ui/Products/Product';
import { IProductItem } from '../interfaces/IProducts';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPramaList } from '../navigation/NavigationStack';

export type IProductViewerProps = { product: IProductItem };
type IProps = NativeStackScreenProps<RootStackPramaList,'ProductView'>
const ProductViewer = ({ route }:IProps) => {
  const n = useNavigation<NativeStackNavigationProp<RootStackPramaList>>();
  return (
    <View>
      <Product product={route.params.product} onEditClick={() => {}} />

      <Button
        title="Editer"
        onPress={() => {
          n.navigate('ProductEditor', {
            product: route.params.product,
          });
        }}
      />
    </View>
  );
};

export default ProductViewer;
