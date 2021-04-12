import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStackNavigator from './navigation/AuthStackNavigator'
import * as firebase from 'firebase';
import configKeys from './config/Firebase'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';



  
/**/ 
  export default App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    

  
    async function loadFonts() {
      await Font.loadAsync({
        // Load the main font from static assets
        MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
        MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
        MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),

        
      });
      setFontsLoaded(true);
    }

    useEffect(() => {
      loadFonts();
    }, []);
   


      if (!firebase.apps.length) {
        console.log('Connected with Firebase')
        firebase.initializeApp(configKeys);
      }

      if (fontsLoaded) {
       
        return ( 
          
          <NavigationContainer >
         
          <SafeAreaProvider>
          <MainStackNavigator />
          
          </SafeAreaProvider>
          </NavigationContainer>
          
        )
      } else {
        return <AppLoading />
      }
    }
    


    const styles = StyleSheet.create({
      container: {
      },
      lightContainer: {
        backgroundColor: '#D0D0C0',
      },
      darkContainer: {
        backgroundColor: '#242C40',
      },
      lightThemeText: {
        color: '#242C40',
      },
      darkThemeText: {
        color: '#D0D0C0',
      },
    });
