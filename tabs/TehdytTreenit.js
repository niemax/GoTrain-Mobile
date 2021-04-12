    import React from 'react'
    import { Ionicons } from '@expo/vector-icons';
    import styled from 'styled-components/native'; 
    import Text from '../components/Text';
    import HeaderComponent from '../components/HeaderComponent';
    import { handleLogOut } from '../components/HeaderComponent';

    const TehdytTreenit = ({ navigation }) => {
        const icon = <Ionicons name="log-out-outline" size={32} color="white" />


       


        return(
            <Container>
            <HeaderContainer>
            <HeaderComponent 
                rightComponent={
                <ProfileIcon onPress={handleLogOut}>{icon}</ProfileIcon>
                }
                containerStyle={{
                backgroundColor: '#EA5504',
                justifyContent: 'space-around',
            }}
            />
            </HeaderContainer>

            <TextContainer>
            <Text color="#fff" margin="0px 0px 0px 150px" large bold center>{`Tehdyt treenit`}</Text>
        
            </TextContainer>
            
            </Container>
        )
    }


    export default TehdytTreenit;

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
    background-color: #EA5504;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: #EA5504;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;