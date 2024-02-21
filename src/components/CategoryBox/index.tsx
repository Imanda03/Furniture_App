import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../utils/color';

interface HeaderProps {
  title: string;
  image: string;
  onPress?: () => void;
  isFirst?: Boolean;
  isSelected?: any;
}

const CategoryBox: React.FC<HeaderProps> = ({
  title,
  image,
  onPress,
  isFirst,
  isSelected,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isFirst ? {marginLeft: 24} : {}]}>
      <View
        style={[
          styles.imageContainer,
          isSelected ? {backgroundColor: colors.blue} : {},
        ]}>
        <Image style={styles.image} source={{uri: image}} />
      </View>

      <View>
        <Text
          style={[
            styles.title,
            isSelected ? {color: colors.blue, fontWeight: '500'} : {},
          ]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};
export default React.memo(CategoryBox);
