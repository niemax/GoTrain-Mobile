import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

export default function LinearGradientButton() {
  return (
    <LinearGradient
      start={{ x: 0.1, y: 0.5 }}
      colors={['#2301E4', '#054dd9']}
      style={styles.background}
    >
      <Feather name="check" size={46} color="white" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    elevation: 8,
    width: 75,
    height: 75,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
