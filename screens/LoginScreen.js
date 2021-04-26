import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import ApiService from '../apiService/apiService';
import Screen from '../components/Screen';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen({ navigation }) {
  const handler = (email) => {
    ApiService.checkUser(email);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.jpg')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handler(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCaplitalize="none"
          editable={true}
          icon="email"
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
        />

        <AppFormField
          autoCaplitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          name="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 80,
  },
});

export default LoginScreen;
