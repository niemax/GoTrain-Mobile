import React, { useEffect, useState } from 'react';
import { Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as firebase from 'firebase';
import { loggingOut } from '../API/FirebaseMethods'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import Cards from '../components/Cards';
import styled from 'styled-components/native'; 
import * as Location from 'expo-location';
import moment from 'moment';
import 'moment/locale/fi'



const Etusivu = ({
        navigation
    }) => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [temp, setTemp] = useState(null);
    const [city, setCity] = useState('')
    const [errorMsg, setErrorMsg] = useState(null);
    const [weatherData, setWeatherData] = useState([]);
    const [location, setLocation] = useState(null);
    const [currentDate, setCurrentDate] = useState('');

       
const getLocation = () => {
        (async () => {
            let {
                status
            } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)
            //console.log(location)
        })();
    }



        const getWeatherData = async() => {
            const API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=4faa658e0a47cd7c7693d03bf30bf56a`
            try {
                let response = await fetch(API)
                const data = await response.json();
                return data;
                
            } catch(error) {
                console.error(error);
            }
            setCity(data.name);
            setTemp(data.main.temp.toFixed(0))
            
           
                
        }

        const getCurrentDate = () => {
            const date = moment().locale('fi')
                .format('LL')
            setCurrentDate(date)
            //console.log(currentDate)
        }

        useEffect(() => {
            getLocation(), getCurrentDate(), getWeatherData()
        }, []);

       
       // let currentUserUID = firebase.auth().currentUser.uid;
        const [text, setText] = useState('');

   
      /*  useEffect(() => {
            async function getUserInfo() {
                try {
                    let doc = await firebase
                        .firestore()
                        .collection('users')
                        .doc(currentUserUID)
                        .get();

                    if (!doc.exists) {
                        Alert.alert('No user data found!');
                    } else {
                        let dataObj = doc.data();
                        setText(dataObj.name);
                    }
                } catch (err) {
                    Alert.alert('There is an error.', err.message)
                }
            }
            getUserInfo();
        }, []);     */
        
      
    
    return (
        
            <Container>
            <StatusBar style="light" />
        <HeaderContainer>
        <HeaderComponent 
        centerComponent={{text: <Text marginTop="10px" medium center>{city},   {temp}{'\u00b0'}C</Text>}}
        
        />
        </HeaderContainer>
        <TextContainer>
        <Text marginLeft="10px" marginBottom="25px" medium left>{currentDate.toUpperCase()}</Text>
        <Text marginTop="15px" large center>{`Hei, ${text}!\n Mitä tänään treenattaisiin?`}</Text>
        </TextContainer>
        
        <CardContainer>
            <Cards />
        </CardContainer>
        </Container>
        
    );
}


const Container = styled.View`
    flex: 1;
    background-color: #141314;

`;

const LineBreak = styled.View`
`;



const HeaderContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-top: 20px;
`;



const CardContainer = styled.View`
`;  

export default Etusivu;