import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import { HOMEDATA, MOBILEDATA } from '@env';
import axios from 'axios';
import { LottieLoading } from '../../components/Lottie';
import TreeninKuvausData from '../../components/TreeninKuvausData';
import { GradientButtonLib } from '../../components/GradientButton';
import { Container, ButtonContainer, IconTouchable, AloitaButton } from '../../utils/Styling';
import Text from '../../components/Text';

export default function TreeninEsittely({ route, navigation }) {
  const [treeniData, setTreeniData] = useState([]);
  const [treeninKesto, setTreeninKesto] = useState('');
  const [kohderyhma, setKohderyhma] = useState('');
  const [treeniText, setTreeniText] = useState('');
  const [aloitaRoute, setAloitaRoute] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const colorScheme = useColorScheme();
  Appearance.getColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';

  const { treeninNimi, image } = route.params;

  async function getData() {
    try {
      axios
        .get(`http://${HOMEDATA}/api/treenit/${treeninNimi}`)
        .then((response) => {
          console.log(response.data);
          setTreeniData(response.data[0].liikkeet);
          setTreeninKesto(response.data[0].kuvaus.treeninkesto);
          setKohderyhma(response.data[0].kuvaus.kohderyhma);
          setTreeniText(response.data[0].kuvaus.treenitext);
          setAloitaRoute(response.data[0].kuvaus.aloitaRoute);
          //   console.log(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }

  const showToast = () => {
    Toast.show({
      text2: 'Implemented soon!',
      type: 'info',
      visibilityTime: 2500,
    });
  };

  useEffect(() => {
    getData();
    console.log(treeninNimi);
  }, []);

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <Image
        style={styles.image}
        source={{ uri: `http://${HOMEDATA}/api/${image}`, cache: 'default' }}
      />
      <View style={{ flexDirection: 'row', position: 'absolute', top: 35 }}>
        <IconTouchable onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle-outline" size={38} color="white" />
        </IconTouchable>
        <IconTouchable onPress={() => showToast()}>
          <Ionicons name="ios-heart-outline" size={38} color="white" style={{ marginLeft: 300 }} />
        </IconTouchable>
      </View>

      {!isLoading ? (
        <MainDataContainer>
          <ScrollView style={{ marginTop: 10 }}>
            <TreeninKuvausData
              treeninKesto={treeninKesto}
              kohderyhma={kohderyhma}
              treeniText={treeniText}
              treeniData={treeniData}
            />

            {treeniData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('TreeninEsikatselu', {
                    nimi: item.nimi,
                    videoID: item.videoId,
                    ohjeet: item.ohjeet,
                  })
                }
              >
                <ListItem
                  containerStyle={{
                    height: 100,
                    backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
                  }}
                  bottomDivider
                >
                  <ListItem.Content>
                    <TextContainer>
                      <Text fontFamily="MontserratRegular" medium>
                        {item.nimi}
                      </Text>
                      <Text
                        fontFamily="MontserratRegular"
                        style={{
                          position: 'absolute',
                          left: 255,
                          color: colorScheme === 'dark' ? '#fff' : '#000',
                        }}
                        medium
                        opacity={0.7}
                      >
                        {item.sarjat} sarjaa
                      </Text>
                    </TextContainer>
                  </ListItem.Content>

                  <Ionicons
                    name="ios-chevron-forward-sharp"
                    size={24}
                    color={themeColor}
                    style={{ opacity: 0.4 }}
                  />
                </ListItem>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </MainDataContainer>
      ) : (
        <LottieLoading />
      )}

      {!isLoading && (
        <ButtonContainer>
          <GradientButtonLib
            teksti="Aloita"
            onPressAction={() =>
              navigation.navigate('TreeninAloitus', {
                treeni: treeninNimi,
              })
            }
          />
        </ButtonContainer>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '30%',
  },
});

const TextContainer = styled.View`
  flex-direction: row;
`;

const MainDataContainer = styled.View`
  flex: 2;
`;
