import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import * as Location from 'expo-location';
import Text from '../components/Text';

const GetWeather = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        console.log(location.coords);
      })();
      getWeatherData();
    }, []);

    
   /*
   let text = 'Fetching..';
    
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = weatherData
    }*/ 
  
    const getWeatherData = () => {
    fetch(`api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=14371104a5c2fc46b2cbd1a542b603e8`)
    .then(response=> response.json())
    .then(responseData=> {
        setWeatherData(responseData)
        console.log(weatherData)
  }) 
    .catch(err => console.error(err))
  }

    return (
      <Container>
        <Text small bold>{weatherData}</Text>
      </Container>
    );
  }




export default GetWeather;

const Container = styled.View`
    flex: 1
`;