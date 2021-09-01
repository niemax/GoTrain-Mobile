import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import * as Location from 'expo-location';
import { Header } from 'react-native-elements';
import { Ionicons, Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { loggingOut } from '../API/FirebaseMethods';
import Text from './Text';

const HeaderComponent = (props) => {
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState('');
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');

  const navigation = useNavigation();

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const icon = (
    <Feather name="log-out" size={24} color={colorScheme === 'light' ? 'black' : 'white'} />
  );

  async function getWeatherData(lati, longi) {
    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=metric&appid=909c3e2e0f9c07b670efd67b1b90752f`;

    try {
      await fetch(API)
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((data) => {
          const { name } = data;
          const { temp } = data.main;

          setCity(name);
          setTemp(temp.toFixed(0));
          setWeatherIcon(data.weather[0].icon);
        })
        .finally(() => {
          setWeatherLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function getLocation() {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') return;

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    const { coords } = location;

    getWeatherData(coords.latitude, coords.longitude);
  }

  useEffect(() => {
    getLocation();
  }, [currentDate]);

  return (
    <Header
      centerComponent={
        !weatherLoading ? (
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text medium center>
              {' '}
              {temp}
              {'\u00b0'}
            </Text>
            <Image
              source={{ uri: `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` }}
              style={{ height: 40, width: 40 }}
            />
          </View>
        ) : (
          <Text medium>Loading...</Text>
        )
      }
      {...props}
    />
  );
};

export default HeaderComponent;
