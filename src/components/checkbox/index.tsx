import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { colors } from '../../utils/color';

interface CheckBoxInterface {
  checked?: boolean;
  onCheck?: (isChecked: boolean) => void;
}

const CheckBox = ({ checked, onCheck }: CheckBoxInterface) => {
  return (
    <TouchableOpacity onPress={() => { if (onCheck) return onCheck(!checked) }} activeOpacity={0.6}>
      {checked ? (
        <Fontisto name="checkbox-passive" color={colors.blue} size={24} />
      ) : (
        <FontAwesome name="check-square" color={colors.blue} size={24} />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
