import React, { useState, useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import AgendaComponent from '../components/Agenda';
import HeaderComponent from '../components/HeaderComponent';
import Text from '../components/Text';
import * as firebase from 'firebase';
import {
  TehdytMainContainer,
  TehdytTreenitContainer,
  TehdytTreenitBoxContainer,
} from '../utils/Styling';

const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const TehdytTreenit = () => {
  const [dataLength, setDataLength] = useState('');

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    db.collection('users')
      .doc(currentUser.uid)
      .collection('treenidata')
      .get()

      .then((snapshot) => {
        setDataLength(snapshot.size);
      });
  }, []);
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <TehdytMainContainer
      style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5' }}
    >
      <HeaderComponent
        leftComponent={
          <Text style={{ color: 'white' }} medium>
            MINÄ
          </Text>
        }
        containerStyle={{ backgroundColor: '#2301E4', borderBottomWidth: 'none' }}
      />
      <TehdytTreenitContainer />
      <TehdytTreenitBoxContainer
        style={{ backgroundColor: colorScheme === 'dark' ? '#0F0F0F' : '#fff' }}
      >
        <Text fontFamily="MontserratRegular" medium center>
          TREENIT
        </Text>
        <Text style={{ color: '#054dd9' }} large>
          {dataLength}
        </Text>
      </TehdytTreenitBoxContainer>
      <AgendaComponent />
    </TehdytMainContainer>
  );
};

export default TehdytTreenit;
