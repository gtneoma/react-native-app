import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackPramaList } from '../navigation/NavigationStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Home = () => {
  const navigation=useNavigation<NativeStackNavigationProp<RootStackPramaList>>();
  return (
    <View>
      <Text style={{textAlign:'center', marginTop:100, marginBottom:50, fontSize:40, textDecorationLine:'underline'}}>Bienveue</Text>
      <View style={style.buttonView}>
        <Button
          title="Voir produits"
          color="#F7AB8E"
          onPress={() => {
            /* Navigation logic to Products screen */
            navigation.navigate('Products' as never);
          }}
        />
      </View>
      <View style={style.buttonView}>
        <Button
          title="Voir panier"
          onPress={() => {
            /* Navigation logic to Products cart */
            navigation.navigate('Cart');
          }}
        />
        </View>
        <View style={style.buttonView}>
        <Button
          title="Camera"
           color={'aquamarine'}
          onPress={() => {
            /* Navigation logic to Products cart */
            navigation.navigate('Camera');
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  buttonView: {
    padding: 10,
    marginTop: 30,
  },
});
export default Home;
