import { View, Text, Image, StyleSheet, Button, TextInput, Vibration } from 'react-native';
import React, { useState } from 'react';

import { IProductItem } from '../../../interfaces/IProducts';

interface IProductProps {
  product: IProductItem;
  onSubmit: (product:IProductItem) => void;
  onCancel?: () => void;
}
const ProductEdit = ({
  product,
  onSubmit,
  onCancel = () => {},
}: IProductProps) => {
  const [localProduct, setLocalProduct] = useState<IProductItem>(product);

  return (
    <>
      <Text style={[style.center, style.big, style.underline]}>
        Edition article
      </Text>
      <View style={style.container}>
        <View style={style.left}>
          <View style={{ width: '100%' }}>
            <Text style={style.center}>Nom</Text>
            <TextInput
              style={[style.center, style.textValue]}
              onChangeText={t => {
                setLocalProduct({ ...localProduct, name: t });
              }}
              value={localProduct.name}
            />
          </View>
          <View style={{ width: '100%' }}>
            <Text style={style.center}>Prix</Text>
            <TextInput
              keyboardType="decimal-pad"
              style={[style.center, style.textValue]}
              onChangeText={t => {
                if (!Number.isNaN(Number(t))) {
                  setLocalProduct({ ...localProduct, prix: Number(t) });
                }
                else if(!Number.isNaN(Number(t.substring(0,t.length-1)))){
                  setLocalProduct({ ...localProduct, prix: Number(t.substring(0,t.length-1)) });
                }
              }}
              value={localProduct.prix.toFixed(2).toString()}
            />
          </View>
          <View style={{ width: '100%' }}>
            <Text style={style.center}>Stock</Text>
            <TextInput
              style={[style.center, style.textValue]}
              keyboardType="numeric"
              onChangeText={t => {
                if (!Number.isNaN(Number(t))) {
                  setLocalProduct({ ...localProduct, stock: Number(t) });
                }
              }}
              value={localProduct.stock.toString()}
            />
          </View>
          <View style={{ width: '100%' }}>
            <Text style={style.center}>Image url</Text>
            <TextInput
              style={[style.center, style.textValue]}
              onChangeText={t => {
                setLocalProduct({ ...localProduct, img: t });
              }}
              value={localProduct.img}
            />
          </View>
        </View>
        <View style={style.right}>
          <Image source={{ uri: localProduct.img }} style={style.image} />
        </View>
      </View>
      <Button title="Annuler" color="#f194ff" onPress={onCancel} />
      <Button title="Valider" color="#ADF0A8" onPress={()=>{
        Vibration.vibrate(400);
        onSubmit(localProduct);
      }} />
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
    maxWidth: '60%',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  right: {
    alignItems: 'center',
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
