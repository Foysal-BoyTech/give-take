import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from './navigation/navigationTheme';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const [user, setUser] = useState();

  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? (
        <AppNavigator user={user} />
      ) : (
        <AuthNavigator setUser={setUser} />
      )}
    </NavigationContainer>
  );
}
