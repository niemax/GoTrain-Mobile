import React, { useState } from 'react'
import { Alert } from 'react-native';
import Text from '../components/Text';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { registration } from '../API/FirebaseMethods'
import { Appearance, useColorScheme } from 'react-native-appearance';
import { 
    Container, 
    SignIn, 
    SignUpContainer, 
    AuthTitle, 
    AuthContainer, 
    Auth, 
    Main, 
    LeftCircle, 
    RightCircle, 
    HeaderGraphic,
    AuthField } from '../components/TrainScreenStyling';


const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    Appearance.getColorScheme();
    const colorScheme = useColorScheme();

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
            Alert.alert('Salasanan tulee olla enemmän kuin 6 merkkiä')
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
            <Container style={{backgroundColor: colorScheme === 'dark' ? ('#141314') : ('#F9F8F5')}}>
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
                    <AuthTitle style={{color: colorScheme === 'dark' ? 'white' : 'black'}}>Nimi *</AuthTitle>
                    <Ionicons name="md-person-add-outline" size={18} color={colorScheme === 'dark' ? 'white' : 'black'} />
                    <AuthField 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    autoFocus={false}
                    value={name}
                    onChangeText={(name) => setName(name)}
                    />
                    
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle style={{color: colorScheme === 'dark' ? 'white' : 'black'}}>Sähköposti *</AuthTitle>
                    <Ionicons name="mail-open-outline" size={18} color={colorScheme === 'dark' ? 'white' : 'black'} />
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
                    <AuthTitle style={{color: colorScheme === 'dark' ? 'white' : 'black'}}>Salasana *</AuthTitle>
                    <MaterialCommunityIcons name="form-textbox-password" size={18} color={colorScheme === 'dark' ? 'white' : 'black'} />
                    <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="password" 
                    autoCorrect={false} 
                    autoFocus={false}
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
    



export default Signup;