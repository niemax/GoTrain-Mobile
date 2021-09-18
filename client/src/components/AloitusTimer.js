import React, { useEffect, useState, useRef } from 'react';
import { AppState, View, TouchableOpacity, Touchable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Text from './Text';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { differenceInSeconds } from 'date-fns';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TaukoButton, JatkaButton, LisaAikaButton } from '../utils/Styling';

export default function AloitusTimer({ timerOn }) {
  const [count, setCount] = useState(150);
  const [elapsed, setElapsed] = useState(0);
  const [totalTime, setTotalTime] = useState();
  const appState = useRef(AppState.currentState);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';

  useEffect(() => {
    let timerInterval;
    if (count <= 0 || count - elapsed <= 0) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [count, elapsed]);

  const getElapsedTime = async () => {
    try {
      const startTime = await AsyncStorage.getItem('@countdown');
      const now = new Date();
      return differenceInSeconds(now, Date.parse(startTime));
    } catch (err) {
      console.warn(err);
    }
  };

  const handleAppStateChange = async (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      const elapsed = await getElapsedTime();
      elapsed.toFixed(0);
      setElapsed(elapsed);
    } else {
      try {
        const now = new Date();
        await AsyncStorage.setItem('@countdown', now.toISOString());
      } catch (err) {
        console.warn(err);
      }
    }
    appState.current = nextAppState;
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, []);

  const handleLisaAika = () => {
    Haptics.selectionAsync();
    setCount((prevCount) => prevCount + 15);
  };

  const handleMinusAika = () => {
    Haptics.selectionAsync();
    setCount((prevCount) => prevCount - 15);
  };

  return (
    <>
      <View style={{ height: 250, alignItems: 'center' }}>
        <Text fontFamily="MontserratBold" large marginBottom="30px">
          TAUKO
        </Text>
        <AnimatedCircularProgress
          size={150}
          width={7}
          fill={count - elapsed}
          tintColor="#2301e4"
          backgroundColor="black"
        >
          {(fill) =>
            count - elapsed > 0 ? (
              <Text title fontFamily="MontserratBold" style={{ color: '#054dd9' }}>
                {count - elapsed}s
              </Text>
            ) : (
              <Text medium>Tauko päättynyt</Text>
            )
          }
        </AnimatedCircularProgress>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={handleMinusAika}>
          <Feather name="minus" size={56} color={themeColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLisaAika}>
          <Feather name="plus" size={56} color={themeColor} />
        </TouchableOpacity>
      </View>
    </>
  );
}
