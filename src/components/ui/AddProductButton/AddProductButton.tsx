import { Button } from 'react-native';
import React from 'react';
import store from '../../../store/store';
import { addProductToStock } from '../../../store/stock';
interface IAddProductButtonProps {
  onClick: () => void;
}
const AddProductButton = (props: IAddProductButtonProps) => {
  return <Button title="add empty product" onPress={props.onClick} />;
};

export const AddProductButtonConnected = () => {
  const dispatch = store.dispatch;
  return (
    <AddProductButton
      onClick={() => {
        dispatch(
          addProductToStock({
            name: 'Produit vide',
            prix: 0,
            stock: 0,
            img: '',
            id: Math.random() * 100000,
          }),
        );
      }}
    />
  );
};

export default AddProductButton;
