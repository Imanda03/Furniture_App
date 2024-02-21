import {Alert, ScrollView, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/checkbox';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {signup} from '../../../utils/backendCalls';
import {UserContext} from '../../../../App';

const SignUp = ({navigation}: any) => {
  const [checked, setCHecked] = useState(false);
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {user, setuser} = useContext<any>(UserContext);

  const onSignIn = () => {
    navigation.navigate('Signin');
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onChange = (key: any, value: any) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onSubmit = async () => {
    try {
      if (
        !values?.fullName ||
        !values?.email ||
        !values?.password ||
        !values?.confirmPassword
      ) {
        Alert.alert('All fields are required!');
        return;
      }

      if (values?.password !== values?.confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }
      if (checked) {
        Alert.alert('Please agree to the terms');
        return;
      }

      const token = await signup(values);
      console.log('token' + token);
      setuser({token});
    } catch (err: any) {
      console.log('Error >>' + err.message);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />

        <Input
          value={values.fullName}
          onChangeText={v => onChange('fullName', v)}
          isPassword={false}
          label="Name"
          placeholder="Person"
        />
        <Input
          value={values.email}
          onChangeText={v => onChange('email', v)}
          isPassword={false}
          label="Email"
          placeholder="example@gmail.com"
        />
        <Input
          value={values.password}
          onChangeText={v => onChange('password', v)}
          isPassword
          label="Password"
          placeholder="***********"
        />

        <Input
          value={values.confirmPassword}
          onChangeText={v => onChange('confirmPassword', v)}
          isPassword
          label="Confirm Password"
          placeholder="***********"
        />

        <View style={styles.agreeRow}>
          <CheckBox checked={checked} onCheck={setCHecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms </Text> &{' '}
            <Text style={styles.agreeTextBold}>Privacy</Text>
          </Text>
        </View>
        <Button style={styles.button} title="Sign Up" onPress={onSubmit} />

        <Seperator title="Or sign up with" />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Already have an account?
          <Text style={styles.footerLink} onPress={onSignIn}>
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
