import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
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
        
       
       //let currentUserUID = firebase.auth().currentUser.uid;
        const [text, setText] = useState('');

   
     /* useEffect(() => {
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
      */
      
    
    return (
        
            <Container>
            <LeftCircle />
            <RightCircle/>
        <HeaderContainer>
        <HeaderComponent 
            containerStyle={{
            backgroundColor: '#FA4242',
        }}
        centerComponent={{text: <Text medium heavy color="white" margin="15px" center>Home</Text>}}
        
        />
        </HeaderContainer>
        <TextContainer>
        <Text color="#000" margin="80px 0px 0px 0px" large center>{`Hei, ${text}!\n Mitä tänään treenattaisiin?`}</Text>
        </TextContainer>
        
        <CardContainer>
            <Cards />
        </CardContainer>
        </Container>
        
    );
}


const Container = styled.View`
    flex: 1;
    background-color: #FEEFE6;

`;


const RightCircle = styled.View`
    background-color: #FA4242
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: #FA4242
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;

const HeaderContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-top: 15px;
`;



const CardContainer = styled.View`
    padding: 5px;
`;  

export default Etusivu;