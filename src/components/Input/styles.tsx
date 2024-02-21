import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: colors.blue,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    // borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flex: 1,
    color: colors.black,
    fontSize: 16,
  },
  eye: {
    marginHorizontal: 16,
  },
  arrow: {
    marginHorizontal: 16,
  },
  placeholder: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    flex: 1,
    color: colors.gray,
    fontSize: 16,
  },
  modalWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  heraderTitle: {
    marginBottom: 16,
    fontSize: 16,
    color: colors.black,
  },
  optionText: {
    paddingVertical: 4,
    fontSize: 15,
    color: colors.black,
    width: '100%',
  },
  selectedOption: {
    color: colors.blue,
    fontWeight: 'bold',
  },
});
