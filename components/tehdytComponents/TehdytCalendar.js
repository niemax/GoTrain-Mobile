import React from 'react';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import AgendaComponent from './Agenda';
import TehdytTreenitStats from './TehdytTreenitStats';
import { TehdytMainContainer } from '../../utils/Styling';

export default function TehdytCalendar() {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <TehdytMainContainer
      style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5' }}
    >
      <TehdytTreenitStats />

      <AgendaComponent />
    </TehdytMainContainer>
  );
}
