import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';
import Text from '../components/Text';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Appearance, useColorScheme } from 'react-native-appearance';


const Cards = () => {
    Appearance.getColorScheme();
    const colorScheme = useColorScheme();
    
    const navigation = useNavigation();
    
    const treenit = [{
    
        id: 1,
        name: 'Rinta',
        image: require('../assets/rintaToinen.jpg'),
        navigationRoute: 'RintaTreeni',
        icon: <Ionicons name="ios-timer-sharp" size={28} color={colorScheme === 'dark' ? ('white') : ('black')} />,
        treeninKesto: '60-75min'
    },
    {
        id: 2,
        name: 'Selkä',
        image: require('../assets/selkaToinen.jpg'),
        navigationRoute: 'SelkaTreeni',
        icon: <Ionicons name="ios-timer-sharp" size={28} color={colorScheme === 'dark' ? ('white') : ('black')} />,
        treeninKesto: '45-70min'

    },
    {
        id: 3,
        name: 'Jalat',
        navigationRoute: 'JalkaTreeni',
        image: require('../assets/jalatToinen.jpg'),
        icon: <Ionicons name="ios-timer-sharp" size={28} color={colorScheme === 'dark' ? ('white') : ('black')} />,
        treeninKesto: '60-75min'

    }, 
    {
        id: 4,
        name: 'Kädet',
        navigationRoute: 'KasiTreeni',
        image: require('../assets/kadetToinen.jpg'),
        icon: <Ionicons name="ios-timer-sharp" size={28} color={colorScheme === 'dark' ? ('white') : ('black')}/>,
        treeninKesto: '60-75min'

    }, 
    {
        id: 5,
        name: 'Cardio',
        image: require('../assets/cardioToinen.jpg'),
        navigationRoute: 'CardioTreeni',
        icon: <Ionicons name="ios-timer-sharp" size={28} color={colorScheme === 'dark' ? ('white') : ('black')} />,
        treeninKesto: '45-60min'

    }, 
    
]


    return(
            <Container>
             
            <ScrollView style={{ height: '100%' }}>
            {
                treenit.map((item, index) => {
                    return(
                        <TouchableOpacity key={index} onPress={() => navigation.navigate(item.navigationRoute)}>
                        <Card containerStyle={styles.cards} >
                        <Card.Title >
                        <KuvausContainer>
                        <Text medium center>{item.name} </Text>
                        <View style={{marginLeft: 170, flexDirection: 'row'}}>{item.icon}<Text margin="5px">{item.treeninKesto}</Text></View>
                        </KuvausContainer>
                       
                        
                        </Card.Title>
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
        borderRadius: 30
    },
    cards: {
        borderWidth: 0,
        elevation: 3,
        height: 250,
        marginBottom: 25,
        backgroundColor: 'rgba(255, 255, 255, 0)',
    }
    
})
export default Cards;

const Container = styled.View`
align-items: center;
justify-content: center;
height: 500px;

`;

const KuvausContainer = styled.View`
    flex-direction: row;
`;






