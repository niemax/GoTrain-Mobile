import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as firebase from 'firebase';
import { loggingOut } from '../API/FirebaseMethods'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import Cards from '../components/Cards';
import styled from 'styled-components/native'; 




const Etusivu = ({
        navigation
    }) => {
       
        let currentUserUID = firebase.auth().currentUser.uid;
        const [text, setText] = useState('');

   
      useEffect(() => {
            async function getUserInfo() {
                try {
                    let doc = await firebase
                        .firestore()
                        .collection('users')
                        .doc(currentUserUID)
                        .get();

                    if (!doc.exists) {
                        Alert.alert('No user data found!');
                    } else {
                        let dataObj = doc.data();
                        setText(dataObj.name);
                    }
                } catch (err) {
                    Alert.alert('There is an error.', err.message)
                }
            }
            getUserInfo();
        }, []);   
      
      
    
    return (
        
            <Container>
            <StatusBar style="light" />
        <HeaderContainer>
        <HeaderComponent 
            containerStyle={{
            backgroundColor: '#FA4242',
        }}
        centerComponent={{text: <Text medium color="white" center>Home</Text>}}
        
        />
        </HeaderContainer>
        <TextContainer>
        <Text large center>{`Hei, ${text}!\n Mitä tänään treenattaisiin?`}</Text>
        </TextContainer>
        
        <CardContainer>
            <Cards />
        </CardContainer>
        </Container>
        
    );
}


const Container = styled.View`
    flex: 1;
    background-color: #141314;

`;



const HeaderContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-top: 20px;
`;



const CardContainer = styled.View`
`;  

export default Etusivu;