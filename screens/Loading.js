import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import * as firebase from 'firebase';

const LoadingScreen = ({ navigation }) => {
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            try {
                if (user) {
                    navigation.navigate('Home');
                } else {
                    navigation.navigate('Login');
                }
            } catch (err) {
                console.log(err);
            }
            
        })
    });


    return(
        <Container>
    <Loading />
        </Container>
    )
}



const Container = styled.View`
    flex: 1
`;

const Loading = styled.ActivityIndicator.attrs(props => ({
    size: "large",
    align: "center",
    justifyContent: "center"
}))``;

export default LoadingScreen;