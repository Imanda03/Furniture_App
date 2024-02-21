import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 16,
    color: colors.textGrey,
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
});
