import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import * as firebase from 'firebase';
import Text from '../components/Text';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { 
    Container,
    Main, 
    LoadingView, 
    RightCircle, 
    LeftCircle, 
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
                    } else {
                        navigation.navigate('Signup');
                    }
                } catch (err) {
                    console.log(err);
                }
            })
            
        }, []);


    return(
        
        <Container style={{backgroundColor: colorScheme === 'dark' ? ('#141314') : ('#F9F8F5')}}>
        <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
                
            </HeaderGraphic>
            <Main>
            {! isLoggedIn ? (
            <LoadingView>
            <Text title bold center>GoTrain</Text>
            <Loading />
            </LoadingView>
        ) : (console.log('Logged in!')
        )} 
            </Main>
        
    
        </Container>
    )
}


const Loading = styled.ActivityIndicator.attrs(props => ({
    color: 'black',
    size: "large",
    align: "center",
    marginTop: 200
}))``;



export default LoadingScreen;