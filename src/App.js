import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigations/AuthNavigator';
import DashboardNavigator from './navigations/DashboardNavigator'
import navigationTheme from './navigations/navigationTheme';

import AuthContext from './auth/context';
import authStorage from './auth/storage';

import Permissions from './components/Permissions';

const App = () => {

  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  useEffect(() => {
    restoreUser();
    Permissions();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <DashboardNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;