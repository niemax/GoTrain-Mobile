import React from 'react';
import { View, ScrollView } from 'react-native';
import Text from '../components/Text';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { Container } from '../utils/Styling';

Appearance.getColorScheme();
export default function TehdytTreenitData({ route }) {
  const { data, nimi } = route.params;
  const colorScheme = useColorScheme();
  const dataArr = [data];

  return (
    <Container style={{ flex: 1, backgroundColor: colorScheme === 'light' ? 'white' : '#141314' }}>
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
              backgroundColor: '#338467',
              height: 35,
              width: 120,
              marginTop: 9,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{ color: 'white' }} fontFamily="MontserratBold" left large>
                {item.treeni}
              </Text>
            </View>
          </View>
          {Object.values(item.treeniData).map((i) => (
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                {/*  <View
                  style={{
                    backgroundColor: 'grey',
                    opacity: 0.6,
                    height: 40,
                    width: ,
                    borderRadius: '50%',
                    justifyContent: 'center',
                  }}
                /> */}
                <Text left marginTop="10px" fontFamily="MontserratBold" vinkkiTitle>
                  {i.nimi}
                </Text>
              </View>
              <Text left fontFamily="MontserratRegular" marginTop="10px" medium>
                Sarjat: {i.sarjat}
              </Text>
              <Text left marginTop="10px" marginBottom="5px" medium>
                Toistot
              </Text>
              {i.suoritusStats.length > 0 &&
                Object.values(i.suoritusStats).map((itm, idx) => (
                  <View style={{ alignItems: 'left' }}>
                    <Text fontFamily="MontserratRegular" hae>
                      Sarja {idx + 1} - {itm.toistot}
                    </Text>
                  </View>
                ))}
              <Text marginTop="10px" marginBottom="5px" left medium>
                Painot
              </Text>
              {i.suoritusStats.length > 0 &&
                Object.values(
                  i.suoritusStats.map((itm, idx) => (
                    <View style={{ alignItems: 'left' }}>
                      <Text fontFamily="MontserratRegular" hae>
                        Sarja {idx + 1} - {itm.painot}
                      </Text>
                    </View>
                  ))
                )}
              <Text marginTop="10px" marginBottom="5px" left medium>
                Lisätiedot
              </Text>
              {i.suoritusStats.length > 0 &&
                Object.values(
                  i.suoritusStats.map((itm, idx) => (
                    <View style={{ alignItems: 'left' }}>
                      <Text fontFamily="MontserratRegular" hae>
                        Sarja {idx + 1} - {itm.lisatiedot}
                      </Text>
                    </View>
                  ))
                )}
            </View>
          ))}
        </ScrollView>
      ))}
    </Container>
  );
}
