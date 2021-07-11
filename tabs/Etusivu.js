import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as firebase from 'firebase';
import styled from 'styled-components/native';
import * as Location from 'expo-location';
import moment from 'moment';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import { Container } from '../utils/Styling';
import Cards from '../components/EtusivuCards';
import 'moment/locale/fi';
import TervetuloaText from '../components/TervetuloaText';

const Etusivu = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [text, setText] = useState('');

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  const getCurrentDate = () => {
    const date = moment().locale('fi').format('LL');
    setCurrentDate(date);
  };

  useEffect(() => {
    getCurrentDate();
    getUserInfo();
  }, [currentDate]);

  const getUserInfo = async () => {
    const { currentUser } = firebase.auth();

    try {
      const doc = await firebase.firestore().collection('users').doc(currentUser.uid).get();

      if (!doc.exists) {
        console.error('No user data found!');
      } else {
        const dataObj = doc.data();
        setText(dataObj.name);
      }
    } catch (err) {
      Alert.alert('There is an error.', err.message);
    }
  };

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <HeaderContainer>
        <HeaderComponent leftComponent={{ text: <Text medium>KOTI</Text> }} />
      </HeaderContainer>
      <TextContainer>
        <Text marginLeft="25px" marginBottom="25px" medium left>
          {currentDate.toUpperCase()}
        </Text>
        <TervetuloaText teksti={text} />
      </TextContainer>

      <Cards />
    </Container>
  );
};

const HeaderContainer = styled.View``;

const TextContainer = styled.View`
  margin-top: 20px;
`;

export default Etusivu;
