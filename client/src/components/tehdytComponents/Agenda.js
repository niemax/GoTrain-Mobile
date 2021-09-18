import React from 'react';
import { View } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { Appearance, useColorScheme } from 'react-native-appearance';
import useAgendaQuery from '../../hooks/useAgendaQuery';
import { Ionicons } from '@expo/vector-icons';
import Text from '../../components/Text';
import { LottieAgenda } from '../../components/Lottie';

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
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';

  const { calendarData, error, loading } = useAgendaQuery();

  const renderItem = (item, index) => (
    <View
      style={{
        backgroundColor: colorScheme === 'light' ? '#F9F8F5' : 'white',
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
            </View>
          ))}
          <View
            style={{ height: 1, width: '90%', margin: 25, backgroundColor: 'grey', opacity: 0.2 }}
          />
        </View>
      ))}
    </View>
  );

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
        calendarBackground: colorScheme === 'dark' ? '#141314' : 'white',
        backgroundColor: colorScheme === 'dark' ? '#141314' : 'white',
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
      items={calendarData}
      renderItem={renderItem}
    />
  );
}
