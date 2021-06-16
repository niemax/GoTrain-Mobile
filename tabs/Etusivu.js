import React, { useEffect, useState } from 'react';
import { Alert  } from 'react-native';
import * as firebase from 'firebase';
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import { Container } from '../utils/Styling';
import Cards from '../components/EtusivuCards';
import styled from 'styled-components/native'; 
import * as Location from 'expo-location';
import moment from 'moment';
import 'moment/locale/fi'
import { Appearance, useColorScheme } from 'react-native-appearance';
import TervetuloaText from '../components/TervetuloaText';
import axios from 'axios';



const Etusivu = (
) => {

    Appearance.getColorScheme();
    const colorScheme = useColorScheme();
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [temp, setTemp] = useState(null);
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState('');
    const [text, setText] = useState('');

       
    async function getLocation() {
        let {
            status
        } = await Location.requestPermissionsAsync();
        if (status !== 'granted') return;

        let location = await Location.getCurrentPositionAsync({
            maxAge: 36000000,
            accuracy: Location.Accuracy.Highest
        })

        let { coords } = location;
        console.log(coords);

        setLatitude(coords.latitude);
        setLongitude(coords.longitude);

        //console.log(location)
    }

    async function getWeatherData() {
        let API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=4faa658e0a47cd7c7693d03bf30bf56a`
        try {
            await fetch(API)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
                /* .then((response) => {
                    console.log(response);
                    setCity(response.data?.name);
                    setTemp(response.data?.main.temp.toFixed(0));
                    setIsLoading(false);
                }) */

        } catch (error) {
            console.error(error);
        }

    }


    const getCurrentDate = () => {
        const date = moment().locale('fi')
            .format('LL')
        setCurrentDate(date);
        //console.log(currentDate)
    }

    useEffect(() => {
        try {
            getCurrentDate();
            getLocation()
                .then(() => {
                    if (latitude !== undefined && longitude !== undefined)
                    getWeatherData();

                    console.error('Couldn"t fetch weather data')

                })
                .then(() => {
                    //getUserInfo();
                })

        } catch (error) {
            console.error(error);
        }

    }, []);

    
     const getUserInfo = async () => {
              let currentUser = firebase.auth().currentUser;

              try {
                  let doc = await firebase
                      .firestore()
                      .collection('users')
                      .doc(currentUser.uid)
                      .get();

                  if (!doc.exists) {
                      console.error('No user data found!');
                  } else {
                      let dataObj = doc.data();
                      setText(dataObj.name);
                  }
              } catch (err) {
                  Alert.alert('There is an error.', err.message)
              }
          }  
          
     

    return (
        
            <Container style={{backgroundColor: colorScheme === 'dark' ? ('#141314') : ('#F9F8F5')}}>
            
        <HeaderContainer>
        <HeaderComponent 
        centerComponent={ !isLoading ? (<Text marginTop="10px" medium center>{city},  {temp}{'\u00b0'}</Text>) 
        : (<Text medium>Loading...</Text>)}
        leftComponent={{text:<Text medium>KOTI</Text>}}
        
        />
        </HeaderContainer>
        <TextContainer>

        <Text marginLeft="25px" marginBottom="25px" medium left>{currentDate.toUpperCase()}</Text>
        <TervetuloaText
        teksti={text}
        />
        </TextContainer>
        
            <Cards />
        </Container>
        
    );
}


const HeaderContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-top: 20px;
`;



export default Etusivu;