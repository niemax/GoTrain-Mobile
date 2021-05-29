import React, { useEffect, useState } from 'react';

import Text from '../components/Text';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { LottieLoading } from '../components/Lottie';

import { 
    Container,
    LoadingView, 
   } from '../utils/Styling';

const LoadingScreen = ({
        navigation
    }) => {
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        Appearance.getColorScheme();
        const colorScheme = useColorScheme();


        useEffect(() => {
            
            
        }, []);


    return(
        
        <Container style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}}>
                
            {! isLoggedIn ? (
            <LoadingView>
            <Text title bold center>GoTrain</Text>
            <LottieLoading />
            </LoadingView>
        ) : (console.log('Logged in!')
        )} 
        
    
        </Container>
    )
}


export default LoadingScreen;