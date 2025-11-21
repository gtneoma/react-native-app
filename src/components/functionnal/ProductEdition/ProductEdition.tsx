import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native';
import React from 'react';

import { IProductItem } from '../../../interfaces/IProducts';

interface IProductProps {
  product: IProductItem;
  onSubmit: () => void;
  onCancel: () => void;
}
const ProductEdit = ({ product, onSubmit, onCancel }: IProductProps) => {
  return (
    <>
      <Text style={[style.center, style.big, style.underline]}>
        Edition article
      </Text>
      <View style={style.container}>
        <View style={style.left}>
          <View style={{ width: '100%' }}>
            <Text style={style.center}>Nom</Text>
            <TextInput style={[style.center, style.textValue]} />
          </View>
          <View>
            <Text style={style.center}>Prix</Text>
            <TextInput
              keyboardType="decimal-pad"
              style={[style.center, style.textValue]}
            />
          </View>
          <View>
            <Text style={style.center}>Stock</Text>
            <TextInput style={[style.center, style.textValue]} />
          </View>
          <View>
            <Text style={style.center}>Image url</Text>
            <TextInput style={[style.center, style.textValue]} />
          </View>
        </View>
        <View>
          <Image source={{ uri: product.img }} style={style.image} />
        </View>
      </View>
      <Button title="Annuler" color="#f194ff" onPress={onCancel} />
      <Button title="Valider" color="#ADF0A8" onPress={onSubmit} />
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
  textValue: {
    fontWeight: 'bold',
    fontSize: 14,
    borderWidth: 1,
    padding: 5,
    width: '100%',
  },
  big: { fontSize: 18, fontWeight: 'bold' },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  underline: { textDecorationLine: 'underline' },
});
export default ProductEdit;
