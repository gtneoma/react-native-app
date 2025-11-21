import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';


const Home = () => {
  return (
    <View>
      <Text>Bienveue</Text>
      <View style={style.buttonView}>
        <Button title='Voir produits' color='#F7AB8E' onPress={()=>{
            /* Navigation logic to Products screen */
        }} />
      </View>
      <View style={style.buttonView}>
        <Button title='Voir panier' onPress={()=>{
            /* Navigation logic to Products cart */
        }} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  buttonView: {
    padding: 10,
  },
});
export default Home;