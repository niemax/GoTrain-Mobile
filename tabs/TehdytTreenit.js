import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import { Feather, AntDesign } from '@expo/vector-icons';
import AgendaComponent from '../components/Agenda';
import HeaderComponent from '../components/HeaderComponent';
import Text from '../components/Text';
import { loggingOut } from '../API/FirebaseMethods';
import * as firebase from 'firebase';
import {
  TehdytMainContainer,
  TehdytTreenitContainer,
  TehdytTreenitBoxContainer,
} from '../utils/Styling';

const TehdytTreenit = () => {
  const [dataLength, setDataLength] = useState('');
  const [favorite, setFavorite] = useState('');
  const [loading, setLoading] = useState(false);

  const icon = <Feather name="log-out" size={24} color="white" />;

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
        const reduced = Object.values(arr).reduce((a, b) => (arr[a] > arr[b] ? a : b), {});
        setFavorite(reduced);
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }, {});
  }, []);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <TehdytMainContainer
      style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5' }}
    >
      <HeaderComponent
        rightComponent={<TouchableOpacity onPress={loggingOut}>{icon}</TouchableOpacity>}
        leftComponent={
          <Text style={{ color: 'white' }} medium>
            MINÄ
          </Text>
        }
        containerStyle={{ backgroundColor: '#2301E4', borderBottomWidth: 'none' }}
      />
      <TehdytTreenitContainer />
      <TehdytTreenitBoxContainer
        style={{
          backgroundColor: colorScheme === 'dark' ? '#141414' : '#fff',
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
        <View style={{ borderLeftWidth: 1, borderLeftColor: 'grey', height: 50 }} />
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {loading ? null : <AntDesign name="heart" size={24} color="#F82F6B" />}
          <Text style={{ color: '#054dd9' }} medium>
            {loading ? <ActivityIndicator style={{ marginTop: 8 }} size="small" /> : favorite}
          </Text>
        </View>
        <View style={{ borderLeftWidth: 1, borderLeftColor: 'grey', height: 50 }} />
        <View style={{ flexDirection: 'column' }}>
          <Text marginBottom="5px" fontFamily="MontserratRegular" medium>
            KA / VIIKKO
          </Text>
          <Text style={{ color: '#054dd9' }} medium>
            {loading ? <ActivityIndicator style={{ marginTop: 8 }} size="small" /> : dataLength / 4}
          </Text>
        </View>
      </TehdytTreenitBoxContainer>
      <AgendaComponent />
    </TehdytMainContainer>
  );
};

export default TehdytTreenit;
