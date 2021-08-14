import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

export default function LinearGradientButton({ colors }) {
  return (
    <LinearGradient start={{ x: 0.1, y: 0.5 }} colors={colors} style={styles.background}>
      <Feather name="check" size={50} color="white" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    width: 75,
    height: 75,
    borderRadius: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
