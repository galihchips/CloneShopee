import React, { Component } from 'react';

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icons from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Account from '../screens/loggedInScreens/Account';
import HomeScreen from '../screens/loggedInScreens/HomeScreen';
import Mall from '../screens/loggedInScreens/Mall';
import Notif from '../screens/loggedInScreens/Notif';
import Timeline from '../screens/loggedInScreens/Timeline';

import CourierScreen from '../screens/loggedInScreens/Courier';
import Checkout from '../screens/loggedInScreens/Checkout';
import CartScreen from '../screens/loggedInScreens/CartScreen';
import AuthScreen from '../screens/loggedInScreens/AuthScreen';
import DetailScreen from '../screens/loggedInScreens/DetailScreen';
import DetailTimeline from '../screens/loggedInScreens/DetailTimeline';

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

const LoggedInRoot = createStackNavigator ({
  DetailScreen : {
    screen : DetailScreen,
  },
  CheckoutScreen: {
    screen : Checkout
  },
  DetailTimeline : {
    screen : DetailTimeline
  },
  AuthScreen : {
    screen : AuthScreen
  },
  CourierScreen : {
    screen : CourierScreen
  },
  CartScreen : {
    screen : CartScreen
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

export default LoggedInRoot