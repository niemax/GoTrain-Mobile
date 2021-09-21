import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View, SafeAreaView } from 'react-native';
import Dialog from 'react-native-dialog';
import { Ionicons, Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import ActionSheet from 'react-native-actions-sheet';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { API } from '@env';
import axios from 'axios';
import TreeninKuvausData from '../../components/TreeninKuvausData';
import { Container, IconTouchable, AloitaButton, Loading } from '../../utils/Styling';
import Text from '../../components/Text';
import EsittelyAloitusTimer from '../../components/EsittelyAloitusTimer';
import TreeninEsikatselu from './TreeninEsikatselu';

export default function TreeninEsittely({ route, navigation }) {
  const [treeniData, setTreeniData] = useState([]);
  const [treeninKesto, setTreeninKesto] = useState('');
  const [kohderyhma, setKohderyhma] = useState('');
  const [treeniText, setTreeniText] = useState('');
  const [aloitaRoute, setAloitaRoute] = useState('');
  const [timerVisible, setTimerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const actionSheetRef = useRef(null);
  const colorScheme = useColorScheme();
  Appearance.getColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';
  const { treeninNimi, image } = route.params;

  const handleModalPress = () => {
    Haptics.selectionAsync();
    actionSheetRef.current.setModalVisible();
  };

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
        backgroundColor: colorScheme === 'dark' ? '#141314' : 'white',
      }}
    >
      <Dialog.Container visible={timerVisible} contentStyle={{ opacity: 0.98 }}>
        <EsittelyAloitusTimer treeninNimi={treeninNimi} />
      </Dialog.Container>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={{ flexDirection: 'row', position: 'absolute', top: 35 }}>
        <IconTouchable onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={32} color="white" />
        </IconTouchable>
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
            <TouchableOpacity key={nimi} onPress={handleModalPress}>
              <SafeAreaView>
                <ActionSheet
                  extraScroll={1}
                  gestureEnabled="true"
                  initialOffsetFromBottom={0.5}
                  ref={actionSheetRef}
                  containerStyle={{
                    backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
                  }}
                >
                  <TreeninEsikatselu videoID={videoId} ohjeet={ohjeet} />
                </ActionSheet>
              </SafeAreaView>
              <View
                style={{
                  height: 100,
                  backgroundColor: colorScheme === 'dark' ? '#141314' : 'white',
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
        <Loading color="#2C1601" size="large" />
      )}

      {!isLoading && (
        <View
          style={{
            alignItems: 'flex-end',
            marginBottom: 9,
            marginRight: 15,
          }}
        >
          <AloitaButton onPress={handleAloitusButton}>
            <Text style={{ color: '#522802' }} large>
              <Feather name="play" size={36} color="white" />
            </Text>
          </AloitaButton>
        </View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '25%',
    opacity: 0.93,
  },
});
