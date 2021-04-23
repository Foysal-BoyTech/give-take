import React from 'react';
import { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.jpg')} />
      <AppTextInput
        autoCaplitalize="none"
        editable={true}
        icon="email"
        autoCorrect={false}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        defaultValue={email}
      />
      <AppTextInput
        autoCaplitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"
        defaultValue={password}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
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
