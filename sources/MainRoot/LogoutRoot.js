import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Icons from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Account from '../screens/loggedOutScreens/Account';
import HomeScreen from '../screens/loggedOutScreens/HomeScreen';
import Mall from '../screens/loggedOutScreens/Mall';
import Notif from '../screens/loggedOutScreens/Notif';
import Timeline from '../screens/loggedOutScreens/Timeline';

import Chat from '../screens/loggedOutScreens/Chat';
import AuthScreen from '../screens/loggedOutScreens/AuthScreen';
import DetailScreen from '../screens/loggedOutScreens/DetailScreen';
import DetailTimeline from '../screens/loggedOutScreens/DetailTimeline';

const RootLogin = createBottomTabNavigator({

  Homescreen : {
    screen : HomeScreen,
    navigationOptions: {
      tabBarIcon : ({ tintColor,focused }) => (
        <MaterialCommunityIcon name =  {focused ? 'home' : 'home-outline'} color={tintColor} size = {30} />
        )
    }
  },
  Timelinescreen : {
    screen : Timeline,
    navigationOptions:{
      tabBarIcon : ({ tintColor, focused }) => (
        <MaterialCommunityIcon name = {focused ? 'arrange-bring-forward' : 'vector-arrange-above'} color={tintColor} size = {30} />
        )
    }
  },
  Mallscreen : {
    screen : Mall,
    navigationOptions:{
      
      tabBarIcon : ({ tintColor, focused}) => (
        <MaterialCommunityIcon name = {focused ? 'cart' : 'cart-outline'} color={tintColor} color={tintColor} size = {30} />
      )}
  },
  Notifscreen : {
    screen : Notif,
    navigationOptions:{
      tabBarIcon : ({ tintColor,focused }) => (
        <FontAwesomeIcon name = {focused ? 'bell' : 'bell-o'} color={tintColor} size = {30} />
        )
    }
  },
  Accountscreen : {
    screen : Account,
    navigationOptions:{
      tabBarIcon : ({ tintColor, focused}) => (
        <FontAwesomeIcon name = {focused ? 'user' : 'user-o'} color={tintColor} size = {30} />
        )
    }
  }
}, {
  initialRouteName : 'Homescreen',
  tabBarPosition : 'bottom',
  swipeEnabled : false ,
  tabBarOptions: {
    showLabel : false,
    activeTintColor: '#FB5922',
    inactiveTintColor : '#ccc',
    inactiveBackgroundColor : '#fff',
    style: {
      backgroundColor: '#fff',
    },
  }
});


const LoggedOutRoot = createStackNavigator ({
  DetailScreen : {
    screen : DetailScreen,
  },
  ChatScreen : {
    screen : Chat
  },
  DetailTimeline : {
    screen : DetailTimeline
  },
  AuthScreen : {
    screen : AuthScreen
  },
  Tabs : {
    screen : RootLogin
  }
}, {
  initialRouteName : 'Tabs',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default LoggedOutRoot