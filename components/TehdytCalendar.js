import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import { Feather } from '@expo/vector-icons';
import AgendaComponent from './Agenda';
import HeaderComponent from './HeaderComponent';
import Text from './Text';
import { loggingOut } from '../API/FirebaseMethods';
import TehdytTreenitStats from './TehdytTreenitStats';
import { TehdytMainContainer } from '../utils/Styling';

export default function TehdytCalendar() {
  const icon = <Feather name="log-out" size={24} color="white" />;

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
