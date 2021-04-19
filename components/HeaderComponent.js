import React from 'react'
import { Header } from 'react-native-elements'
import HeaderImage from './HeaderLogo';
import { loggingOut } from '../API/FirebaseMethods'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'; 
import { useNavigation } from '@react-navigation/native';



const HeaderComponent = (props) => {
    const navigation = useNavigation();
    const icon = <Ionicons name="log-out-outline" size={32} color="white" />

    const handleLogOut = () => {
        loggingOut();
        navigation.navigate('Signup');
        console.log('Logged out!');
    }

    return(
        <Header
        
       containerStyle={{
            backgroundColor: '#141314;',
        }}
       leftComponent={<HeaderImage/>}
        rightComponent={
            <ProfileIcon onPress={handleLogOut}>{icon}</ProfileIcon>
            }
            
        {...props}
        />
    );
}


const ProfileIcon = styled.TouchableOpacity`
    margin-top: 5px;
`;

export default HeaderComponent;


