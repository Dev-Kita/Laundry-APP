import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from '../redux/counterSlice';

function HomeScreen({navigation}: any) {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{count}</Text>
      <Button title="Tambah" onPress={() => dispatch(increment())} />
    </View>
  );
}

export default HomeScreen;
