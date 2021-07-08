import React, { useState, useEffect } from "react";
import { RefreshControl, ScrollView, View } from 'react-native';
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import * as firebase from 'firebase';
import { Appearance, useColorScheme } from 'react-native-appearance';
import 'moment/locale/fi';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { format } from 'date-fns';
import { Card } from 'react-native-elements';
import { Container } from '../utils/Styling';
import { TextContainer } from '../utils/Styling';


LocaleConfig.locales['fi'] = {
    monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu','Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
    monthNamesShort: ['Tammi.','Helmu.','Maalis.','Huhti.','Touko.','Kesä','Heinä.', 'Elo', 'Syys', 'Loka', 'Marras', 'Joulu'],
    dayNames: ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'],
    dayNamesShort: ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'],
    today: 'Tänään'
  };
  LocaleConfig.defaultLocale = 'fi';

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const TehdytTreenit = () => {
        const [refreshing, setRefreshing] = useState(false);
        const [loading, setLoading] = useState(false);
        const [refreshed, setRefreshed] = useState(false);
        const [calendarItems, setCalendarItems] = useState({});
        

        Appearance.getColorScheme();
        const colorScheme = useColorScheme();
        const themeColor = colorScheme === 'dark' ? 'white' : 'black'


        useEffect(() => {
            const getData = () => {
                const db = firebase.firestore();
                const currentUser = firebase.auth().currentUser;

                db.collection("users")
                    .doc(currentUser.uid)
                    .collection('treenidata')
                    .orderBy('timestamp', 'desc')
                    .get()

                    .then(snapshot => {
                        const mappedData = snapshot.docs.map(treeni => {

                            const data = treeni.data();
                            const { timestamp } = data;


                            return {
                                ...data,
                                date: format(timestamp, 'yyyy-MM-dd')

                            }

                        })

                        const reduced = mappedData.reduce((acc, currentItem) => {
                            const {
                                date,
                                ...rest
                            } = currentItem;

                            acc[date] = [rest];

                            return acc;

                        }, {});


                        setCalendarItems(reduced);
                    })
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

        

        const renderItem = (item, index) => {

            return (
                <View key={index}>
                    <Text fontFamily="MontserratRegular" style={{color: colorScheme === 'dark' ? 'white' : 'black'}} left marginTop="35px" marginBottom="15px" large>{item.treeni}</Text>

                    {Object.values(item.treeniData).map((treeni) => {
                        let descSarjat = `Sarjat: ${treeni.sarjat}`;
                        let descToistot =`Toistot: `;
                        let descPainot = `Painot: `;
                        let descLisatiedot = `Lisätiedot: `;
                        
                        Object.values(treeni.suoritusStats).forEach((item, i) => {
                            descToistot += `${i === 0 ? "": " -- "}${item.toistot}`;
                            descPainot += `${i === 0 ? "" : " -- "}${item.painot}`;
                            descLisatiedot += `${i === 0 ? "" : " -- "}${item.lisatiedot}`


                            })

                            return(
                                <>
                                {<Text marginBottom="5px" marginTop="25px"  left vinkkiTitle>{treeni.nimi}</Text>}
                                {<Text vinkit fontFamily="MontserratRegular" left >{descSarjat}</Text>}
                                {<Text vinkit fontFamily="MontserratRegular" left>{descToistot}</Text>}
                                {<Text vinkit fontFamily="MontserratRegular" left>{descPainot}</Text>}
                                {<Text vinkit fontFamily="MontserratRegular" left>{descLisatiedot}</Text>}

                                
                                </>
                            )
                    })}
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
           
           
       
            <Text marginBottom="40px" marginTop="40px" large>Suoritukset </Text>
            
           {/*  {! refreshed && <LottieAnimationMain />}
                {loading ? ( <Loading size="large" /> 
                ) : ( */}
                    
                    <Agenda 
                    theme={{
                    calendarBackground: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
                    backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
                    agendaDayTextColor: '#054dd9',
                    agendaDayNumColor: '#054dd9',
                    agendaTodayColor: '#054dd9',
                    agendaKnobColor: '#054dd9',
                    textSectionTitleColor: themeColor,
                    dayTextColor: themeColor,
                    monthTextColor: themeColor,
                    textDayFontFamily: 'MontserratRegular',
                    textMonthFontFamily: 'MontserratRegular',
                    textDayHeaderFontFamily: 'MontserratRegular',
                    }}

                    items={calendarItems} 
                    renderItem={renderItem} 
                    />
                    
                    
             
            </Container>
        )
    }



    const HeaderContainer = styled.View`
    `;

  
    
    export default TehdytTreenit;