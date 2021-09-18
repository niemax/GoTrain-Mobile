import React from 'react';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import AgendaComponent from '../tehdytComponents/Agenda';
import TehdytTreenitStats from '../tehdytComponents/TehdytTreenitStats';
import { TehdytMainContainer } from '../../utils/Styling';

export default function TehdytCalendar() {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <TehdytMainContainer style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : 'white' }}>
      <TehdytTreenitStats />
      <AgendaComponent />
    </TehdytMainContainer>
  );
}
