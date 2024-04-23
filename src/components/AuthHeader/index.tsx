import {View, Text, Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {colors} from '../../utils/color';

interface AuthHeaderInterface{
  title: string;
  onBackPress?: (value: any) => void
}

const AuthHeader = ({title, onBackPress}: AuthHeaderInterface) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <AntDesign name="arrowleft" size={26} color={colors.blue} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
