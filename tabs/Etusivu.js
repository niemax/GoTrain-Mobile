import React, { useEffect, useState } from 'react';
import { Alert, Image, View } from 'react-native';
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



const Etusivu = (
) => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [temp, setTemp] = useState(null);
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState('');
    const [text, setText] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [weatherIcon, setWeatherIcon] = useState('');
    
    Appearance.getColorScheme();
    const colorScheme = useColorScheme();

    async function getLocation() {
        let {
            status
        } = await Location.requestPermissionsAsync();
        if (status !== 'granted') return;

        let location = await Location.getCurrentPositionAsync({
            //maxAge: 36000000,
            accuracy: Location.Accuracy.Highest
        })

        let { coords } = location;
        //console.log(coords);

        setLatitude(coords.latitude);
        setLongitude(coords.longitude);

        //console.log(location)
    }

    async function getWeatherData(lati, longi) {
        let API = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=metric&appid=d85cb8591b3bf1b13021c27b116b86cd`;
        try {
            await fetch(API)
                .then(response => {
                    if (response.ok) return response.json();
                })
                .then(data => {
                    console.log(data.weather[0].icon);

                    const { name } = data;
                    const { temp } = data.main;


                    setCity(name);
                    setTemp(temp.toFixed(0));
                    setWeatherIcon(data.weather[0].icon);
                    setIsLoading(false);
                })




        } catch (error) {
            console.error(error);
        }

    }


    const getCurrentDate = () => {
        const date = moment().locale('fi')
            .format('LL');
        setCurrentDate(date);
        //console.log(currentDate)
    }

    useEffect(() => {
        getCurrentDate();
        getLocation()
           /*  .then(() => {
                try {
                    getWeatherData(latitude, longitude);

                } catch (err) {
                    console.error(err);
                }

            }) */
            .then(() => {
                //getUserInfo();
            })



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
        centerComponent={ !isLoading ? (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text medium center> {temp}{'\u00b0'}
            </Text>
            <Image 
            source={{ uri: `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` }} 
            style={{height: 55, width: 55}}

            />
            </View>
        ) 
        : 
        (
        <Text medium>Loading...</Text>
        )}
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
