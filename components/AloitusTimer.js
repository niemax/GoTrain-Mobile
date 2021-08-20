import React, { useEffect, useState, useRef } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Text from './Text';
import { differenceInSeconds } from 'date-fns';
import * as Progress from 'react-native-progress';

export default function AloitusTimer() {
  const [count, setCount] = useState(120);
  const [elapsed, setElapsed] = useState(0);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);

    if (count - elapsed === 0) {
      return () => {
        clearInterval(timerInterval);
      };
    }
  }, []);

  const getElapsedTime = async () => {
    try {
      const startTime = await AsyncStorage.getItem('@start_time');
      const now = new Date();
      return differenceInSeconds(now, Date.parse(startTime));
    } catch (err) {
      console.warn(err);
    }
  };

  const handleAppStateChange = async (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      getElapsedTime();
      const elapsed = await getElapsedTime();
      setElapsed(elapsed);
    } else {
      try {
        const now = new Date();
        await AsyncStorage.setItem('@start_time', now.toISOString());
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

  return (
    <View style>
      <Progress.Circle progress={(count - elapsed) / 100} size={50} />
      <Text>{count - elapsed}</Text>
    </View>
  );
}
