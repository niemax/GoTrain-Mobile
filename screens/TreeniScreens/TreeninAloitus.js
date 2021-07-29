import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
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
import {
  VideoContainer,
  UtilsContainer,
  AloitusRenderContainer,
  AloitusButtonContainer,
  ExtraContainer,
  PreviousButton,
  NextButton,
  DoneButton,
  LoadingView,
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
      Toast.show({
        text2: `${item.nimi} tehty!`,
        type: 'success',
        visibilityTime: 1000,
      });
    } else {
      delete treenit[item.nimi];
      setDoneCount((count) => count - 1);
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
    const btnColor = tehdytTreenit.hasOwnProperty(item.nimi)
      ? '#054dd9'
      : colorScheme === 'dark'
      ? 'white'
      : 'black';
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
          <ExtraContainer>
            <IconTouchable onPress={() => navigation.goBack()} left marginLeft="15px">
              <Ionicons name="return-up-back-outline" size={28} color={colorIcon} />
            </IconTouchable>
            <Text medium marginRight="15px">
              <Text medium>TEHTY</Text> {doneCount} / {treeniData.length}
            </Text>
          </ExtraContainer>
          <VideoContainer>
            <YoutubePlayer height={240} videoId={item.videoId} />
          </VideoContainer>

          <Progress.Bar
            progress={pbProgress}
            width={null}
            height={3}
            borderWidth={null}
            color="#054dd9"
          />

          <UtilsContainer>
            <Text title>{item.nimi.toUpperCase()}</Text>

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
                  <Ionicons name="ios-chevron-back-outline" size={58} color="#054dd9" />
                </PreviousButton>
              )}

              <DoneButton onPress={() => setProgress(item, index)}>
                <Feather name="check-circle" size={80} color={btnColor} />
              </DoneButton>

              {index < treenitLength - 1 && (
                <NextButton
                  onPress={() => {
                    carousel.current.snapToNext();
                  }}
                >
                  <Ionicons name="ios-chevron-forward-outline" size={58} color="#054dd9" />
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

export const IconTouchable = styled.TouchableOpacity`
  margin-left: 10px;
`;
