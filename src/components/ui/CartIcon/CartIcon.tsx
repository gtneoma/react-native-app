import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './CartIcon.style';

interface ICartIconProps {
  quantity: number;
}
const CartIcon = ({quantity}: ICartIconProps) => {
  return (
    <View>
      <Image
        source={require('./trolley.png')}
        style={style.icon}
      />
      {quantity > 0 && (
        <View style={style.cartIconContainer}>
          <Text style={style.quantity}>
            {quantity > 999 ? '999+' : quantity}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CartIcon;
