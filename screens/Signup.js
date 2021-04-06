import React, { useState } from 'react'
import { TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { registration } from '../API/FirebaseMethods'




const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, seterrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const emptyState = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    const handleSignUp = () => {
        if (!name) {
            Alert.alert('Name is required');
        } else if (!email) {
            Alert.alert('Email field is required.');
        } else if (!password) {
            Alert.alert('Password field is required.');
        } else if (password.length < 6) {
            Alert.alert('Salasanan tulee olla pidempi kuin 6 merkkiä')
        } else {
            registration(
                name,
                email,
                password
            );
            navigation.navigate('Loading');
            emptyState();
        }
    };
    
        return (
            <Container>
            <Main>
            <Text title semi center>
            {`Welcome, \n Sign up to proceed.`}{" "}
            <Icon 
            name="hand-peace-o" 
            size={32} 
            color="orange"/>
            </Text>
            </Main>
            <Auth>
            <AuthContainer>
                    <AuthTitle>Name</AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    autoFocus={true}
                    value={name}
                    onChangeText={(name) => setName(name)}
                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    autoFocus={true}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="password" 
                    autoCorrect={false} 
                    autoFocus={true}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    />
                </AuthContainer>
            </Auth>

            <SignUpContainer onPress={handleSignUp}>
                <Text bold medium center color="#fff">Sign Up</Text>
            
                
            </SignUpContainer>

            <SignIn onPress={() => navigation.navigate('Login')}>
            <Text small center>
            Already registered?{" "} 
            <Text medium bold color="#CB570F">
            Sign In
            </Text>
            </Text>
            </SignIn>

                <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
                
            </HeaderGraphic>
            </Container>
        );
       
}
    

const Container = styled.View`
    flex: 1

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
    color: #8e93a1;
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

const SignIn = styled.TouchableOpacity`

`;

const Loading = styled.ActivityIndicator.attrs(props => ({
    color: "#ffffff",
    size: "small"
}))``;

export default Signup;