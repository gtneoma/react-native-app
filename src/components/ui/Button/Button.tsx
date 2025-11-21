import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import style from './Button.style';
interface IButtonProps {
  children: any;
  meta?: string;
  bgcolor: 'tomato' | 'skyblue' | string;
  onButtonClick: (arg:GestureResponderEvent) => undefined;
}
const Button: React.FC<IButtonProps> = ({
  children,
  meta = 'defaultValue',
  bgcolor = 'tomato',
  onButtonClick,
}) => {
  console.log(meta);
  return (
    <TouchableOpacity
      style={[style.container, { backgroundColor: bgcolor }]}
      onPress={onButtonClick}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
