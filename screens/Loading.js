import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import * as firebase from 'firebase';
import Text from '../components/Text';

const LoadingScreen = ({
        navigation
    }) => {
        const [isLoggedIn, setIsLoggedIn] = useState(false);


        useEffect(() => {
            firebase.auth().onAuthStateChanged((user) => {
                try {
                    if (user) {
                        setTimeout(() => {
                            setIsLoggedIn(true)
                            navigation.navigate('Home');
                        }, 200);
                    }
                } catch (err) {
                    console.log(err);
                }
            })
        }, []);


    return(
        
        <Container>
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



const Container = styled.View`
    flex: 1
`;

const Main = styled.View`
    margin-top: 150px;
`;

const Loading = styled.ActivityIndicator.attrs(props => ({
    color: 'orange',
    size: "large",
    align: "center",
    marginTop: 40
}))``;

const LoadingView = styled.View`
    margin-top: 230px;
    justifyContent: center;
    alignItems: center;
`;

const RightCircle = styled.View`
    background-color: #CB570F;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: rgba(228, 43, 10, 0.87);
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

export default LoadingScreen;