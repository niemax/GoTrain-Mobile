    import React, { useState , useEffect, useCallback } from "react";
    import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
    import { Ionicons } from '@expo/vector-icons';
    import styled from 'styled-components/native'; 
    import Text from '../components/Text';
    import HeaderComponent from '../components/HeaderComponent';
    import * as firebase from 'firebase';
    import { Appearance, useColorScheme } from 'react-native-appearance';
    import { List } from 'react-native-paper';


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const TehdytTreenit = () => {

        const [treenit, setTreenit] = useState([]);
        const [refreshing, setRefreshing] = useState(false);
        const [loading, setLoading] = useState(false);
        const [liikkeet, setLiikkeet] = useState([])


        Appearance.getColorScheme();
        const colorScheme = useColorScheme();


        const getData = () => {
            const db = firebase.firestore();
            const currentUser = firebase.auth().currentUser;
            let treeniArray = [];


            db.collection("users").doc(currentUser.uid)
            .collection('treenidata')
            .get()
            .then(snapshot => {
                snapshot.docs.forEach(treeni => {
                    treeniArray.push(treeni.data())
                    setLiikkeet(treeni.data().treeniData)
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
            wait(1500).then(() => setRefreshing(false));
            wait(1500).then(() => setLoading(false));
        })



        return(
            <Container style={{backgroundColor: colorScheme === 'dark' ? ('#141314') : ('#F9F8F5')}}>
           
            <HeaderContainer>
            <HeaderComponent 
        leftComponent={{text:<Text medium>MINÄ</Text>}}

            />
            </HeaderContainer>
            <Text large>Täältä näet tehdyt treenisi</Text>
            
                {loading ? ( <Loading style={{color: colorScheme === 'dark' ? 'white' : 'black'}}/> 
                ) : (
                    
                    <ScrollView
                    refreshControl={
                    <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    />
                    }>
                    
                    <List.Section title="Vedä ylös päivittääksesi">
                   {
                       treenit.map((item, index) => {
                        
                           return(
                            
                        <List.Accordion key={index}
                        title={`${item.pvm} - ${item.treeni}`}
                        left={props => <List.Icon {...props} icon="folder" />}
                        >
                     {
                           Object.keys(liikkeet).map(key, idx => {
                               return(
                                <List.Item title={key} />
                               )
                               
                           })
                       }
                     
                    </List.Accordion>
                               
                              
                           )
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
    const Loading = styled.ActivityIndicator.attrs(props => ({
        size: "large",
        align: "center",
        marginTop: 20
    }))``;

    const HeaderContainer = styled.View`
    `;
    
    const ProfileIcon = styled.TouchableOpacity`
        margin-top: 5px;
    `;
    
    export default TehdytTreenit;