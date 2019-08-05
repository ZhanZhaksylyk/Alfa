import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';

import HomeScreen from './screens/HomeScreen.js';
import HistoryScreen from './screens/HistoryScreen.js';
import ReasonScreen from './screens/reasonScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import { createAppContainer, createStackNavigator} from 'react-navigation'; 
import NavigationService from './navigation/NavigationService';

const RootStack = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        gesturesEnabled: false
      }
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {  
        header: null
      }
    },
    Reason: ReasonScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      headerTransparent:true,
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  async componentDidMount(){
    var server='192.168.1.15';
    await AsyncStorage.setItem('server',server);
    var s=await AsyncStorage.getItem('server');
    console.log(s);
  }
  render() {
    return <AppContainer 
            ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>;
  }
}

