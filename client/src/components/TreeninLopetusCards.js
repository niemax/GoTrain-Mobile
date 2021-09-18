import React from 'react';
import Text from '../components/Text';
import { Card } from 'react-native-elements';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { PalauteButtonContainer, PalauteIcon } from '../utils/Styling';

export default function TreeninLopetusCards({ data }) {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';
  return (
    <>
      <Card
        containerStyle={{
          borderWidth: 0,
          elevation: 3,
          height: 100,
          width: '92%',
          backgroundColor: colorScheme === 'dark' ? '#191919' : '#F9F8F5',
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: 'MontserratBold', color: themeColor }} medium>
          TREENIT{' '}
        </Text>
        <Text style={{ fontFamily: 'MontserratBold', color: '#2301E4' }} title color="#054dd9">
          {Object.keys(data).length}
        </Text>
      </Card>
      <Card
        containerStyle={{
          borderWidth: 0,
          elevation: 3,
          height: 100,
          width: '92%',
          backgroundColor: colorScheme === 'dark' ? '#191919' : '#F9F8F5',
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: 'MontserratBold', color: themeColor }} medium>
          SUORITUS %{' '}
        </Text>
        <Text style={{ fontFamily: 'MontserratBold', color: '#2301E4' }} title color="#054dd9">
          100
        </Text>
      </Card>
      <Card
        containerStyle={{
          borderWidth: 0,
          elevation: 3,
          height: 200,
          width: '92%',
          backgroundColor: colorScheme === 'dark' ? '#191919' : '#F9F8F5',
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: 'MontserratBold', color: themeColor }} medium>
          Oliko treeni mieluisa?{' '}
        </Text>
        <Text style={{ fontFamily: 'MontserratRegular', color: themeColor }} marginTop="10px" small>
          Annathan palautetta, jotta voin kehittää treenitarjontaa
        </Text>
        <PalauteButtonContainer>
          <PalauteIcon>
            <Ionicons name="ios-sad-outline" size={64} color="grey" />
          </PalauteIcon>
          <PalauteIcon>
            <FontAwesome5 name="smile-beam" size={64} color="grey" />
          </PalauteIcon>
          <PalauteIcon>
            <Ionicons name="ios-sad-outline" size={64} color="grey" />
          </PalauteIcon>
        </PalauteButtonContainer>
      </Card>
    </>
  );
}
