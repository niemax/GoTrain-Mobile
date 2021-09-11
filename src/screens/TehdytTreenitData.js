import React from 'react';
import { View, ScrollView } from 'react-native';
import Text from '../components/Text';
import { Appearance, useColorScheme } from 'react-native-appearance';

Appearance.getColorScheme();

export default function TehdytTreenitData({ route }) {
  const { data, nimi } = route.params;
  const colorScheme = useColorScheme();
  const dataArr = [data];
  const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);

  return (
    <View style={{ flex: 1, backgroundColor: colorScheme === 'light' ? '#F9F8F5' : '#141314' }}>
      {dataArr.map((item, index) => (
        <ScrollView
          key={index.toString()}
          contentContainerStyle={{
            justifyContent: 'flex-start',
            alignItems: 'left',
            marginLeft: 20,
          }}
        >
          <View
            style={{
              backgroundColor: randomColor,
              width: 160,
              marginTop: 15,
              borderRadius: 20,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white' }} fontFamily="MontserratBold" left large>
              {item.treeni}
            </Text>
          </View>
          {Object.values(item.treeniData).map((i) => (
            <View style={{ marginTop: 20 }}>
              <Text left marginTop="10px" fontFamily="MontserratBold" vinkkiTitle>
                {i.nimi}
              </Text>
              <Text left fontFamily="MontserratRegular" marginTop="10px" medium>
                Sarjat: {i.sarjat}
              </Text>
              <Text left marginTop="10px" marginBottom="5px" medium>
                Toistot
              </Text>
              {Object.values(item.suoritusStats).map((itm, idx) => (
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
                i.suoritusStats.map((itm, idx) => {
                  if (itm) {
                    return (
                      <View style={{ alignItems: 'left' }}>
                        <Text fontFamily="MontserratRegular" hae>
                          Sarja {idx + 1} - {itm.painot}
                        </Text>
                      </View>
                    );
                  }
                  return null;
                })
              )}
            </View>
          ))}
        </ScrollView>
      ))}
    </View>
  );
}
