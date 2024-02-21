import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    paddingVertical: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.gray,
  },
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
});
