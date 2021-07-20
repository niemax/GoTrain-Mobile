import React, { useState, useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import * as firebase from 'firebase';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { format } from 'date-fns';
import HeaderComponent from '../components/HeaderComponent';
import Text from '../components/Text';
import { Container, TehdytTreenitContainer } from '../utils/Styling';

LocaleConfig.locales.fi = {
  monthNames: [
    'Tammikuu',
    'Helmikuu',
    'Maaliskuu',
    'Huhtikuu',
    'Toukokuu',
    'Kesäkuu',
    'Heinäkuu',
    'Elokuu',
    'Syyskuu',
    'Lokakuu',
    'Marraskuu',
    'Joulukuu',
  ],
  monthNamesShort: [
    'Tammi.',
    'Helmu.',
    'Maalis.',
    'Huhti.',
    'Touko.',
    'Kesä',
    'Heinä.',
    'Elo',
    'Syys',
    'Loka',
    'Marras',
    'Joulu',
  ],
  dayNames: [
    'Sunnuntai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
    'Maanantai',
  ],
  dayNamesShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
  today: 'Tänään',
};
LocaleConfig.defaultLocale = 'fi';

const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const TehdytTreenit = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshed, setRefreshed] = useState(false);
  const [calendarItems, setCalendarItems] = useState({});

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';

  useEffect(() => {
    const getData = () => {
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();

      db.collection('users')
        .doc(currentUser.uid)
        .collection('treenidata')
        .orderBy('timestamp', 'desc')
        .get()

        .then((snapshot) => {
          const mappedData = snapshot.docs.map((treeni) => {
            const data = treeni.data();
            const { timestamp } = data;

            return {
              ...data,
              date: format(timestamp, 'yyyy-MM-dd'),
            };
          });

          const reduced = mappedData.reduce((acc, currentItem) => {
            const { date, ...rest } = currentItem;

            acc[date] = [rest];

            return acc;
          }, {});

          setCalendarItems(reduced);
        });
    };

    getData();
  }, []);

  /* const onRefresh = useCallback(() => {
            setLoading(true)
            setRefreshing(true);
            getData();
            renderCalendarData()
            wait(2000).then(() => setRefreshing(false)).then(() => setLoading(false));
            setRefreshed(true);

        }) */

  const renderItem = (item, index) => (
    <View key={index}>
      <Text
        fontFamily="MontserratRegular"
        style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}
        large
        left
        marginTop="35px"
        marginBottom="15px"
      >
        {item.treeni}
      </Text>

      {Object.values(item.treeniData).map((treeni) => {
        const descSarjat = (
          <Text left medium>
            Sarjat: {treeni.sarjat}
          </Text>
        );
        let descToistot = '';
        let descPainot = '';
        let descLisatiedot = '';

        Object.values(treeni.suoritusStats).forEach((itm, i) => {
          descToistot += `Sarja ${i + 1}: x${itm.toistot}   `;
          descPainot += `Sarja ${i + 1}: ${itm.painot}kg   `;
          descLisatiedot += `Sarja ${i + 1}: ${itm.lisatiedot}   `;
        });

        return (
          <>
            <Text marginBottom="15px" marginTop="25px" left large>
              {treeni.nimi}
            </Text>
            <Text marginTop="10px" medium fontFamily="MontserratRegular" left>
              {descSarjat}
            </Text>
            <Text marginTop="10px" medium left>
              Toistot
            </Text>
            <TehdytTreenitContainer>
              <Text medium fontFamily="MontserratRegular" left>
                {descToistot}
              </Text>
              <Text marginTop="10px" medium left>
                Painot
              </Text>
              <TehdytTreenitContainer>
                <Text medium fontFamily="MontserratRegular" left>
                  {descPainot}
                </Text>
              </TehdytTreenitContainer>
              <Text marginTop="10px" medium left>
                Lisätiedot
              </Text>
              <TehdytTreenitContainer>
                <Text medium fontFamily="MontserratRegular" left>
                  {descLisatiedot}
                </Text>
              </TehdytTreenitContainer>
            </TehdytTreenitContainer>
          </>
        );
      })}
    </View>
  );

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <HeaderContainer>
        <HeaderComponent leftComponent={{ text: <Text medium>MINÄ</Text> }} />
      </HeaderContainer>

      <Text fontFamily="MontserratRegular" marginBottom="40px" marginTop="40px" large>
        Suoritukset{' '}
      </Text>

      {/*  {! refreshed && <LottieAnimationMain />}
                {loading ? ( <Loading size="large" /> 
                ) : ( */}

      <Agenda
        renderEmptyData={() => (
          <Text fontFamily="MontserratRegular" large center>
            No Data
          </Text>
        )}
        theme={{
          calendarBackground: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
          backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
          agendaDayTextColor: '#054dd9',
          agendaDayNumColor: '#054dd9',
          agendaTodayColor: '#054dd9',
          agendaKnobColor: '#054dd9',
          textSectionTitleColor: themeColor,
          dayTextColor: themeColor,
          monthTextColor: themeColor,
          textDayFontFamily: 'MontserratRegular',
          textMonthFontFamily: 'MontserratRegular',
          textDayHeaderFontFamily: 'MontserratRegular',
          minDate: '2021-05-01',
        }}
        items={calendarItems}
        renderItem={renderItem}
      />
    </Container>
  );
};

const HeaderContainer = styled.View``;

export default TehdytTreenit;
