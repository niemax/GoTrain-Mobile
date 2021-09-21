import React from 'react';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import AgendaComponent from '../tehdytComponents/Agenda';
import { TehdytMainContainer } from '../../utils/Styling';
import Text from '../Text';

export default function TehdytCalendar() {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <>
      <Text
        left
        marginLeft="15px"
        marginBottom="15px"
        marginTop="3px"
        medium
        fontFamily="MontserratSemiBold"
      >
        TREENIKALENTERI
      </Text>
      <AgendaComponent />
    </>
  );
}
