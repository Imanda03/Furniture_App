import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../utils/color';

interface HeaderProps {
  title: string;
  image: any;
  price: string;
  onPress?: () => void;
  icon?: any;
}

const FavouriteItem: React.FC<HeaderProps> = ({
  title,
  image,
  onPress,
  price,
  icon,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <Entypo
        style={styles.icon}
        name={icon || 'circle-with-cross'}
        size={24}
        color={colors.blue}
      />
    </Pressable>
  );
};
export default React.memo(FavouriteItem);
