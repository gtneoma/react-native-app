import { View, Text } from 'react-native'
import React from 'react'
import CartList from '../components/ui/lists/CartList/CartList.connected'

const CartView = () => {
  return (
    <View>
      <CartList/>
    </View>
  )
}

export default CartView