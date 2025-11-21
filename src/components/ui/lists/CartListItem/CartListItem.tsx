import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

import { TProductCart } from '../../../../interfaces/IProducts';
import NumericUpDown from '../../NumericUpDown/NumericUpDown';
interface ICartListItemProps {
  product: TProductCart;
  onRemoveQuantityChange: () => void;
  onAddQuantityChange: () => void;
}
const CartListItem = ({
  product,
  onAddQuantityChange,
  onRemoveQuantityChange,
}: ICartListItemProps) => {
  return (
    <View style={style.container}>
      <View style={style.left}>
        <Image src={product.img} style={style.img} />
      </View>
      <View style={style.right}>
        <View style={{flexGrow:1 , flexDirection:'row',alignContent:'center', justifyContent:'center'}}>
        <NumericUpDown
          value={product.quantity}
          onValueChange={value => {
            if (value !== product.quantity && value > product.quantity) {
              onAddQuantityChange();
            } else if (value !== product.quantity && value < product.quantity) {
              onRemoveQuantityChange();
            }
          }}
        />
        </View>
        <Text> X {product.prix}€ =<Text style={style.total}>{(product.prix * product.quantity).toFixed(2)}€</Text></Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#AFAFAA',
    marginTop: 10,
    flexDirection: 'row',
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  left: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 10,
    width: 90,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    alignContent: 'center',
    paddingVertical: 10,
    flexGrow: 3,
  },
  total:{
    paddingHorizontal:10,
    fontWeight:'bold',
    fontSize:16,
  }
});
export default CartListItem;
