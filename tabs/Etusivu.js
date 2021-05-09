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


const Etusivu = (
) => {

    Appearance.getColorScheme();
    const colorScheme = useColorScheme();

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [temp, setTemp] = useState(null);
    const [city, setCity] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [location, setLocation] = useState(null);
    const [currentDate, setCurrentDate] = useState('');
    const [text, setText] = useState('');

       
    const getLocation = async () => {
        let {
            status
        } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        //console.log(location)
    }

    useEffect(() => {
        const getWeatherData = async () => {
            let API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=4faa658e0a47cd7c7693d03bf30bf56a`
            try {
                let response = await fetch(API);
                const data = await response.json();
    
                if (response.status === 200) {
                    setCity(data?.name);
                    setTemp(data?.main.temp.toFixed(0));
                }
                setIsLoading(false)
                //console.log(data)
                return data;
    
            } catch (error) {
                console.error(error);
            }
    
        }
        getWeatherData();
    }, [])
    

    const getCurrentDate = () => {
        const date = moment().locale('fi')
            .format('LL')
        setCurrentDate(date)
        //console.log(currentDate)
    }

    useEffect(() => {
        getLocation();
        getCurrentDate();
        getUserInfo();
    }, [currentUser]);

        let currentUser = firebase.auth().currentUser

          const getUserInfo = async () => {
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
        <Text marginTop="15px" large center>{`Hei, ${text}!\n Mitä tänään treenattaisiin?`}</Text>
        </TextContainer>
        
        <CardContainer>
            <Cards />
        </CardContainer>
        </Container>
        
    );
}


const HeaderContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-top: 20px;
`;

const CardContainer = styled.View`
`;  

export default Etusivu;