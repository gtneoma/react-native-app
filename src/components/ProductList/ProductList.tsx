import { ScrollView } from 'react-native'
import React from 'react'
import ProductListItem from '../ProductListItem/ProductListItem'
import { IProductListItem } from '../../interfaces/IProducts'

interface IProductListProps {
    products: Array<IProductListItem>;
    height?: number;
}
const ProductList = ({ products, height = 350}: IProductListProps) => {
  return (
    <ScrollView style={{ height: height }}>
              {products.map(item => (
                <ProductListItem produit={item} key={item.id} />
              ))}
            </ScrollView>
  )
}

export default ProductList