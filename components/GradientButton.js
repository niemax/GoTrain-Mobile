import GradientButton from 'react-native-gradient-buttons';
import React from 'react';
import Text from '../components/Text';
import { Ionicons } from '@expo/vector-icons'; 


export function GradientButtonLib({ teksti, ...props }) {
    return (
        <GradientButton blueViolet
        text=
        {
        <>
        <Ionicons name="checkmark-outline" size={26} color="white" />
        <Text style={{fontFamily: 'MontserratBold', color: '#fff'}} large>{teksti}</Text>
        </>
        
        }
        height={54}
        width={320}
        radius={25}
        {...props}
        />
    )
}

