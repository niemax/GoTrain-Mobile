import React, { useEffect, useState } from 'react';
import Text from '../../components/Text';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';
import moment from 'moment';
import 'moment/locale/fi';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import TreeninLopetusCards from '../../components/TreeninLopetusCards';
import {
  ButtonContainer,
  PalauteIcon,
  PalauteButtonContainer,
  Container,
  AloitaButton,
} from '../../utils/Styling';
import { LottieAnimationCongratulations } from '../../components/Lottie';

const LopetaTreeni = ({ data, treeni }) => {
  const [shoot, setShoot] = useState(false);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';
  const navigation = useNavigation();

  const saveToDatabase = async () => {
    const db = firebase.firestore();

    const { currentUser } = firebase.auth();

    const date = moment().locale('fi').format('LL');

    const ref = db.collection('users').doc(currentUser.uid).collection('treenidata');

    try {
      await ref.add({
        treeni: treeni,
        pvm: date,
        timestamp: Date.now(),
        treeniData: data,
      });
    } catch (err) {
      console.error(err);
    }

    Toast.show({
      text2: 'Treeni lisätty tehtyihin treeneihin',
      type: 'success',
      visibilityTime: 2500,
    });

    setTimeout(() => {
      navigation.pop(2);
    }, 500);
  };

  useEffect(() => {
    setShoot(true);
  }, []);

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <LottieAnimationCongratulations />
      <Text
        fontFamily="MontserratSemiBold"
        style={{ color: themeColor }}
        marginTop="20px"
        large
        medium
      >
        {treeni.toUpperCase()} SUORITETTU
      </Text>
      <TreeninLopetusCards data={data} />
      {shoot ? (
        <ConfettiCannon
          count={250}
          origin={{ x: 0, y: -20 }}
          autoStart={false}
          fallSpeed={7000}
          fadeOut
        />
      ) : null}

      <ButtonContainer>
        <AloitaButton onPress={saveToDatabase}>
          <Text style={{ color: '#fff' }} large>
            Sulje
          </Text>
        </AloitaButton>
      </ButtonContainer>
    </Container>
  );
};

export default LopetaTreeni;
