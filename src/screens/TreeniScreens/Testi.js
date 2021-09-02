import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Container } from '../utils/Styling';
import Text from '../components/Text';
import { Appearance, useColorScheme } from 'react-native-appearance';

export default function TehdytTreenitData({ route }) {
  const { data, nimi } = route.params;
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const dataArr = [data];

  return (
    <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#F9F8F5' : '#141314' }}>
      {dataArr.map((item, index) => (
        <ScrollView
          key={index.toString()}
          contentContainerStyle={{
            marginTop: 20,
            justifyContent: 'flex-start',
            alignItems: 'left',
            marginLeft: 25,
          }}
        >
          <View style={{ backgroundColor: '#2301e4', width: 500, height: 500 }}></View>
          {Object.values(item.treeniData).map((i) => (
            <View style={{ marginTop: 20 }}>
              <Text left marginTop="10px" fontFamily="MontserratBold" medium>
                {i.nimi}
              </Text>
              <Text left fontFamily="MontserratRegular" marginTop="10px" medium>
                Sarjat: {i.sarjat}
              </Text>
              <Text left marginTop="10px" marginBottom="5px" medium>
                Toistot
              </Text>
              {Object.values(i?.suoritusStats).map((itm, idx) => (
                <View style={{ alignItems: 'left' }}>
                  <Text fontFamily="MontserratRegular" hae>
                    Sarja {idx + 1} - {itm.toistot}
                  </Text>
                </View>
              ))}
              <Text marginTop="10px" marginBottom="5px" left medium>
                Painot
              </Text>
              {Object.values(
                i.suoritusStats.map((itm, idx) => (
                  <View style={{ alignItems: 'left' }}>
                    <Text fontFamily="MontserratRegular" hae>
                      Sarja {idx + 1} - {itm.painot}
                    </Text>
                  </View>
                ))
              )}
            </View>
          ))}
        </ScrollView>
      ))}
    </View>
  );
}
