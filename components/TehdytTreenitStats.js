import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import { AntDesign } from '@expo/vector-icons';
import Text from '../components/Text';
import * as firebase from 'firebase';
import { TehdytTreenitContainer, TehdytTreenitBoxContainer } from '../utils/Styling';

const TehdytTreenitStats = () => {
  const [dataLength, setDataLength] = useState('');
  const [favorite, setFavorite] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    setLoading(true);
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
        console.log(arr);
        const reduced = arr.reduce((acc, curr) =>
          arr.filter((item) => item === acc).length > arr.filter((item) => item === curr).length
            ? acc
            : curr
        );
        setFavorite(reduced);
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }, {});
  }, []);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <>
      <TehdytTreenitContainer />
      <TehdytTreenitBoxContainer
        style={{
          backgroundColor: colorScheme === 'dark' ? '#141414' : '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}
      >
        <View style={{ flexDirection: 'column' }}>
          <Text marginBottom="5px" fontFamily="MontserratRegular" medium>
            TREENIT
          </Text>
          <Text style={{ color: '#054dd9' }} medium>
            {loading ? <ActivityIndicator style={{ marginTop: 8 }} size="small" /> : dataLength}
          </Text>
        </View>
        <View style={{ borderLeftWidth: 0.4, borderLeftColor: 'grey', height: 45 }} />
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {loading ? null : <AntDesign name="heart" size={24} color="#F82F6B" />}
          <Text style={{ color: '#054dd9' }} medium>
            {loading ? <ActivityIndicator style={{ marginTop: 8 }} size="small" /> : favorite}
          </Text>
        </View>
        <View style={{ borderRightWidth: 0.4, borderRightColor: 'grey', height: 45 }} />
        <View style={{ flexDirection: 'column' }}>
          <Text marginBottom="5px" fontFamily="MontserratRegular" medium>
            KA / VIIKKO
          </Text>
          <Text style={{ color: '#054dd9' }} medium>
            {loading ? <ActivityIndicator style={{ marginTop: 8 }} size="small" /> : dataLength / 4}
          </Text>
        </View>
      </TehdytTreenitBoxContainer>
    </>
  );
};

export default TehdytTreenitStats;
