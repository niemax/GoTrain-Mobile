import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Ionicons, Feather } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { API } from '@env';
import Dialogs from '../../components/Dialogs';
import { LottieLoadingAloitus } from '../../components/Lottie';
import LopetaTreeni from './TreeninLopetus';
import Text from '../../components/Text';
import * as Haptics from 'expo-haptics';
import LinearGradientButton from '../../components/LinearGradientButton';
import {
  IconTouchable2,
  UtilsContainer,
  AloitusRenderContainer,
  AloitusButtonContainer,
  ExtraContainer,
  PreviousButton,
  NextButton,
  LoadingView,
  SeuraavaksiContainer,
} from '../../utils/Styling';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

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
  const { treeni } = route.params;

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  useEffect(() => {
    try {
      axios
        .get(`${API}/api/treenit/${treeni}`)
        .then((response) => setTreeniData(response.data[0].liikkeet))
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 6000);
        });
    } catch (error) {
      console.error(error);
    }
  }, [treeni]);

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
    setToistotPainotData('');
    setTehdytTreenit(treenit);
    setPbProgress(Object.keys(treenit).length / treeniData.length);
    console.log('treenit', treenit, Object.keys(treenit).length);
  };

  const renderItem = ({ item, index }) => {
    const btnColor = tehdytTreenit.hasOwnProperty(item.nimi) ? 'green' : 'white';
    const treenitLength = Object.keys(treeniData).length;
    const colorIcon = colorScheme === 'dark' ? 'white' : 'black';
    const nextValue = treeniData[(index + 1) % treeniData.length].nimi;

    if (!isLoading) {
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
              height={6}
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
                  <LinearGradientButton>
                    <Feather name="check-circle" color={btnColor} size={80} />
                  </LinearGradientButton>
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
            />
          </ScrollView>
        </AloitusRenderContainer>
      );
    }
    return (
      <LoadingView>
        <LottieLoadingAloitus />
      </LoadingView>
    );
  };

  if (pbProgress >= 1) {
    return <LopetaTreeni treeni={treeni} data={tehdytTreenit} />;
  }
  return (
    <Carousel
      ref={carousel}
      data={treeniData}
      itemWidth={viewportWidth}
      sliderWidth={viewportWidth}
      renderItem={renderItem}
      slideStyle={{ width: viewportWidth }}
      scrollEnabled={false}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
    />
  );
};

export default AloitaTreeni;
