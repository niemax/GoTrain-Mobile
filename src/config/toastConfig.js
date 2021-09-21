import React from 'react';
import { BaseToast } from 'react-native-toast-message';
import { Feather } from '@expo/vector-icons';

const icon = <Feather name="alert-triangle" size={24} color="black" />;
export const toastConfig = {
  success: ({ text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: '#338467', backgroundColor: '#141314', width: '100%', height: 80 }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: '#141314',
        opacity: 0.9,
      }}
      text2Style={{
        color: 'white',
        fontSize: 17,
        fontFamily: 'MontserratSemiBold',
      }}
      text2={text2}
    />
  ),
  error: ({ text1, text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'red', backgroundColor: '#141314', width: '100%', height: 65 }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        width: '100%',
        backgroundColor: '#141314',
        opacity: 0.9,
      }}
      text2Style={{
        color: 'white',
        fontSize: 17,
        fontFamily: 'MontserratSemiBold',
      }}
      text2={text2}
    />
  ),
};
