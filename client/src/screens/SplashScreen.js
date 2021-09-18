import React, { useEffect } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import { SplashScreenContainer, SplashAdditionalContainer } from '../utils/Styling';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.navigate('Kotisivu');
        } else {
          navigation.navigate('Login');
        }
      });
    }, 2000);
  }, []);

  return (
    <SplashScreenContainer>
      <SplashAdditionalContainer>
        <Image style={{ height: 200, width: 300 }} source={require('../assets/icons/brand.png')} />
      </SplashAdditionalContainer>
    </SplashScreenContainer>
  );
}
