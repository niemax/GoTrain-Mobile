import React from 'react'
import { Header } from 'react-native-elements'
import GetWeather from '../components/Weather';
import HeaderImage from './HeaderLogo';


const HeaderComponent = (props) => {
    return(
        <Header
       leftComponent={<HeaderImage/>}
        {...props}
        />
    );
}
export default HeaderComponent;

