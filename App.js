import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStackNavigator from './navigation/AuthStackNavigator'
import * as firebase from 'firebase';
import configKeys from './config/Firebase'


export default function App() {
    if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(configKeys);
  }

  return (
    <SafeAreaProvider>
      <MainStackNavigator />
    </SafeAreaProvider>
      
      
  )

}


