import React, { useState } from 'react';
import { Touchable, View } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { useNavigation } from '@react-navigation/native';
import useAgendaQuery from '../../hooks/useAgendaQuery';
import { Feather } from '@expo/vector-icons';
import Text from '../../components/Text';
import { LottieAgenda } from '../../components/Lottie';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);

  const { calendarData } = useAgendaQuery();
  const navigation = useNavigation();

  const keyExtractor = (index) => index.toString();

  const renderItem = (item, index) => (
    <View
      style={{
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 25,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TehdytTreenitData', {
            data: item,
            date: item.pvm,
          })
        }
        style={{
          backgroundColor: colorScheme === 'dark' ? 'black' : '#F4F4F4',
          width: '100%',
          height: 62,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View
          style={{
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              marginRight: 25,
              height: 60,
              width: 3,
              backgroundColor: '#338467',
            }}
          />
          <Text left medium marginRight="auto">
            {item.treeni}
          </Text>
          <Feather name="chevron-right" size={30} color="#522802" />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <Agenda
      renderEmptyData={() => (
        <>
          {/* <LottieAgenda /> */}
          <Text marginTop="235px" fontFamily="MontserratRegular" vinkkiTitle center>
            EI TREENIÄ PÄIVÄLLE
          </Text>
        </>
      )}
      theme={{
        calendarBackground: colorScheme === 'dark' ? '#141314' : 'white',
        backgroundColor: colorScheme === 'dark' ? '#141314' : 'white',
        agendaDayTextColor: '#338467',
        agendaDayNumColor: '#338467',
        agendaTodayColor: '#338467',
        agendaKnobColor: '#522802',
        todayTextColor: '#338467',
        selectedDayBackgroundColor: '#338467',
        dotColor: '#338467',
        indicatorColor: '#338467',
        textSectionTitleColor: themeColor,
        dayTextColor: themeColor,
        monthTextColor: themeColor,
        textDayFontFamily: 'MontserratRegular',
        textMonthFontFamily: 'MontserratSemiBold',
        textDayHeaderFontFamily: 'MontserratRegular',
        minDate: '2021-05-01',
      }}
      firstDay={1}
      onDayChange={null}
      keyExtractor={keyExtractor}
      items={calendarData}
      renderItem={renderItem}
    />
  );
}
