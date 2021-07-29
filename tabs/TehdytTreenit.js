import React, { useState, useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import AgendaComponent from '../components/Agenda';
import HeaderComponent from '../components/HeaderComponent';
import Text from '../components/Text';
import { Container } from '../utils/Styling';

const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const TehdytTreenit = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshed, setRefreshed] = useState(false);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <HeaderContainer>
        <HeaderComponent leftComponent={{ text: <Text medium>MINÄ</Text> }} />
      </HeaderContainer>

      <AgendaComponent />
      {/*  {! refreshed && <LottieAnimationMain />}
                {loading ? ( <Loading size="large" /> 
                ) : ( */}
    </Container>
  );
};

const HeaderContainer = styled.View``;

export default TehdytTreenit;
