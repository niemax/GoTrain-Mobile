import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import * as firebase from 'firebase';
import Text from '../components/Text';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { LottieLoading } from '../components/Lottie';

import { 
    Container,
    Main, 
    LoadingView, 
    HeaderGraphic } from '../utils/Styling';

const LoadingScreen = ({
        navigation
    }) => {
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        Appearance.getColorScheme();
        const colorScheme = useColorScheme();


        useEffect(() => {
            firebase.auth().onAuthStateChanged((user) => {
                try {
                    if (user) {
                        setIsLoggedIn(true);
                        navigation.navigate('Kotisivu'); 
                    }
                } catch (err) {
                    console.log(err);
                }
            })
            
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