import React, { useState, useRef } from 'react';
import { View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import { API } from '@env';
import * as Haptics from 'expo-haptics';
import Dialogs from '../../components/Dialogs';
import LopetaTreeni from './TreeninLopetus';
import Text from '../../components/Text';
import useAloitusFetch from '../../hooks/useAloitusFetch';
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
  const [tehdytTreenit, setTehdytTreenit] = useState({});
  const [pbProgress, setPbProgress] = useState(0);
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

  const { responseData } = useAloitusFetch(`${API}/api/treenit/${treeninNimi}`);

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
      if (index < responseData.length - 1) {
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
    setPbProgress(Object.keys(treenit).length / responseData.length);
  };

  const renderItem = ({ item, index }) => {
    const treenitLength = Object.keys(responseData).length;
    const colorIcon = colorScheme === 'dark' ? 'white' : 'black';
    const nextValue = responseData[(index + 1) % responseData.length].nimi;
    const ifDoneBtnColor = Object.prototype.hasOwnProperty.call(tehdytTreenit, item.nimi)
      ? '#338467'
      : 'white';

    return (
      <AloitusRenderContainer
        key={index}
        style={{
          backgroundColor: colorScheme === 'dark' ? '#141314' : '#FFF',
        }}
      >
        <ScrollView>
          <ExtraContainer>
            <IconTouchable2 onPress={() => navigation.goBack()} left marginLeft="15px">
              <Feather name="chevron-left" size={28} color={colorIcon} />
            </IconTouchable2>
            <View>
              <IconTouchable2
                onPress={() => navigation.navigate('AloitusHistory')}
                left
                marginLeft="15px"
              >
                <MaterialIcons
                  name="history"
                  size={36}
                  color="#338467"
                  style={{ marginBottom: 2 }}
                />
              </IconTouchable2>
            </View>
            <Text medium marginRight="15px">
              <Text medium>TEHTY</Text> {doneCount} / {responseData.length}
            </Text>
          </ExtraContainer>
          <YoutubePlayer height={230} videoId={item.videoId} />

          <Progress.Bar
            progress={pbProgress}
            width={null}
            height={5}
            borderWidth={null}
            color="#338467"
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
                  <Ionicons
                    name="ios-chevron-back-outline"
                    size={52}
                    color={colorScheme === 'dark' ? 'white' : 'black'}
                  />
                </PreviousButton>
              )}

              <TouchableOpacity
                onPress={() => setProgress(item, index)}
                style={{ justifyContent: 'center', alignItems: 'center' }}
              >
                <Feather name="check" size={62} color={ifDoneBtnColor} />
              </TouchableOpacity>
              {index < treenitLength - 1 && (
                <NextButton
                  onPress={() => {
                    carousel.current.snapToNext();
                  }}
                >
                  <Ionicons
                    name="ios-chevron-forward-outline"
                    size={52}
                    color={colorScheme === 'dark' ? 'white' : 'black'}
                  />
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
      data={responseData}
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
