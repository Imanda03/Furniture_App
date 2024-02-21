import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface ButtonProps {
  title: string;
  onPress?: (value: any) => void;
  style?: any;
}

const Button = ({title, onPress, style}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
