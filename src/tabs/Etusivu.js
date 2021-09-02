import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import { Container, WelcomeNameContainer } from '../utils/Styling';
import { getCurrentDate, getUserInfo } from '../utils/helperFuncs/getCurrentDate';
import Cards from '../components/EtusivuCards';
import 'moment/locale/fi';
import WelcomeNameSkeleton from '../components/skeletons/welcomeNameSkeleton';
import TervetuloaText from '../components/TervetuloaText';

const Etusivu = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [username, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  useEffect(() => {
    setLoading(true);
    const { date } = getCurrentDate();
    setCurrentDate(date);
    const { dataObj } = getUserInfo();
    setTimeout(() => {}, 2000);
    //    setLoading(false);
  }, [currentDate]);

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <HeaderContainer>
        <HeaderComponent
          containerStyle={{
            backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
            borderBottomWidth: 0,
          }}
          leftComponent={{ text: <Text medium>KOTI</Text> }}
        />
      </HeaderContainer>
      <TextContainer>
        <Text fontFamily="MontserratRegular" marginLeft="25px" marginBottom="25px" medium left>
          {currentDate.toUpperCase()}
        </Text>
        <TervetuloaText nimi={username} />
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
