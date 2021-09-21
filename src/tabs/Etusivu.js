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
import { ScrollView } from 'react-native-gesture-handler';

const Etusivu = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  const getUserInfo = async () => {
    const { currentUser } = firebase.auth();
    try {
      const doc = await firebase.firestore().collection('users').doc(currentUser.uid).get();

      if (!doc.exists) {
        console.error('No user data found!');
      } else {
        const dataObj = doc.data();
        setUsername(dataObj.name);
        console.log(dataObj.name);
      }
    } catch (err) {
      Alert.alert('There is an error.', err.message);
    }
  };

  useEffect(() => {
    getUserInfo();
    const { date } = getCurrentDate();
    setCurrentDate(date);
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
          <Text medium marginLeft="10px" left>
            HEI {username.toUpperCase()}, TÄNÄÄN ON
          </Text>
          <Text medium marginLeft="10px" left style={{ color: '#338467' }}>
            {currentDate.toUpperCase()}
          </Text>
        </TextContainer>
        <Cards />
      </ScrollView>
    </Container>
  );
};

const HeaderContainer = styled.View``;

const TextContainer = styled.View`
  margin-top: 25;
`;

export default Etusivu;
