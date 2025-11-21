import { View, Text, Image, StyleSheet, Button } from 'react-native';
import React from 'react';
import { IProductItem } from '../../../../interfaces/IProducts';

interface IProductListItemProps {
  produit: IProductItem;
  onProductViewSelected: (product: IProductItem) => void;
  onProductAddCartSelected: (product: IProductItem) => void;
}
const ProductListItem: React.FC<IProductListItemProps> = ({
  produit,
  onProductViewSelected,
  onProductAddCartSelected,
}) => {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={{ uri: produit.img }} style={style.image} />
      </View>
      <View style={style.textContainer}>
        <Text style={style.text}>
          Nom:<Text style={style.textValue}>{produit.name}</Text>
        </Text>
        <Text style={style.text}>
          Prix:<Text style={style.textValue}>{produit.prix}€</Text>
        </Text>

        <Text style={style.text}>
          Stock:
          <Text
            style={[
              style.textValue,
              produit.stock > 0 ? style.stockPositive : style.stockNull,
            ]}
          >
            {produit.stock}
          </Text>
        </Text>
        {produit.stock > 0 && (
          <Button
            title="Ajouter au panier"
            color={'#FF0BAE'}
            onPress={() => onProductAddCartSelected(produit)}
          />
        )}
        <Button
          title="voir Produit"
          onPress={() => {
            onProductViewSelected(produit);
          }}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
  },
  imageContainer: {
    padding: 5,
  },
  textContainer: {
    flexGrow: 1,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  image: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  text: {},
  textValue: {
    fontWeight: '900',
    fontSize: 14,
  },
  stockPositive: {
    color: 'green',
  },
  stockNull: {
    color: 'red',
    fontSize: 10,
  },
});
export default ProductListItem;
