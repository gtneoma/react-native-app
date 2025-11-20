/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme, View, Text, Alert} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Button from './components/Button/Button';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
    <Text>
        Hello World !
    </Text>
      <Button bgcolor='skyblue' children="test 1" obligatoire={undefined} onButtonClick={() => {
        Alert.alert('cliqué')
      }}/>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
