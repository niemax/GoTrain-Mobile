import React from 'react';
import Text from '../components/Text';
import { Feather } from '@expo/vector-icons';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast, { BaseToast } from 'react-native-toast-message';

Appearance.getColorScheme();

export const toastConfig = {
  success: ({ text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: '#78E7C7', backgroundColor: 'white', width: '100%', height: 65 }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: 'black',
        opacity: 0.9,
      }}
      text2Style={{
        color: 'white',
        fontSize: 17,
        fontFamily: 'MontserratBold',
      }}
      text2={text2}
    />
  ),
  error: ({ text1, text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'red', backgroundColor: 'white', width: '100%', height: 65 }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.9,
      }}
      text2Style={{
        color: 'white',
        fontSize: 17,
        fontFamily: 'MontserratBold',
      }}
      text2={text2}
    />
  ),
};
