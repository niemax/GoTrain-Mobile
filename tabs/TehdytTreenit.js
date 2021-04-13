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
