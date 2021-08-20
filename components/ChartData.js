import React, { useState, useEffect } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { Container } from '../utils/Styling';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Text from './Text';
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(56, 125, 255, ${opacity})`,
};

export default function ChartData() {
  const [xValue, setXValue] = useState([]);
  const [yValue, setYValue] = useState([]);

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';
  const chartColor = colorScheme === 'dark' ? '#191919' : 'white';

  function getData() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const xData = [];
    const yData = [];

    db.collection('users')
      .doc(currentUser.uid)
      .collection('treenidata')
      .get()

      .then((snapshot) => {
        const arr = [];
        snapshot.docs.map((item) => {
          const { treeni } = item.data();
          arr.push(treeni);
        });
        const reduced = arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

        for (const [key, value] of Object.entries(reduced)) {
          xData.push(key);
          yData.push(value);
          setXValue(xData);
          setYValue(yData);
        }
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const barData = {
    labels: xValue,
    datasets: [
      {
        data: yValue,
      },
    ],
  };

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text left marginTop="20px" marginBottom="15px" marginLeft="20px" medium>
          KERRAT TREENEITTÄIN
        </Text>
        <Feather
          name="bar-chart-2"
          size={24}
          color={themeColor}
          style={{ marginTop: 15, marginLeft: 5 }}
        />
      </View>
      <View
        style={{
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          margin: 8,
          elevation: 3,
          backgroundColor: chartColor,
        }}
      >
        <BarChart
          verticalLabelRotation={15}
          showValuesOnTopOfBars={true}
          data={barData}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
        />
      </View>
    </Container>
  );
}
