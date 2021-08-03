import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import { API } from '@env';
import axios from 'axios';
import { LottieLoading } from '../../components/Lottie';
import TreeninKuvausData from '../../components/TreeninKuvausData';
import { Container, ButtonContainer, IconTouchable, AloitaButton } from '../../utils/Styling';
import Text from '../../components/Text';

const showToast = () => {
  Toast.show({
    text2: 'Implemented soon!',
    type: 'info',
    visibilityTime: 2500,
  });
};

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

  useEffect(() => {
    try {
      axios
        .get(`${API}/api/treenit/${treeninNimi}`)
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
  }, [treeninNimi]);

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <Image style={styles.image} source={{ uri: `${API}/api/${image}`, cache: 'default' }} />
      <View style={{ flexDirection: 'row', position: 'absolute', top: 35 }}>
        <IconTouchable onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={32} color="white" />
        </IconTouchable>
        {/*         <IconTouchable onPress={() => showToast()}>
          <Feather name="heart" size={32} color="white" style={{ marginLeft: 300 }} />
        </IconTouchable> */}
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

            {treeniData.map(({ nimi, videoId, ohjeet, sarjat }) => (
              <TouchableOpacity
                key={nimi}
                onPress={() =>
                  navigation.navigate('TreeninEsikatselu', {
                    nimi: nimi,
                    videoID: videoId,
                    ohjeet: ohjeet,
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
                        {nimi}
                      </Text>
                      <Text
                        fontFamily="MontserratRegular"
                        style={{
                          position: 'absolute',
                          left: 235,
                          color: colorScheme === 'dark' ? '#fff' : '#000',
                        }}
                        medium
                        opacity={0.7}
                      >
                        {sarjat} sarjaa
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
          <AloitaButton
            onPress={() =>
              navigation.navigate('TreeninAloitus', {
                treeni: treeninNimi,
              })
            }
          >
            <Text style={{ color: '#fff' }} large>
              Aloita
            </Text>
          </AloitaButton>
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
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

const MainDataContainer = styled.View`
  flex: 2;
`;
