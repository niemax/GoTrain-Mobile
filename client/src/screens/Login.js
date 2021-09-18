import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from '../components/Text';
import { signIn } from '../API/FirebaseMethods';
import { LottieSignup } from '../components/Lottie';
import {
  SignupContainer,
  SignupButtonContainer,
  SignIn,
  SignUp,
  Actions,
  Footer,
  AuthField,
} from '../utils/Styling';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  const handleLogin = () => {
    signIn(email, password);
    firebase.auth().onAuthStateChanged((user) => {
      try {
        if (user) {
          setIsLoading(true);
          setTimeout(() => {
            navigation.navigate('Kotisivu');
          }, 1000);
        }
        return;
      } catch (err) {
        console.log(err);
      }
    });
    setEmail('');
    setPassword('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
        flex: 1,
      }}
    >
      <SignupContainer>
        <LottieSignup />
      </SignupContainer>

      <Footer>
        <ScrollView>
          <Text
            sarjat
            style={{ color: '#fff', fontFamily: 'MontserratSemiBold' }}
            marginTop="35px"
            large
          >
            Tervetuloa takaisin!
          </Text>
          <Actions>
            <Text
              left
              marginBottom="15px"
              marginTop="35px"
              style={{ color: '#fff', fontFamily: 'MontserratSemiBold' }}
            >
              SÄHKÖPOSTI *
            </Text>
            <Ionicons name="md-person-add-outline" size={18} color="white" />
            <AuthField
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              onChangeText={(e) => setEmail(e)}
            />

            <Text
              left
              marginBottom="15px"
              marginTop="35px"
              style={{ color: '#fff', fontFamily: 'MontserratSemiBold' }}
            >
              SALASANA *
            </Text>
            <Ionicons name="md-person-add-outline" size={18} color="white" />
            <AuthField
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              secureTextEntry
              onChangeText={(p) => setPassword(p)}
            />
          </Actions>
          <SignupButtonContainer>
            <SignIn onPress={handleLogin}>
              <Text medium style={{ color: '#000', fontFamily: 'MontserratSemiBold' }}>
                Kirjaudu sisään
              </Text>
            </SignIn>
            <SignUp onPress={() => navigation.navigate('Signup')}>
              <Text medium style={{ color: '#000', fontFamily: 'MontserratSemiBold' }}>
                Rekisteröidy
              </Text>
            </SignUp>
          </SignupButtonContainer>
        </ScrollView>
      </Footer>
    </KeyboardAvoidingView>
  );
};

export default Login;
