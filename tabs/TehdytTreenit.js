import React, { useState, useCallback, useEffect } from "react";
import { RefreshControl, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'; 
import Text from '../components/Text';
import HeaderComponent from '../components/HeaderComponent';
import * as firebase from 'firebase';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { List } from 'react-native-paper';
import { LottieAnimationMain } from '../components/Lottie';
import { Loading } from '../utils/Styling';
import moment from 'moment';
import 'moment/locale/fi'

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const TehdytTreenit = () => {
        const [treenit, setTreenit] = useState([]);
        const [refreshing, setRefreshing] = useState(false);
        const [loading, setLoading] = useState(false);
        const [liikkeet, setLiikkeet] = useState([]);
        const [refreshed, setRefreshed] = useState(false);
        const [currentDate, setCurrentDate] = useState('');


        Appearance.getColorScheme();
        const colorScheme = useColorScheme();
        const themeColor = colorScheme === 'dark' ? 'white' : 'black';


        const getData = () => {
            const db = firebase.firestore();
            const currentUser = firebase.auth().currentUser;
            let treeniArray = [];


            db.collection("users").doc(currentUser.uid)
            .collection('treenidata')
            .orderBy('pvm', 'asc')
            .get()
            .then(snapshot => {
                snapshot.docs.forEach(treeni => {
                    treeniArray.push(treeni.data());
                    setLiikkeet(treeni.data().treeniData);
                 //   console.log(treeni.data().treeniData)
                    
                })
            })
            setTreenit(treeniArray);
            console.log(treenit)
            console.log(liikkeet)
            //console.log("treeniData", treenit)
            
        }

        const onRefresh = useCallback(() => {
            setLoading(true)
            setRefreshing(true);
            getData();
            wait(2000).then(() => setRefreshing(false));
            wait(2000).then(() => setLoading(false));
            setRefreshed(true);
        })

        const getCurrentDate = () => {
            const date = moment().locale('fi')
            .format('LL')
            setCurrentDate(date);
            //console.log(currentDate)
        }

        useEffect(() => {
            getCurrentDate();
        }, []);


        return(
            <Container style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}}>
           
            <HeaderContainer>
            <HeaderComponent 
        leftComponent={{text:<Text medium>MINÄ</Text>}}

            />
            </HeaderContainer>
           
           <TextContainer>
            <Text marginLeft="25px" marginBottom="25px" medium left>{currentDate.toUpperCase()}</Text>

           </TextContainer>
       

            <Text marginTop="30px" large>Suoritukset </Text>
            {! refreshed && <LottieAnimationMain />}
                {loading ? ( <Loading size="large" /> 
                ) : (
                    
                    <ScrollView
                    refreshControl={
                    <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    />
                    }>
                    
                    
                    <List.Section 
                    title={<Text left>Vedä alas päivittääksesi<Ionicons name="arrow-down" size={24} color={themeColor} /> </Text> } > 
                   {
                       treenit.map((item, index) => {
                        
                           return(
                            
                        <List.Accordion 
                        key={index}
                        title={<Text small left>{item.pvm} - {item.treeni}</Text>}
                        left={props => <List.Icon {...props} icon="calendar" color={themeColor} />}

                        >
                     {
                           Object.values(item.treeniData).map(treeni => {
                               let desc = 
                               `Sarjat: ${treeni.sarjat}\nToistot: ${Object.values(treeni.toistot)}\nPainot: ${Object.values(treeni.painot)}`;

                               return(
                                <List.Item 
                                descriptionNumberOfLines={3}
                                descriptionStyle={{fontFamily: 'MontserratRegular', color: themeColor}}
                                titleStyle={{fontFamily: 'MontserratSemiBold', color: themeColor}}
                                key={treeni.nimi} title={treeni.nimi} 
                                description={desc} />
                               )
                               
                           })
                       }
                     
                    </List.Accordion>
                              
                           );
                       })
                   }
                   </List.Section>
                    </ScrollView>
                )}
             
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