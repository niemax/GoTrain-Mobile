import React from 'react'
import { Image } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';


const HeaderImage = () => {
    Appearance.getColorScheme();
    const colorScheme = useColorScheme();

    return(
        <Image source=
        {require('../assets/logo.png')}
        style={{ width: 100, height: 40 }}

        />
    );
}

export default HeaderImage;