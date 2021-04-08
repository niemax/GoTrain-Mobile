import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Text from '../components/Text';
import styled from 'styled-components/native';

const treenit = [{
        id: 1,
        name: 'Rinta',
        image: require('../assets/rinta.jpg')
    },
    {
        id: 2,
        name: 'Selkä',
        image: require('../assets/selka.jpg')
    },
    {
        id: 3,
        name: 'Jalat',
        image: require('../assets/jalat.jpg')
    }, 
    {
        id: 4,
        name: 'Kädet',
        image: require('../assets/kadet.jpg')
    }, 
    {
        id: 5,
        name: 'Cardio',
        image: require('../assets/cardio.jpg')
    }, 
]

const Cards = () => {


    return(
            <Container>
            <Container></Container>
            <ScrollView>
            {
                treenit.map((item, index) => {
                    return(
                        <TouchableOpacity key={index}>
                        <Card containerStyle={styles.cards} >
                        <Card.Title ><Text color="black" large heavy center>{item.name}</Text></Card.Title>
                        <Card.Image 
                        source={item.image}
                        style={styles.image}>
                       
                        </Card.Image>
                        </Card>
                        </TouchableOpacity>
                        
                    );
                })
            }
            </ScrollView>
            </Container>
    );
}


const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '86%',
        borderRadius: 40
    },
    cards: {
        borderRadius: 60,
        elevation: 3,
        height: 280,
    }
    
})
export default Cards;

const Container = styled.View`
align-items: center;
justify-content: center;
flex-direction: row;
height: 450px;
display: flex;

`;



