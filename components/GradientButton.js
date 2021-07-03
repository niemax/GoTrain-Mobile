import GradientButton from 'react-native-gradient-buttons';
import React from 'react';
import Text from '../components/Text';


export function GradientButtonLib({ teksti, ...props }) {
    return (
        <GradientButton blueViolet
        text={<Text style={{fontFamily: 'MontserratBold', color: '#fff'}} large>{teksti}</Text>}
        height={54}
        width={320}
        radius={25}
        {...props}
        />
    )
}

export function GradientLisaaTreeni({ icon, ...props }) {
    return(
        <GradientButton blueViolet
        height={60}
        width={100}
        radius={30}
        {...props}
        />
    )
}