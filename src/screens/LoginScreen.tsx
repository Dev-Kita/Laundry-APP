import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
// import {login} from '../services/userService';

function LoginScreen() {
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        title="Tambah"
        onPress={() => {
          // dispatch(login('admin', '123'));
        }}
      />
    </View>
  );
}

export default LoginScreen;
