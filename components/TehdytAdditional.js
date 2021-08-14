import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { Container } from '../utils/Styling';
import Text from '../components/Text';
import ChartData from './ChartData';

export default function TehdytAdditional() {
  return <ChartData />;
}
