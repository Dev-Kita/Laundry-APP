import * as React from 'react';
import { View } from 'native-base';
import { Text } from 'react-native';
import ContextWrapper from './context/ContextWrapper';
import Route from './Route';

function App() {
  return (
    <View>
      <Text>rTitle</Text>
    </View>
  )
  return (
    <ContextWrapper>
      <Route />
    </ContextWrapper>
  );
}

export default App;
