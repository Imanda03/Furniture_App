import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../utils/color';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    borderWidth: 1,
  },
  Image: {
    width: '100%',
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '500',
    color: colors.black,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
  },
  descrisption: {
    color: colors.textGrey,
    fontWeight: '300',
    marginVertical: 8,
  },
  bookmarkContainer: {
    backgroundColor: colors.lightGray,
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
  },
  backContainer: {
    backgroundColor: colors.white,
    padding: 8,
    margin: 24,
    borderRadius: 8,
    marginRight: 16,
    position: 'absolute',
  },

  btnContainer: {
    padding: 25,
    gap: 5
  },
  modalContainer: {
    padding: 2,
    // margin: 4,
    borderRadius: 8,
    marginRight: 24,
    marginLeft: 24,
  },
  orText: {
    margin: 10,
    fontSize: 24,
    fontWeight: '500',
    color: colors.white,
    textAlign: 'center'
  }
});
