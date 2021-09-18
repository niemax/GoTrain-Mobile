import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as firebase from 'firebase';
import styled from 'styled-components/native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import { Container } from '../utils/Styling';
import { getCurrentDate } from '../utils/helperFuncs/getCurrentDate';
import Cards from '../components/EtusivuCards';
import 'moment/locale/fi';
import TervetuloaText from '../components/TervetuloaText';
import { ScrollView } from 'react-native-gesture-handler';

const Etusivu = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  const getUserInfo = () => {
    const { currentUser } = firebase.auth();
    try {
      const doc = firebase.firestore().collection('users').doc(currentUser.uid).get();

      if (!doc.exists) {
        console.error('No user data found!');
      } else {
        const dataObj = doc.data();
        setUsername(dataObj.name);
      }
    } catch (err) {
      Alert.alert('There is an error.', err.message);
    }
  };

  useEffect(() => {
    getUserInfo();
    const { date } = getCurrentDate();
    setCurrentDate(date);
    setTimeout(() => {}, 2000);
    setLoading(false);
  }, [currentDate]);

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : 'white',
      }}
    >
      <HeaderContainer>
        <HeaderComponent
          containerStyle={{
            backgroundColor: colorScheme === 'dark' ? '#141314' : 'white',
            borderBottomWidth: 0,
          }}
          leftComponent={{ text: <Text medium>KOTI</Text> }}
        />
      </HeaderContainer>
      <ScrollView>
        <TextContainer>
          <Text fontFamily="MontserratRegular" marginLeft="25px" marginBottom="25px" medium left>
            {currentDate.toUpperCase()}
          </Text>
          <TervetuloaText name={username} />
        </TextContainer>
        <Cards />
      </ScrollView>
    </Container>
  );
};

const HeaderContainer = styled.View``;

const TextContainer = styled.View`
  margin-top: 20px;
`;

export default Etusivu;
