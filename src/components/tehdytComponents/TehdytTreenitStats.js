import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import { AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase';
import { color } from 'react-native-reanimated';
import Text from '../Text';
import { TehdytTreenitBoxContainer } from '../../utils/Styling';

const TehdytTreenitStats = () => {
  const [dataLength, setDataLength] = useState('');
  const [favorite, setFavorite] = useState('');
  const [loading, setLoading] = useState(false);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';

  useEffect(() => {
    setLoading(true);
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection('users')
      .doc(currentUser.uid)
      .collection('treenidata')
      .get()

      .then((snapshot) => {
        setDataLength(snapshot.size);
        const arr = [];
        snapshot.docs.map((item) => {
          const { treeni } = item.data();
          arr.push(treeni);
        });
        const reduced = arr.reduce((acc, curr) =>
          arr.filter((item) => item === acc).length > arr.filter((item) => item === curr).length
            ? acc
            : curr
        );
        setFavorite(reduced);
        setLoading(false);
      }, {});
  }, []);

  Appearance.getColorScheme();

  return (
    <>
      <TehdytTreenitBoxContainer>
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{ color: themeColor }}
            marginBottom="5px"
            fontFamily="MontserratSemiBold"
            medium
          >
            TREENIT
          </Text>
          <Text style={{ color: '#338467' }} medium>
            {loading ? (
              <ActivityIndicator style={{ marginTop: 8 }} color="#338467" size="small" />
            ) : (
              dataLength
            )}
          </Text>
        </View>
        <View style={{ borderLeftWidth: 0.4, borderLeftColor: 'grey', height: 45 }} />
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {loading ? null : <AntDesign name="heart" size={24} color="#F82F6B" />}
          <Text style={{ color: '#338467' }} medium>
            {loading ? (
              <ActivityIndicator style={{ marginTop: 8 }} color="#338467" size="small" />
            ) : (
              favorite
            )}
          </Text>
        </View>
        <View style={{ borderRightWidth: 0.4, borderRightColor: 'grey', height: 45 }} />
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{ color: themeColor }}
            marginBottom="5px"
            fontFamily="MontserratSemiBold"
            medium
          >
            KA / VIIKKO
          </Text>
          <Text style={{ color: '#338467' }} medium>
            {loading ? (
              <ActivityIndicator style={{ marginTop: 8 }} color="#338467" size="small" />
            ) : (
              dataLength / 4
            )}
          </Text>
        </View>
      </TehdytTreenitBoxContainer>
    </>
  );
};

export default TehdytTreenitStats;
