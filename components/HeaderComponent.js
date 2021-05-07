import React from 'react'
import { Header } from 'react-native-elements'
import { loggingOut } from '../API/FirebaseMethods'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'; 
import { useNavigation } from '@react-navigation/native';
import { Appearance, useColorScheme } from 'react-native-appearance';



const HeaderComponent = (props) => {
    const navigation = useNavigation();
    const icon = <Ionicons name="log-out-outline" size={32} color={colorScheme === 'dark' ? 'white' : 'black'} />
   
    Appearance.getColorScheme();
    const colorScheme = useColorScheme();

    const handleLogOut = () => {
        loggingOut();
        navigation.navigate('Signup');
        console.log('Logged out!');
    }

    return(
        <Header
        
       containerStyle={{
            backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'
        }}
       
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


