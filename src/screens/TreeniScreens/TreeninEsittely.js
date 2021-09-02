import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import Dialog from 'react-native-dialog';
import styled from 'styled-components/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import { API } from '@env';
import axios from 'axios';
import TreeninKuvausData from '../../components/TreeninKuvausData';
import { Container, ButtonContainer, IconTouchable, AloitaButton } from '../../utils/Styling';
import Text from '../../components/Text';
import EsittelyAloitusTimer from '../../components/EsittelyAloitusTimer';

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
  const [timerVisible, setTimerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  const colorScheme = useColorScheme();
  Appearance.getColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';

  const { treeninNimi, image } = route.params;

  useEffect(() => {
    try {
      axios
        .get(`${API}/api/treenit/${treeninNimi}`)
        .then((response) => {
          console.log(response.data[0].name);
          setTreeniData(response.data[0].liikkeet);
          setTreeninKesto(response.data[0].kuvaus.treeninkesto);
          setKohderyhma(response.data[0].kuvaus.kohderyhma);
          setTreeniText(response.data[0].kuvaus.treenitext);
          setAloitaRoute(response.data[0].kuvaus.aloitaRoute);
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

  const handleAloitusButton = () => {
    setTimerVisible(true);

    setTimeout(() => {
      setTimerVisible(false);
    }, 5000);
  };

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <Dialog.Container visible={timerVisible} contentStyle={{ opacity: 0.98 }}>
        <EsittelyAloitusTimer treeninNimi={treeninNimi} />
      </Dialog.Container>
      <Image style={styles.image} source={{ uri: `${API}/api/${image}` }} />
      <View style={{ flexDirection: 'row', position: 'absolute', top: 35 }}>
        <IconTouchable onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={32} color="white" />
        </IconTouchable>
        {/*         <IconTouchable onPress={() => showToast()}>
          <Feather name="heart" size={32} color="white" style={{ marginLeft: 300 }} />
        </IconTouchable> */}
      </View>

      {!isLoading ? (
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
                  title: nimi,
                })
              }
            >
              <View
                style={{
                  height: 100,
                  backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 13,
                  justifyContent: 'space-between',
                }}
              >
                <Text fontFamily="MontserratRegular" medium>
                  {nimi}
                </Text>
                <Text fontFamily="MontserratRegular" medium opacity={0.7}>
                  {sarjat} sarjaa
                </Text>
                <Ionicons
                  name="ios-chevron-forward-sharp"
                  size={24}
                  color={themeColor}
                  style={{ opacity: 0.4 }}
                />
              </View>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  marginLeft: 20,
                  backgroundColor: 'grey',
                  opacity: 0.1,
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ActivityIndicator style={{ marginTop: 200 }} size="large" />
      )}

      {!isLoading && (
        <ButtonContainer>
          <AloitaButton onPress={handleAloitusButton}>
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
    opacity: 0.93,
  },
});