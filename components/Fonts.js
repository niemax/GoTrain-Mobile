import React, { useState } from 'react';
import { useFonts,  } from '@expo-google-fonts/raleway';
import AppLoading from 'expo-app-loading';


export const Fonts = () => {
    const [isLoaded] = useFonts({
        InterBlack: require('./assets/fonts/Inter-Black.ttf')
      });

      if (!isLoaded) {
          return <AppLoading />;
      }
}
