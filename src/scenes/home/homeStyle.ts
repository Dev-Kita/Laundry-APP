import {StyleSheet} from 'react-native';
import {MyColors, MyTheme} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyTheme.colors.background,
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  textName: {
    fontFamily: 'inter',
    fontWeight: '700',
    color: MyColors.gray2,
    lineHeight: 24,
    fontSize: 24,
  },
});

export default styles;