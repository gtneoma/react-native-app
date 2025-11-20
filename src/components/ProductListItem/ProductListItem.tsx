import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import style from './ProductListItem.style'

interface IProductListItem {
  id?: number;
  name: string;
  prix: number;
  stock: number;
  img: string;
}
interface IProductListItemProps{
    produit:IProductListItem
}
const ProductListItem: React.FC<IProductListItemProps> = props => {
  return (
    <TouchableOpacity style={style.container}>
        <Image
        style={style.image}
        source={{
          uri: props.produit.img,
        }}
      />
      <View style={style.text}>
      <Text>Nom : {props.produit.name}</Text>
      <Text>Prix : {props.produit.prix}</Text>
      <Text style={props.produit.stock > 0 ? style.stockPositive : style.stockNull}>Stock : {props.produit.stock}</Text>
      {props.produit.stock > 0 && <Button title="Ajouter au panier" />}
      </View>
    </TouchableOpacity>
  );
};

export default ProductListItem;