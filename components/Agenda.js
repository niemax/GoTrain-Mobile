import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import * as firebase from 'firebase';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { Ionicons } from '@expo/vector-icons';
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
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = (item, index) => {
    if (loading) return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
    return (
      <View
        style={{
          backgroundColor: colorScheme === 'light' ? '#F9F8F5' : '#141314',
          padding: 10,
          margin: 5,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1,
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name="md-barbell-outline"
            size={24}
            style={{ marginRight: 10 }}
            color={themeColor}
          />
          <Text
            fontFamily="MontserratRegular"
            style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}
            vinkkiTitle
            left
          >
            {item.treeni}
          </Text>
        </View>
        {Object.values(item.treeniData).map((treeni) => (
          <View key={treeni.nimi}>
            <Text left medium marginLeft="25px" marginTop="20px" marginBottom="10px">
              {treeni.nimi}
            </Text>

            {Object.values(treeni.suoritusStats).map((itm, i) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  paddingVertical: 4,
                }}
              >
                <View>
                  <Text style={{ color: 'grey' }}>Sarja</Text>
                  <Text vinkit>{i + 1}</Text>
                </View>
                <View>
                  <Text style={{ color: 'grey' }}>Toistot</Text>
                  <Text vinkit>{itm.toistot}</Text>
                </View>
                <View>
                  <Text style={{ color: 'grey' }}>Painot</Text>
                  <Text vinkit>{itm.painot}</Text>
                </View>
                {/*                 <View style={{ marginTop: 5, marginLeft: 35 }}>
                  <Text style={{ color: 'grey' }}>Huom</Text>
                  <Text small>{itm.lisatiedot}</Text>
                </View>
  */}
              </View>
            ))}
            <View
              style={{ height: 1, width: '90%', margin: 25, backgroundColor: 'grey', opacity: 0.2 }}
            />
          </View>
        ))}
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
      firstDay={1}
      onDayPress={getData}
      items={calendarItems}
      renderItem={renderItem}
    />
  );
}
