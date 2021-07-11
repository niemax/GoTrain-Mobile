import React, { useEffect, useState } from 'react';
import Text from '../../components/Text';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Card } from 'react-native-elements';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';
import moment from 'moment';
import 'moment/locale/fi';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import {
  ButtonContainer,
  PalauteIcon,
  PalauteButtonContainer,
  Container,
} from '../../utils/Styling';
import { LottieAnimationCongratulations } from '../../components/Lottie';

import { GradientButtonLib } from '../../components/GradientButton';

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
  // console.log("tehdyt treenit data", data);

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <LottieAnimationCongratulations />
      <Text
        style={{ fontFamily: 'MontserratExtraBold', color: themeColor }}
        marginTop="20px"
        large
        medium
      >
        {treeni.toUpperCase()} SUORITETTU
      </Text>

      <Card
        containerStyle={{
          borderWidth: 0,
          elevation: 3,
          height: 100,
          width: '92%',
          backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
          borderRadius: 15,
        }}
      >
        <Text style={{ fontFamily: 'MontserratExtraBold', color: themeColor }} medium>
          TREENIT{' '}
        </Text>
        <Text style={{ fontFamily: 'MontserratExtraBold', color: '#054dd9' }} title color="#054dd9">
          {Object.keys(data).length}
        </Text>
      </Card>
      <Card
        containerStyle={{
          borderWidth: 0,
          elevation: 3,
          height: 100,
          width: '92%',
          backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
          borderRadius: 15,
        }}
      >
        <Text style={{ fontFamily: 'MontserratExtraBold', color: themeColor }} medium>
          SUORITUS %{' '}
        </Text>
        <Text style={{ fontFamily: 'MontserratExtraBold', color: '#054dd9' }} title color="#054dd9">
          100
        </Text>
      </Card>
      <Card
        containerStyle={{
          borderWidth: 0,
          elevation: 3,
          height: 200,
          width: '92%',
          backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
          borderRadius: 15,
        }}
      >
        <Text style={{ fontFamily: 'MontserratExtraBold', color: themeColor }} medium>
          Oliko treeni mieluisa?{' '}
        </Text>
        <Text
          style={{ fontFamily: 'MontserratExtraBold', color: themeColor }}
          marginTop="10px"
          small
        >
          Annathan palautetta, jotta voin kehittää treenitarjontaa
        </Text>
        <PalauteButtonContainer>
          <PalauteIcon>
            <Ionicons name="ios-sad-outline" size={64} color={themeColor} />
          </PalauteIcon>
          <PalauteIcon>
            <FontAwesome5 name="smile-beam" size={64} color={themeColor} />
          </PalauteIcon>
          <PalauteIcon>
            <Ionicons name="ios-sad-outline" size={64} color={themeColor} />
          </PalauteIcon>
        </PalauteButtonContainer>
      </Card>

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
        <GradientButtonLib teksti="Valmis" onPressAction={() => saveToDatabase()} />
      </ButtonContainer>
    </Container>
  );
};

export default LopetaTreeni;
