import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Button from '../../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

const Splash = ({navigation}: any) => {
  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../../assets/SplashPicture.png')}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>You'll Find </Text>
          <Text style={[styles.title, styles.innerTitle]}> All you need</Text>
          <Text style={styles.title}>Here!</Text>
        </View>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <Button style={{}} onPress={onSignUp} title="SignUp" />
        </View>

        <Pressable hitSlop={20} onPress={onSignIn}>
          <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
