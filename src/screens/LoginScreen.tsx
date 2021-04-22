import * as React from 'react';
import {View, Text, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

function LoginScreen() {
  const dispatch = useDispatch()
  return (
    <View>
      <Button title="Tambah" onPress={() => {dispatch(login("test"))}} />
    </View>
  );
}

export default LoginScreen;
