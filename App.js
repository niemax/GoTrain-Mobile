import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStackNavigator from './navigation/AuthStackNavigator'
import * as firebase from 'firebase';
import configKeys from './config/Firebase'
import * as Font from 'expo-font';

  
/**/ 
  export default class App extends React.Component {
    state = {
      fontsLoaded: false,
    };
  
    async loadFonts() {
      await Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
        MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
        MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),



        // Any string can be used as the fontFamily name. Here we use an object to provide more control
        'MontserratMedium': {
          uri: require('./assets/fonts/Montserrat-Medium.ttf'),
          display: Font.FontDisplay.FALLBACK,
        },
      });
      this.setState({
        fontsLoaded: true
      });
    }

    componentDidMount() {
      this.loadFonts();
    }

    render() {
      if (!firebase.apps.length) {
        console.log('Connected with Firebase')
        firebase.initializeApp(configKeys);
      }

      if (this.state.fontsLoaded) {
        return ( 
          <SafeAreaProvider>
          <MainStackNavigator />
          </SafeAreaProvider>
        )
      } else {
        return null;
      }
    }
    }
    



