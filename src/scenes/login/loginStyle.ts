import {StyleSheet} from 'react-native';
import {MyTheme, MyColors} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyTheme.colors.background,
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  topTitle: {
    fontSize: 24,
    color: MyColors.gray2,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 18,
    color: MyColors.gray2,
    fontWeight: '400',
    lineHeight: 18,
  },
  bottomPart: {
    alignItems: 'center',
  },
  atauText: {
    fontSize: 18,
    color: MyColors.gray2,
    fontWeight: '500',
    lineHeight: 18,
    marginVertical: 10,
  },
});

export default styles;
