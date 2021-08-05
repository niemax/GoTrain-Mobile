import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import * as firebase from 'firebase';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { LottieAgenda } from './Lottie';
import { ActivityIndicator } from 'react-native-paper';

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

export default function AgendaComponent() {
  const [calendarItems, setCalendarItems] = useState({});
  const [loading, setLoading] = useState(false);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';

  const getData = async () => {
    setLoading(true);
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
    setInterval(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, [calendarItems]);

  const renderItem = (item, index) => {
    if (loading) return <ActivityIndicator size="small" style={{ marginTop: 100 }} />;
    return (
      <View>
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
            <Text fontFamily="MontserratRegular" marginTop="10px" left medium>
              Sarjat: {treeni.sarjat}
            </Text>
          );
          let descToistot = '';
          let descPainot = '';
          let descLisatiedot = '';

          Object.values(treeni.suoritusStats).forEach((itm, i) => {
            descToistot += `Sarja ${i + 1}: ${itm.toistot}\n`;
            descPainot += `Sarja ${i + 1}: ${itm.painot}kg\n`;
            descLisatiedot += `Sarja ${i + 1}: ${itm.lisatiedot}\n`;
          });

          return (
            <View key={index}>
              <Text
                fontFamily="MontserratSemiBold"
                marginBottom="15px"
                marginTop="20px"
                left
                vinkkiTitle
              >
                {treeni.nimi}
              </Text>
              <Text marginTop="10px" medium fontFamily="MontserratRegular" left>
                {descSarjat}
              </Text>
              <Text marginBottom="5px" marginTop="10px" fontFamily="MontserratRegular" medium left>
                Toistot
              </Text>
              <Text medium fontFamily="MontserratRegular" left>
                {descToistot}
              </Text>
              <Text marginBottom="5px" marginTop="10px" fontFamily="MontserratRegular" medium left>
                Painot
              </Text>
              <Text medium fontFamily="MontserratRegular" left>
                {descPainot}
              </Text>
              <Text marginBottom="5px" marginTop="10px" fontFamily="MontserratRegular" medium left>
                Lisätiedot
              </Text>
              <Text medium fontFamily="MontserratRegular" left>
                {descLisatiedot}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <Agenda
      renderEmptyData={() => (
        <>
          <LottieAgenda />
          <Text marginTop="35px" fontFamily="MontserratSemiBold" vinkkiTitle center>
            Ei treeniä
          </Text>
        </>
      )}
      theme={{
        calendarBackground: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
        agendaDayTextColor: '#2301E4',
        agendaDayNumColor: '#2301E4',
        agendaTodayColor: '#2301E4',
        agendaKnobColor: '#2301E4',
        textSectionTitleColor: themeColor,
        dayTextColor: themeColor,
        monthTextColor: themeColor,
        textDayFontFamily: 'MontserratRegular',
        textMonthFontFamily: 'MontserratRegular',
        textDayHeaderFontFamily: 'MontserratRegular',
        minDate: '2021-05-01',
      }}
      onDayPress={getData}
      items={calendarItems}
      renderItem={renderItem}
    />
  );
}
