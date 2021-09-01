import React from 'react';
import { View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from './Text';
import { Container } from '../utils/Styling';

export default function TreeninKuvausData({ treeninKesto, kohderyhma, treeniText, treeniData }) {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <Text vinkkiTitle left marginLeft="15px">
        {treeniText.toUpperCase()}{' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 20,
          marginLeft: 10,
          marginBottom: 20,
        }}
      >
        <Feather name="clock" size={26} color={themeColor} />

        <Text medium>
          {' '}
          {treeninKesto} <Feather name="target" size={26} color={themeColor} /> Kohderyhmä -{' '}
          {kohderyhma}
        </Text>
      </View>
      <Text fontFamily="MontserratRegular" left marginLeft="10px" marginTop="15px" medium>
        {' '}
        LIIKKEET ({treeniData.length})
      </Text>
    </Container>
  );
}
