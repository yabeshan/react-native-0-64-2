import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

const App = () => (
  <View style={{margin:50}}>
    <Text>Test</Text>
    <Image source={require('./house.jpeg')}/>
  </View>
)

export default App;
