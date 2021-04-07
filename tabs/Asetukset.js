import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import { loggingOut } from '../API/FirebaseMethods';

const Asetukset = ({ navigation }) => {
    const icon = <Ionicons name="log-out-outline" size={32} color="white" />


    const handleLogOut = () => {
        loggingOut();
        navigation.navigate('Signup');
        console.log('Logged out!');
    }


    return(
        <Container>
        <HeaderContainer>
        <LeftCircle />
        <RightCircle />
        <HeaderComponent 
            rightComponent={
            <ProfileIcon onPress={handleLogOut}>{icon}</ProfileIcon>
            }
            containerStyle={{
            backgroundColor: '#FF8A42',
            justifyContent: 'space-around',
        }}
        />
        </HeaderContainer>

        <TextContainer>
        <Text color="#fff" large bold center margin="0px 0px 0px 150px">{`Asetukset`}</Text>
       
        </TextContainer>
        </Container>
    )
}


export default Asetukset;

const Container = styled.View`
    flex: 1;

`;

const HeaderContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-top: 20px;
`;

const ProfileIcon = styled.TouchableOpacity`
    margin-top: 5px;
`;

const HeaderGraphic = styled.View`
position: absolute;
width: 100%;
top: -50px;
z-index: -100;
`;

const RightCircle = styled.View`
background-color: #FF8A42;
position: absolute;
width: 400px;
height: 400px;
border-radius: 200px;
right: -100px;
top: -200px;
`;

const LeftCircle = styled.View`
background-color: #FF8A42;
position: absolute;
width: 200px;
height: 200px;
border-radius: 100px;
left: -50px;
top: -50px;
`;