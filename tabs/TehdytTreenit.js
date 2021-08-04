import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import { Feather } from '@expo/vector-icons';
import AgendaComponent from '../components/Agenda';
import HeaderComponent from '../components/HeaderComponent';
import Text from '../components/Text';
import { loggingOut } from '../API/FirebaseMethods';
import TehdytTreenitStats from '../components/TehdytTreenitStats';
import { TehdytMainContainer } from '../utils/Styling';

const TehdytTreenit = () => {
  const icon = <Feather name="log-out" size={24} color="white" />;

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <TehdytMainContainer
      style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5' }}
    >
      <HeaderComponent
        rightComponent={<TouchableOpacity onPress={loggingOut}>{icon}</TouchableOpacity>}
        leftComponent={
          <Text style={{ color: 'white' }} medium>
            MINÄ
          </Text>
        }
        centerComponent={null}
        containerStyle={{ backgroundColor: '#2301E4', borderBottomWidth: 'none' }}
      />

      <TehdytTreenitStats />
      <AgendaComponent />
    </TehdytMainContainer>
  );
};

export default TehdytTreenit;
