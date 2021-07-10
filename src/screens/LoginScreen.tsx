import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { MyTheme, MyDarkTheme, MyColors } from '../utils/theme';

function LoginScreen() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
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
        <Button onPress={() => { console.warn('test') }} text="Daftar" buttonStyle={{ backgroundColor: '#FFFFFF' }} textStyle={{ color: MyColors.gray2 }} />
      </View>
    </View>
  );
}

const handleSubmit = () => {
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyTheme.colors.background,
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  topTitle: {
    fontSize: 24,
    color: MyColors.gray2,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 15
  },
  subTitle: {
    fontSize: 18,
    color: MyColors.gray2,
    fontWeight: '400',
    lineHeight: 18
  },
  // to do : refactor name
  bottomPart: {
    alignItems: 'center'
  },
  atauText: {
    fontSize: 18,
    color: MyColors.gray2,
    fontWeight: '500',
    lineHeight: 18,
    marginVertical: 10
  }
})

export default LoginScreen;
