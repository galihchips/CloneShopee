import React, { Component } from 'react';
import store from './sources/store';
import { Provider } from 'react-redux';

import { createSwitchNavigator } from 'react-navigation';

import LoggedInRoot from './sources/MainRoot/LoginRoot';
import LoggedOutRoot from './sources/MainRoot/LogoutRoot';
import AuthRoot from './sources/MainRoot/AuthRoot';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthRoot,
    LoggedIn: LoggedInRoot,
    LoggedOut: LoggedOutRoot,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}

export default App;