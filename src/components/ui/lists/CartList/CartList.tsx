import { View, ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';

import { TProductCart } from '../../../../interfaces/IProducts';
import CartListItem from '../CartListItem/CartListItem';

interface ICartListItemProps {
  products: Array<TProductCart>;
  addQuantityProductInCartById: (product: TProductCart) => void;
  removeQuantityProductInCartById: (id: number) => void;
}
const CartList = ({ products, removeQuantityProductInCartById,addQuantityProductInCartById }: ICartListItemProps) => {
  return (
    <View>
      <ScrollView style={style.container}>
        {products.map(product => {
          return (
            <CartListItem
              product={product}
              key={product.id}
              onRemoveQuantityChange={() => {
                if (product.id !== undefined) {
                  removeQuantityProductInCartById(product.id);
                }
              }}
              onAddQuantityChange={() =>
               addQuantityProductInCartById(product)
              }
            />
          );
        })}
      </ScrollView>
      <View style={{ alignItems: 'flex-end', marginRight: 10, marginTop: 10 }}>
        <Text>
          Total :
<Text style={style.total}>
          {products
            .reduce((acc, product) => acc + product.prix * product.quantity, 0)
            .toFixed(2)}{' '}
          €
        </Text>
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    maxHeight: 300,
  },
  horizontal: {
    flexDirection: 'row',
  },
  total:{
    paddingHorizontal:10,
    fontWeight:'bold',
    fontSize:18,
    paddingLeft:20
  }
});
export default CartList;
