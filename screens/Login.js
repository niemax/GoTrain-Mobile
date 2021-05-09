import React, { useState } from 'react'
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import { FontAwesome as Icon } from '@expo/vector-icons'; 
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { signIn } from '../API/FirebaseMethods';
import { Alert } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { Container, 
    HeaderGraphic, 
    RightCircle, 
    LeftCircle, 
    Main, 
    Auth, 
    AuthContainer, 
    AuthTitle, 
    AuthField, 
    SignUpContainer,
    SignUp } from '../utils/Styling';


const Login = ({
        navigation
    }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        Appearance.getColorScheme();
        const colorScheme = useColorScheme();
        const themeColor = colorScheme === 'dark' ? 'white' : 'black';
        

        const handleLogin = () => {
                signIn(email, password);
                navigation.replace('Loading');
                setEmail('');
                setPassword('');

            }


        return (
            <Container style={{backgroundColor: colorScheme === 'dark' ? ('#141314') : ('#F9F8F5')}}>
            <Main>
            <Text color="black" title semi bold center>
            {`Tervetuloa takaisin, \n Kirjaudu sisään.`}{" "}
            <Icon 
            name="hand-peace-o" 
            size={32} 
            color="orange"/>
            </Text>
            </Main>
            <Auth>
                <AuthContainer>
                    <AuthTitle style={{color: themeColor}}>Sähköposti</AuthTitle>
                    <Ionicons name="mail-open-outline" size={18} color={themeColor} />
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    />
                </AuthContainer>
                <AuthContainer >
                    <AuthTitle style={{color: themeColor}} >Salasana</AuthTitle>
                    <MaterialCommunityIcons name="form-textbox-password" size={18} color={themeColor} />
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="password" 
                    autoCorrect={false} 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    />
                </AuthContainer>
            </Auth>

            <SignUpContainer onPress={handleLogin}>
                <Text bold medium center>Kirjaudu sisään</Text>
            </SignUpContainer>

            <SignUp onPress={() => navigation.navigate('Signup')}>
            <Text color="black" small center>
            Uusi jäsen?{" "} 
            <Text medium bold color="#CB570F">
            Rekisteröidy
            </Text>
            </Text>
            </SignUp>

                <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
                
            </HeaderGraphic>
            </Container>
        );
}



export default Login;