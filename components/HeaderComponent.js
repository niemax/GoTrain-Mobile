import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import * as Location from 'expo-location';
import { Header } from 'react-native-elements'
import { loggingOut } from '../API/FirebaseMethods'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'; 
import { useNavigation } from '@react-navigation/native';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from '../components/Text';


const HeaderComponent = (props) => {
    const [temp, setTemp] = useState(null);
    const [city, setCity] = useState('');
    const [weatherLoading, setWeatherLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState('');
    const [weatherIcon, setWeatherIcon] = useState('');
    
    const navigation = useNavigation();
    
    Appearance.getColorScheme();
    const colorScheme = useColorScheme();
    const icon = <Ionicons name="log-out-outline" size={32} color={colorScheme === 'dark' ? 'white' : 'black'} />

    async function getLocation() {
        let {
            status
        } = await Location.requestPermissionsAsync();
        if (status !== 'granted') return;

        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest
        })

        let { coords } = location;

        getWeatherData(coords.latitude, coords.longitude);

    }

    async function getWeatherData(lati, longi) {
    
        let API = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=metric&appid=909c3e2e0f9c07b670efd67b1b90752f`;

        try {
            await fetch(API)
                .then(response => {
                    if (response.ok) return response.json();
                })
                .then(data => {
                    //console.log(data.weather[0].icon);
                        console.log(data);
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

    const handleLogOut = () => {
        loggingOut();
        navigation.navigate('Login');
        console.log('Logged out!');
    }

    useEffect(() => {
        getLocation();

    }, [currentDate]);

    return(
        <Header
        
       containerStyle={{
            backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5', borderBottomWidth: 0
        }}
       
        rightComponent={
            <ProfileIcon onPress={handleLogOut}>{icon}</ProfileIcon>
            }
            centerComponent={ !weatherLoading ? (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text medium center> {temp}{'\u00b0'}
            </Text>
            <Image 
            source={{ uri: `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` }} 
            style={{height: 50, width: 50}}

            />
            </View>
        ) 
        : 
        (
        <Text medium>Loading...</Text>
        )}
        
            
        {...props}
        />
    );
}

const ProfileIcon = styled.TouchableOpacity`
    margin-top: 5px;
`;

export default HeaderComponent;


