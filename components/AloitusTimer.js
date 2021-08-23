import React, { useEffect, useState, useRef } from 'react';
import { AppState, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Text from './Text';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { differenceInSeconds } from 'date-fns';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TaukoButton, JatkaButton, LisaAikaButton } from '../utils/Styling';

export default function AloitusTimer() {
  const [timerOn, setTimerOn] = useState(true);
  const [count, setCount] = useState(20);
  const [elapsed, setElapsed] = useState(0);
  const [totalTime, setTotalTime] = useState();
  const appState = useRef(AppState.currentState);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  useEffect(() => {
    let timerInterval;
    if (count > 0) {
      if (timerOn) {
        timerInterval = setInterval(() => {
          setCount((c) => c - 1);
        }, 1000);
      } else {
        clearInterval(timerInterval);
      }
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerOn]);

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

  const handleTauko = () => {
    Haptics.selectionAsync();
    setTimerOn(false);
  };

  const handleJatka = () => {
    Haptics.selectionAsync();
    setTimerOn(true);
  };

  return (
    <View style={{ height: 350, alignItems: 'center' }}>
      <Text fontFamily="MontserratBold" large marginBottom="30px">
        TAUKO
      </Text>
      <AnimatedCircularProgress
        size={150}
        width={15}
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
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          padding: 10,
        }}
      >
        <TaukoButton
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={handleTauko}
        >
          <Feather name="pause" size={28} color="white" />
        </TaukoButton>
        <JatkaButton
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={handleJatka}
        >
          <Feather name="play" size={28} color="white" />
        </JatkaButton>
        <LisaAikaButton
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={handleLisaAika}
        >
          <Text medium style={{ color: '#fff' }}>
            +15s
          </Text>
        </LisaAikaButton>
      </View>
    </View>
  );
}
