import * as React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import TextInput from './TextInput';
import { MyColors } from '../../utils/theme';
import { login } from '../../actions/AuthAction';
import { ContextAuth } from '../../context/ContextAuth';
import styles from '../login/loginStyle';


function LoginScreen() {
  const { dispatch } = React.useContext(ContextAuth);
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async () => {
    const payload = { username, password }
    login(dispatch, payload);
  }

  return (
    <View style={[styles.container, { justifyContent: 'space-between' }]}>
      <View>
        <Text style={styles.topTitle}>Masuk</Text>
        <Text style={styles.subTitle}>Masuk untuk menikmati seluruh fitur dari Laundry Kita</Text>
      </View>

      <View style={styles.bottomPart}>
        <View style={{ width: '100%', marginBottom: 25 }}>
          <TextInput label="Email" text={username} onChangeText={setUsername} />
          <TextInput label="Password" text={password} onChangeText={setPassword} secureTextEntry={true} />
        </View>
        <Button onPress={handleSubmit} text="Mulai" />
        <Text style={styles.atauText}>atau</Text>
        <Button onPress={() => { handleSubmit() }} text="Daftar" buttonStyle={{ backgroundColor: '#FFFFFF' }} textStyle={{ color: MyColors.gray2 }} />
      </View>
    </View>
  );
}




export default LoginScreen;