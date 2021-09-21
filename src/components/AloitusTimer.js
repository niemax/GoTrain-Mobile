import React, { useEffect, useState, useRef } from 'react';
import { AppState, SegmentedControlIOSComponent } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import Text from './Text';
import { differenceInSeconds } from 'date-fns';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function AloitusTimer({ timerOn, setTimerOn }) {
  const [count, setCount] = useState(150);
  const [elapsed, setElapsed] = useState(0);
  const appState = useRef(AppState.currentState);
  const timerIcon = <Ionicons name="timer-outline" size={38} color="#338467" />;

  useEffect(() => {
    let timerInterval;
    if (elapsed >= count) {
      clearInterval(timerInterval);
      setTimerOn(false);
      setCount(150);
    }
    if (timerOn) {
      timerInterval = setInterval(() => {
        setCount((c) => c - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [count, elapsed, timerOn]);

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

  return (
    <>
      <AnimatedCircularProgress size={70} width={4} fill={count - elapsed} tintColor="#338467">
        {(fill) => (
          <Text large fontFamily="MontserratBold" style={{ color: '#338467' }}>
            {timerOn ? fill.toFixed(0) : timerIcon}
          </Text>
        )}
      </AnimatedCircularProgress>
    </>
  );
}
