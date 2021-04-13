import React from 'react'
import { Image } from 'react-native';

const HeaderImage = () => {
    return(
        <Image source=
        {require('../assets/logo.png')}
        style={{ width: 100, height: 40 }}

        />
    );
}

export default HeaderImage;