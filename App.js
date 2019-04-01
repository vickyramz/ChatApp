/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './Components/Main';
import Chat from './Components/Chat';
import {
  createStackNavigator,createAppContainer
} from 'react-navigation'
 // Create the navigator
const RootStack = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});
// Export it as the root component

const AppContainer = createAppContainer(RootStack);
export default AppContainer;
