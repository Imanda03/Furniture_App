import { ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = ({ navigation }: any) => {
  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />

        <Input
          isPassword={false}
          label="Email"
          placeholder="example@gmail.com"
        />
        <Input isPassword label="Password" placeholder="***********" />

        <Button
          style={styles.button}
          title="Sign In"
          onPress={console.log('pressed')}
        />

        <Seperator title="Or sign up with" />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Don't have an sccount?
          <Text style={styles.footerLink} onPress={onSignUp}>
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
