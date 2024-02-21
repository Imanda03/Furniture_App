import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  item: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.blue,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray,
    borderStyle: 'dotted',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightGray,
    color: colors.blue,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPlus: {
    color: colors.white,
    fontSize: 28,
    marginTop: -4,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 16,
  },
  imageCont: {
    flexDirection: 'row',
    marginTop: 8,
    marginRight: 8,
  },
  delete: {
    marginLeft: -16,
    marginTop: -12,
  },
  textarea: {
    minHeight: 150,
    paddingTop: 24,
  },
  button: {
    marginBottom: 160,
  },
});
