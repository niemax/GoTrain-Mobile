import React, { useState } from 'react'
import { Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import Text from '../components/Text';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { signIn } from '../API/FirebaseMethods'
import { Appearance, useColorScheme } from 'react-native-appearance';
import { LottieSignup } from '../components/Lottie';
import { 
    SignupContainer, 
    SignupButtonContainer,
    SignIn, 
    SignUp,
    Actions,
    Footer,
    AuthField } from '../utils/Styling';


    const Login = ({ navigation }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        Appearance.getColorScheme();
        const colorScheme = useColorScheme();

         const handleLogin = () => {
                 signIn(email, password);
                 navigation.replace('Loading');
                 setEmail('');
                 setPassword('');
 
             }
    
        
            return (
                <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5', flex: 1}}>
    
            <SignupContainer >
                <LottieSignup />
    
                 
     
                 </SignupContainer>
                 
                 <Footer>
                 <KeyboardAvoidingView></KeyboardAvoidingView>
                 <ScrollView>
                 <Text style={{color: '#fff', fontFamily: 'MontserratSemiBold'}} marginTop="35px" large>Tervetuloa takaisin!</Text>
                     <Actions>
                        
                         
                         <Text left marginBottom="15px" marginTop="35px" style={{color: '#fff', fontFamily: 'MontserratSemiBold'}}>SÄHKÖPOSTI *</Text>
                         <Ionicons name="md-person-add-outline" size={18} color='white' />
                         <AuthField 
                         autoCapitalize="none" 
                         autoCorrect={false} 
                         autoFocus={false}
                         value={email}
                         onChangeText={(email) => setEmail(email)}
                         />
                         
                         <Text left marginBottom="15px" marginTop="35px" style={{color: '#fff', fontFamily: 'MontserratSemiBold'}}>SALASANA *</Text>
                         <Ionicons name="md-person-add-outline" size={18} color='white' />
                         <AuthField 
                         autoCapitalize="none" 
                         autoCorrect={false} 
                         autoFocus={false}
                         secureTextEntry={true}
                         value={password}
                         onChangeText={(password) => setPassword(password)}
                         />
                         
                     </Actions>
                 <SignupButtonContainer>
                 <SignIn onPress={handleLogin}>
                     <Text medium style={{color: '#000', fontFamily: 'MontserratSemiBold'}}>Kirjaudu sisään</Text>
                 </SignIn>
                 <SignUp onPress={() => navigation.navigate('Signup')}>
                     <Text medium style={{color: '#000', fontFamily: 'MontserratSemiBold'}}>Rekisteröidy</Text>
                 </SignUp>
                 </SignupButtonContainer>
                     
                 </ScrollView>
    
                     
                 </Footer>
    
                 
                </KeyboardAvoidingView>
               
                
            );
           
    }
        
        
        
        
export default Login;