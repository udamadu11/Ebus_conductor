import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View,Text} from 'react-native';
 import AuthNavigator from './navigations/AuthNavigator';
// import navigationTheme from './navigations/navigationTheme';


class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    );
  }
};

export default App;