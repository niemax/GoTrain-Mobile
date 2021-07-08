import React, { useState, useCallback, useEffect } from "react";
import { RefreshControl, ScrollView, View , TouchableOpacity} from 'react-native';
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import * as firebase from 'firebase';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { List } from 'react-native-paper';
import { LottieAnimationMain } from '../components/Lottie';
import { Loading } from '../utils/Styling';
import moment from 'moment';
import 'moment/locale/fi';
import {Agenda} from 'react-native-calendars';
import { format, addDays } from 'date-fns';
import { Alert } from "react-native";


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const TehdytTreenit = () => {
        const [treenit, setTreenit] = useState([]);
        const [refreshing, setRefreshing] = useState(false);
        const [loading, setLoading] = useState(false);
        const [refreshed, setRefreshed] = useState(false);
        const [calendarItems, setCalendarItems] = useState({})

        Appearance.getColorScheme();
        const colorScheme = useColorScheme();
        const themeColor = colorScheme === 'dark' ? 'white' : 'black';


        useEffect(() => {
            let treeniArray = [];
            
            const getData = () => {
                const db = firebase.firestore();
                const currentUser = firebase.auth().currentUser;
    
                db.collection("users")
                .doc(currentUser.uid)
                .collection('treenidata')
                .orderBy('timestamp', 'desc')
                .get()

                .then(snapshot => {
                    snapshot.docs.forEach(treeni => {
                        treeniArray.push(treeni.data());
                        
                        
                    })
                    //console.log(treeniArray);
                    return treeniArray;
                })


                const mappedData = treeniArray.map((item, index) => {
                    const date = addDays(new Date, index);

    
                    return {
                        ...item, 
                        date: format(date, 'yyyy-MM-dd')
                    
                    }
                    
                });
    
    
                const reduced = mappedData.reduce((acc, currentItem) => {
                    const { date, ...rest } = currentItem;
    
                    acc[date] = [rest];
    
                    return acc;
    
                }, {});
    
                console.log(reduced);
                setCalendarItems(reduced);
                
                
            };
            
            getData();
            

        }, []);
        

         /* const onRefresh = useCallback(() => {
            setLoading(true)
            setRefreshing(true);
            getData();
            renderCalendarData()
            wait(2000).then(() => setRefreshing(false)).then(() => setLoading(false));
            setRefreshed(true);

        }) */

        const getCurrentDate = () => {
            const date = moment().locale('fi')
            .format('LL')
            setCurrentDate(date);
            //console.log(currentDate)
        }

         /* return (
                treenit.map((item, index) => (
                        
                    <List.Accordion 
                    key={index}
                    title={<Text small left>{item.pvm} - {item.treeni}</Text>}
                    left={props => <List.Icon {...props} icon="calendar" color={themeColor} />}
                    >
                 {
                       Object.values(item.treeniData).map(treeni => {
                        let descSarjat = `Sarjat: ${treeni.sarjat}`;
                        let descToistot =`Toistot: `;
                        let descPainot = `Painot: `;
                        let descLisatiedot = `Lisätiedot: `;


                            Object.values(treeni.suoritusStats).forEach((item, i) => {
                                descToistot += `${i === 0 ? "": " - "}${item.toistot}`;
                                descPainot += `${i === 0 ? "" : " - "}${item.painot}`;
                                descLisatiedot += `${i === 0 ? "" : " - "}${item.lisatiedot}`
                            })


                           return(
                            <List.Item 
                            descriptionNumberOfLines={10}
                            descriptionStyle={{fontFamily: 'MontserratRegular', color: themeColor}}
                            titleStyle={{fontFamily: 'MontserratSemiBold', color: themeColor}}
                            key={treeni.nimi} title={treeni.nimi} 
                            description={`${descSarjat}\n${descToistot}\n${descPainot}\n${descLisatiedot}`} 
                            />
                           ) 
                           
                       })
                   }
                 
                </List.Accordion>
                          
            ))
            ) */

        

        const renderItem = item => {
            return (
                <View>
                    <Text>{item.treeni}</Text>
                </View>
            )
        }
        
        
        return(
            <Container style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}}>
           
            <HeaderContainer>
            <HeaderComponent 
            leftComponent={{text:<Text medium>MINÄ</Text>}}

            />
            </HeaderContainer>
           
           
       
            <TouchableOpacity onPress={() => setClick(click + 1)}>
            <Text marginBottom="25px" large>Suoritukset </Text>
            </TouchableOpacity>
            
           {/*  {! refreshed && <LottieAnimationMain />}
                {loading ? ( <Loading size="large" /> 
                ) : ( */}
                    
                    <Agenda 
                    items={calendarItems} 
                    renderItem={renderItem} 
                    />
                    
                    
             
            </Container>
        )
    }


    const Container = styled.View`
        flex: 1;

    `;
    

    const HeaderContainer = styled.View`
    `;

    const TextContainer = styled.View`
    margin-top: 20px;
`;
  
    
    export default TehdytTreenit;