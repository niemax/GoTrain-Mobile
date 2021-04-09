import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import * as Location from 'expo-location';
import Text from '../components/Text';

const GetWeather = () => {
    const [latitude, setLatitude] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState();
  
    useEffect(() => {
      getLocation();
    }, []);
  


  const getLocation = async () => {
   
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const last = await Location.getLastKnownPositionAsync();
      if (last) setLocation(last);
      else {
        const current = await Location.getCurrentPositionAsync();
        setLocation(current);
        
      }
    } catch (error) {
      console.log(error);
    }
    console.log(location)
  };
      


    
    const getWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d85cb8591b3bf1b13021c27b116b86cd`)
    .then(response=> response.json())
    .then(responseData=> {
        setWeatherData(responseData)
        console.log(weatherData)
  }) 
    .catch(err => console.error(err))
  }
  
 

    return (
      <Container>
      </Container>
    );
  }




export default GetWeather;

const Container = styled.View`
    flex: 1
`;