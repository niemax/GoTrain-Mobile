import React, { useState } from 'react'
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import { FontAwesome as Icon } from '@expo/vector-icons'; 
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { signIn } from '../API/FirebaseMethods';
import { Alert } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';



const Login = ({
        navigation
    }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        Appearance.getColorScheme();
        const colorScheme = useColorScheme();

        

        const handleLogin = () => {
            if (email !== '' && password.length >= 6) {
                signIn(email, password);
                navigation.navigate('Loading');
            } else {
                Alert.alert('Virheellinen sähköposti tai salasana')

            }
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
                    <AuthTitle style={{color: colorScheme === 'dark' ? 'white' : 'black'}}>Sähköposti</AuthTitle>
                    <Ionicons name="mail-open-outline" size={18} color={colorScheme === 'dark' ? 'white' : 'black'} />
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle style={{color: colorScheme === 'dark' ? 'white' : 'black'}}>Salasana</AuthTitle>
                    <MaterialCommunityIcons name="form-textbox-password" size={18} color={colorScheme === 'dark' ? 'white' : 'black'} />
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

const Container = styled.View`
    flex: 1;
    background-color: #F5F4F4;

`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;

`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
    background-color: #CB570F;
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

const Main = styled.View`
    margin-top: 192px;
`;

const Auth = styled.View`
    margin: 64px 32px 32px
`;

const AuthContainer = styled.View`
    margin-bottom: 15px;
`;

// welcome back
const AuthTitle = styled(Text)`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300
`;

// sign up button
const SignUpContainer = styled.TouchableOpacity`
    margin: 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #CB570F;
    border-radius: 7px;
    
`;

const SignUp = styled.TouchableOpacity`

`;

export default Login;