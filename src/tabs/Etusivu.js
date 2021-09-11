import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import { Container, WelcomeNameContainer } from '../utils/Styling';
import useUserInfo from '../hooks/useUserInfo';
import { getCurrentDate } from '../utils/helperFuncs/getCurrentDate';
import Cards from '../components/EtusivuCards';
import 'moment/locale/fi';
import TervetuloaText from '../components/TervetuloaText';

const Etusivu = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [loading, setLoading] = useState(false);
  const { username } = useUserInfo();

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  useEffect(() => {
    console.log(username);
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
      <TextContainer>
        <Text fontFamily="MontserratRegular" marginLeft="25px" marginBottom="25px" medium left>
          {currentDate.toUpperCase()}
        </Text>
        <TervetuloaText /* nimi={username} */ />
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
