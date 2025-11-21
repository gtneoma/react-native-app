import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface INumericUpDownProps {
  value: number;
  step?: number;
  min?: number;
  max?: number;
  onValueChange: (value: number) => void;
}
const NumericUpDown = ({
  value,
  onValueChange,
  max = 100,
  min = 0,
  step = 1,
}: INumericUpDownProps) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[style.button, style.leftButton]}
        onPress={() => {
          const newValue = value - step;
          if (newValue >= min) {
            onValueChange(newValue);
          }
        }}
      >
        <Text>-</Text>
      </TouchableOpacity>
      <TextInput style={style.textInput} keyboardType={Number(step.toFixed(0))===step?'number-pad':'decimal-pad'} editable={false} value={value.toString()} />
      <TouchableOpacity
        style={[style.button, style.rightButton]}
        onPress={() => {
          const newValue = value + step;
          if (newValue <= max) {
            onValueChange(newValue);
          }
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    flexDirection: 'row',
  
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#ACACAC',
    color: 'black',
    width: 17,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightButton: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textInput: {
    flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    height: 30,
    padding: 0,borderWidth:1,borderColor:'#ACACAC'
  },
});
export default NumericUpDown;
