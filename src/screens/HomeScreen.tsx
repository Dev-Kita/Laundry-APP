import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MyColors, MyTheme } from '../utils/theme';



function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>Juliana Laundry</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyTheme.colors.background,
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  textName: {
    fontFamily: 'inter',
    fontWeight: '700',
    color: MyColors.gray2,
    lineHeight: 24,
    fontSize: 24
  }
})

export default HomeScreen;
