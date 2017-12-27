import React from 'react';
import { Text, View } from 'react-native';
import Colors from './constants/Colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import { HomeScreen } from './src/screens';

EStyleSheet.build(Colors)


export default class App extends React.Component {
  state = { }
  render() {
    return (
      <HomeScreen />
    )
  }
}
