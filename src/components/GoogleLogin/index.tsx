import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const GoogleLogin = () => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://pngimg.com/d/letter_g_PNG61.png',
        }}
      />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
