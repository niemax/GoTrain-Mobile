import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import * as firebase from 'firebase';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { AgendaContainer } from '../utils/Styling';

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

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';

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

  useEffect(() => {
    getData();
  }, []); /* const onRefresh = useCallback(() => {
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
          descToistot += `Sarja ${i + 1}: ${itm.toistot}\n`;
          descPainot += `Sarja ${i + 1}: ${itm.painot}\n`;
          descLisatiedot += `Sarja ${i + 1}: ${itm.lisatiedot}\n`;
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
            <Text medium fontFamily="MontserratRegular" left>
              {descToistot}
            </Text>
            <Text marginTop="10px" medium left>
              Painot
            </Text>
            <Text medium fontFamily="MontserratRegular" left>
              {descPainot}
            </Text>
            <Text marginTop="10px" medium left>
              Lisätiedot
            </Text>
            <Text medium fontFamily="MontserratRegular" left>
              {descLisatiedot}
            </Text>
          </>
        );
      })}
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Agenda
        renderEmptyData={() => (
          <Text fontFamily="MontserratRegular" large center>
            No Data
          </Text>
        )}
        onDayPress={getData}
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
        items={calendarItems}
        renderItem={renderItem}
      />
    </View>
  );
}
