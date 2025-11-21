import { View, Text, Image, StyleSheet, Button } from 'react-native';
import React from 'react';

import { IProductItem } from '../../../interfaces/IProducts';

interface IProductProps {
  product: IProductItem;
  onEditClick?: () => void;
}
const Product = ({ product, onEditClick }: IProductProps) => {
  return (
    <>
      <Text style={[style.center, style.big, style.underline]}>
        Visionnage article
      </Text>
      <View style={style.container}>
        <View style={style.left}>
          <View>
            <Text style={style.center}>Nom</Text>
            <Text style={[style.center, style.textValue]}>{product.name}</Text>
          </View>
          <View>
            <Text style={style.center}>Prix</Text>
            <Text style={[style.center, style.textValue]}>
              {product.prix} €
            </Text>
          </View>
          <View>
            <Text style={style.center}>Stock</Text>
            <Text style={[style.center, style.textValue]}>{product.stock}</Text>
          </View>
        </View>
        <View>
          <Image source={{ uri: product.img }} style={style.image} />
        </View>
      </View>
      {onEditClick && (
        <Button title="Modifier" color="#f194ff" onPress={onEditClick} />
      )}
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  left: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  center: { textAlign: 'center' },
  textValue: { fontWeight: 'bold', fontSize: 14 },
  big: { fontSize: 18, fontWeight: 'bold' },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  underline: { textDecorationLine: 'underline' },
});
export default Product;
