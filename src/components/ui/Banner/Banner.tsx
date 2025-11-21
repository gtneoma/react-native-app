import { View, Text } from 'react-native';
import React from 'react';
import CartIcon from '../CartIcon/CartIcon.connected';
import { style } from './Banner.style';

const Banner = ({ text = 'Ma boutique' }) => {
  return (
    <View style={style.bannerContainer}>
      <View style={style.left}>
        <Text style={style.title}>{text}</Text>
      </View>
      <CartIcon/>
    </View>
  );
};

export default Banner;
