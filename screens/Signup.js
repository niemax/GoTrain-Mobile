import React, { useState } from 'react'
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { registration } from '../API/FirebaseMethods'





const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, seterrorMessage] = useState(null);

    const emptyState = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    const handleSignUp = () => {
        if (!name) {
            Alert.alert('Nimi vaaditaan.');
        } else if (!email) {
            Alert.alert('Sähköposti vaaditaan.');
        } else if (!password) {
            Alert.alert('Salasana vaaditaan.');
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
            <Text color="black" title semi center>
            {`Tervetuloa, \n Rekisteröidy aloittaaksesi.`}{" "}
            <Icon 
            name="hand-peace-o" 
            size={32} 
            color="orange"/>
            </Text>
            </Main>

            <Auth>
            <AuthContainer>
                    <AuthTitle>Nimi *</AuthTitle>
                    <Ionicons name="md-person-add-outline" size={18} color="gray" />
                    <AuthField 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    autoFocus={true}
                    value={name}
                    onChangeText={(name) => setName(name)}
                    />
                    
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Sähköposti *</AuthTitle>
                    <Ionicons name="mail-open-outline" size={18} color="gray" />
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    autoFocus={false}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Salasana *</AuthTitle>
                    <MaterialCommunityIcons name="form-textbox-password" size={18} color="gray" />
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
                <Text bold medium center color="#fff">Rekisteröidy</Text>
            
                
            </SignUpContainer>

            <SignIn onPress={() => navigation.navigate('Login')}>
            <Text color="black" small center>
            Oletko jo jäsen?{" "} 
            <Text medium bold color="#CB570F">
            Kirjaudu sisään
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
    flex: 1;
    background-color: #F5F4F4;

`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 40px;

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
    margin-top: 180px;
`;

const Auth = styled.View`
    margin: 50px 15px 5px 15px;
`;

const AuthContainer = styled.View`
    margin-bottom: 15px;
`;

// welcome back
const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300,
`;

// sign up button
const SignUpContainer = styled.TouchableOpacity`
    margin: 20px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #CB570F;
    border-radius: 7px;
    
`;

const SignIn = styled.TouchableOpacity`
`;


export default Signup;