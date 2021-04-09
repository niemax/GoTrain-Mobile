import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Text from '../components/Text';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';




const treenit = [{
        id: 1,
        name: 'Rinta',
        image: require('../assets/rinta.jpg'),
        navigationRoute: 'RintaTreeni'
    },
    {
        id: 2,
        name: 'Selkä',
        image: require('../assets/selka.jpg'),
        navigationRoute: 'SelkaTreeni'

    },
    {
        id: 3,
        name: 'Jalat',
        navigationRoute: 'JalkaTreeni',
        image: require('../assets/jalat.jpg'),

    }, 
    {
        id: 4,
        name: 'Kädet',
        navigationRoute: 'KasiTreeni',
        image: require('../assets/kadet.jpg'),

    }, 
    {
        id: 5,
        name: 'Cardio',
        image: require('../assets/cardio.jpg'),
        navigationRoute: 'CardioTreeni'

    }, 
]



const Cards = () => {

    const navigation = useNavigation();

    return(
            <Container>
             
            <ScrollView>
            {
                treenit.map((item, index) => {
                    return(
                        <TouchableOpacity key={index} onPress={() => navigation.push(item.navigationRoute)}>
                        <Card containerStyle={styles.cards} >
                        <Card.Title ><Text color="black" medium heavy center>{item.name}</Text></Card.Title>
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
        height: '90%',
        borderRadius: 40
    },
    cards: {
        borderWidth: 0,
        elevation: 3,
        height: 280,
        backgroundColor: 'rgba(255, 255, 255, 0)',
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






