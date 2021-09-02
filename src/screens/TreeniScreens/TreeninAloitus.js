import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { API } from '@env';
import * as Haptics from 'expo-haptics';
import Dialogs from '../../components/Dialogs';
import LopetaTreeni from './TreeninLopetus';
import Text from '../../components/Text';
import { toastConfig } from '../../config/toastConfig';
import LinearGradientButton from '../../components/LinearGradientButton';
import {
  IconTouchable2,
  UtilsContainer,
  AloitusRenderContainer,
  AloitusButtonContainer,
  ExtraContainer,
  PreviousButton,
  NextButton,
  SeuraavaksiContainer,
} from '../../utils/Styling';

const { width: viewportWidth } = Dimensions.get('window');

const AloitaTreeni = ({ route, navigation }) => {
  const [treeniData, setTreeniData] = useState([]);
  const [tehdytTreenit, setTehdytTreenit] = useState({});
  const [pbProgress, setPbProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [doneCount, setDoneCount] = useState(0);
  const [toisto, setToisto] = useState('');
  const [paino, setPaino] = useState('');
  const [lisatieto, setLisatieto] = useState('');
  const [toistotPainotData, setToistotPainotData] = useState([]);
  const [open, setOpen] = useState(false);

  const carousel = useRef();
  const { treeninNimi } = route.params;

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  useEffect(() => {
    try {
      axios
        .get(`${API}/api/treenit/${treeninNimi}`)
        .then((response) => setTreeniData(response.data[0].liikkeet))
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 6000);
        });
    } catch (error) {
      console.error(error);
    }
  }, [treeninNimi]);

  const setProgress = (item, index) => {
    const treenit = { ...tehdytTreenit };

    if (!(item.nimi in treenit)) {
      treenit[item.nimi] = {
        nimi: item.nimi,
        sarjat: item.sarjat,
        id: index,
        suoritusStats: toistotPainotData,
      };

      setDoneCount((count) => count + 1);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Toast.show({
        text2: `${item.nimi} tehty!`,
        type: 'success',
        visibilityTime: 1000,
      });
      if (index < treeniData.length - 1) {
        setTimeout(() => {
          carousel.current.snapToNext();
        }, 1000);
      }
    } else {
      delete treenit[item.nimi];
      setDoneCount((count) => count - 1);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      Toast.show({
        text2: `${item.nimi} poistettu!`,
        type: 'error',
        visibilityTime: 1500,
      });
    }
    setTehdytTreenit(treenit);
    setToistotPainotData('');
    setPbProgress(Object.keys(treenit).length / treeniData.length);
  };

  const renderItem = ({ item, index }) => {
    const treenitLength = Object.keys(treeniData).length;
    const colorIcon = colorScheme === 'dark' ? 'white' : 'black';
    const nextValue = treeniData[(index + 1) % treeniData.length].nimi;
    const ifDoneBtnColor = !tehdytTreenit.hasOwnProperty(item.nimi)
      ? ['#2301E4', '#054dd9']
      : ['#00FFBA', '#78E7C7'];

    return (
      <AloitusRenderContainer
        key={index}
        style={{
          backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
        }}
      >
        <ScrollView>
          <ExtraContainer>
            <IconTouchable2 onPress={() => navigation.goBack()} left marginLeft="15px">
              <Ionicons name="return-up-back-outline" size={28} color={colorIcon} />
            </IconTouchable2>
            <Text medium marginRight="15px">
              <Text medium>TEHTY</Text> {doneCount} / {treeniData.length}
            </Text>
          </ExtraContainer>
          <YoutubePlayer height={230} videoId={item.videoId} />

          <Progress.Bar
            progress={pbProgress}
            width={null}
            height={5}
            borderWidth={null}
            color="#2301E4"
          />

          <UtilsContainer>
            <Text large>{item.nimi.toUpperCase()}</Text>

            <Text marginTop="15px" large>
              {item.sarjat} sarjaa{' '}
            </Text>

            <AloitusButtonContainer>
              {index > 0 && (
                <PreviousButton
                  onPress={() => {
                    carousel.current.snapToPrev();
                  }}
                >
                  <Ionicons name="ios-chevron-back-outline" size={52} color="#2301E4" />
                </PreviousButton>
              )}

              <TouchableOpacity onPress={() => setProgress(item, index)}>
                <LinearGradientButton colors={ifDoneBtnColor} />
              </TouchableOpacity>
              {index < treenitLength - 1 && (
                <NextButton
                  onPress={() => {
                    carousel.current.snapToNext();
                  }}
                >
                  <Ionicons name="ios-chevron-forward-outline" size={52} color="#2301E4" />
                </NextButton>
              )}
            </AloitusButtonContainer>
          </UtilsContainer>
          <SeuraavaksiContainer>
            {index < treenitLength - 1 && (
              <Text fontFamily="MontserratRegular" small>
                SEURAAVAKSI
              </Text>
            )}
            {index < treenitLength - 1 && (
              <Text
                medium
                style={{
                  color: colorScheme === 'dark' ? '#fff' : '#000',
                }}
                treeninNimi
              >
                {nextValue.toUpperCase()}
              </Text>
            )}
          </SeuraavaksiContainer>
          <Dialogs
            visible={visible}
            setVisible={setVisible}
            toisto={toisto}
            setToisto={setToisto}
            paino={paino}
            setPaino={setPaino}
            lisatieto={lisatieto}
            setLisatieto={setLisatieto}
            open={open}
            setOpen={setOpen}
            toistotPainotData={toistotPainotData}
            setToistotPainotData={setToistotPainotData}
            sarjatLength={item.sarjat}
            video={item.videoId}
            index={index}
          />
        </ScrollView>
      </AloitusRenderContainer>
    );
  };

  if (pbProgress >= 1) {
    return <LopetaTreeni treeni={treeninNimi} data={tehdytTreenit} />;
  }
  return (
    <Carousel
      ref={carousel}
      data={treeniData}
      itemWidth={viewportWidth}
      sliderWidth={viewportWidth}
      renderItem={renderItem}
      slideStyle={{ width: viewportWidth }}
      scrollEnabled="true"
      layout="stack"
    />
  );
};

export default AloitaTreeni;
