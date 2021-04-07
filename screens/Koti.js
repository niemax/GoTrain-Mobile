import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import { loggingOut } from '../API/FirebaseMethods'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';



const Koti = ({
        navigation
    }) => {
        const icon = <Ionicons name="log-out-outline" size={32} color="white" />
       
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

    
    const handleLogOut = () => {
        loggingOut();
        navigation.navigate('Signup');
        console.log('Logged out!');
    }

    return (
        <Container>
            <LeftCircle />
            <RightCircle/>
        <HeaderContainer>
        <HeaderComponent 
            rightComponent={
            <ProfileIcon onPress={handleLogOut}>{icon}</ProfileIcon>
            }
            containerStyle={{
            backgroundColor: 'rgba(228, 43, 10, 0.87)',
            justifyContent: 'space-around'
        }}
        />
        </HeaderContainer>

        <TextContainer>
        <Text color="#fff" margin="0px 0px 0px 180px" medium bold center>{`Hei, ${text}\n mitä tänään treenattaisiin?`}</Text>
       
        </TextContainer>
        
        
        </Container>
    );
}


const Container = styled.View`
    flex: 1

`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
    background-color: rgba(228, 43, 10, 0.87);
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

const HeaderContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-top: 15px;
`;

const ProfileIcon = styled.TouchableOpacity`
    margin-top: 5px;
`;

   

export default Koti;