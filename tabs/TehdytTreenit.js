    import React, { useState , useEffect, useCallback } from "react";
    import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
    import { Ionicons } from '@expo/vector-icons';
    import styled from 'styled-components/native'; 
    import Text from '../components/Text';
    import HeaderComponent from '../components/HeaderComponent';
    import { handleLogOut } from '../components/HeaderComponent';
    import * as firebase from 'firebase';
    import { ListItem } from 'react-native-elements'

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const TehdytTreenit = () => {
        const icon = <Ionicons name="log-out-outline" size={32} color="white" />

        const [treenit, setTreenit] = useState([]);
        const [refreshing, setRefreshing] = useState(false);
        const [loading, setLoading] = useState(false);


        const getData = () => {
            const db = firebase.firestore();
            const currentUser = firebase.auth().currentUser;
            let treeniArray = [];


            db.collection("users").doc(currentUser.uid)
            .collection('treenidata')
            .get()
            .then(snapshot => {
                snapshot.docs.map(treeni => {
                    treeniArray.push(treeni.data())
                })
            })
            setTreenit(treeniArray)

            console.log("tehdyt treenit", (treenit))
        }


        const onRefresh = useCallback(() => {
            setLoading(true)
            setRefreshing(true);
            getData();
            wait(1500).then(() => setRefreshing(false));
            wait(1500).then(() => setLoading(false));
        })
        

        return(
            <Container>
           
            <HeaderContainer>

            <HeaderComponent 
                rightComponent={
                <ProfileIcon onPress={handleLogOut}>{icon}</ProfileIcon>
                }
                
            />
            </HeaderContainer>
                
                {loading ? ( <Loading /> ) : (
                    <ScrollView
                    refreshControl={
                    <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    />
                    }>
                   {
                       treenit.map((item, index) => {
                           return(
                               <ListItem containerStyle={styles.cards} key={index} bottomDivider>
                               <ListItem.Content>
                               <Text medium>{item.pvm} - {item.treeni.charAt(0).toUpperCase() + item.treeni.slice(1)}</Text>
                               </ListItem.Content>
                               
                               </ListItem>
                              
                           )
                       })
                   }
                   
                    </ScrollView>
                )}
             
            </Container>
        )
    }

    const  styles = StyleSheet.create({
        cards: {
            height: 90,
            backgroundColor: '#141314',
            margin: 0.3,
        },
    })

    const Container = styled.View`
        flex: 1;
        background-color: #141314;

    `;
    const Loading = styled.ActivityIndicator.attrs(props => ({
        color: '#fff',
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