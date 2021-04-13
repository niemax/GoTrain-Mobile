import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import { loggingOut } from '../API/FirebaseMethods';
import { handleLogOut } from '../components/HeaderComponent';

const Asetukset = ({ navigation }) => {
    const icon = <Ionicons name="log-out-outline" size={32} color="white" />



    return(
        <Container>
        <HeaderContainer>
        <HeaderComponent 
         centerComponent={{text: <Text medium color="white" center>Home</Text>}}
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
    background-color: #141314;

`;

const HeaderContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-top: 20px;
`;

const ProfileIcon = styled.TouchableOpacity`
    margin-top: 5px;
`;

