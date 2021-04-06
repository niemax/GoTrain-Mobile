import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './navigation/AuthStackNavigator'
import * as firebase from 'firebase';
import configKeys from './config/Firebase'


export default function App() {

    if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(configKeys);
  }

  return (
      <MainStackNavigator />
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
