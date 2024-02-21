import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    marginHorizontal: 24,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  title: {
    color: colors.textGrey,
    paddingVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  price: {
    color: colors.black,
    paddingBottom: 8,
  },
  icon: {
    marginLeft: 8,
  },
  content: {
    flex: 1,
  },
});
