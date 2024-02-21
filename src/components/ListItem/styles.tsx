import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 5,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 4,
  },
  content: {},
  title: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
  },
});
