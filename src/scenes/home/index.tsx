import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { logout } from '../../actions/AuthAction';
import { AuthContext } from '../../context/AuthContext';
import styles from './homeStyle';

function HomeScreen({ navigation }: any) {
  const { dispatch } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.textName, { marginBottom: 200 }]}>Juliana Laundry</Text>
      <Button title="logout" onPress={() => { logout(dispatch) }} />
    </View>
  );
}


export default HomeScreen;
