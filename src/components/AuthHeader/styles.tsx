import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 54,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
});
