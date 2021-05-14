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
    const themeColor = colorScheme === 'dark' ? 'white' : 'black';
    
    const navigation = useNavigation();
    
    const treenit = [{
    
        id: 1,
        name: 'Rinta',
        image: require('../assets/rintaToinen.jpg'),
        navigationRoute: 'RintaTreeni',
        icon: <Ionicons name="ios-timer-sharp" size={28} color={themeColor} />,
        treeninKesto: '60-75min'
    },
    {
        id: 2,
        name: 'Selkä',
        image: require('../assets/selkaToinen.jpg'),
        navigationRoute: 'SelkaTreeni',
        icon: <Ionicons name="ios-timer-sharp" size={28} color={themeColor} />,
        treeninKesto: '45-70min'

    },
    {
        id: 3,
        name: 'Jalat',
        navigationRoute: 'JalkaTreeni',
        image: require('../assets/jalatToinen.jpg'),
        icon: <Ionicons name="ios-timer-sharp" size={28} color={themeColor} />,
        treeninKesto: '45-60min'

    }, 
    {
        id: 4,
        name: 'Kädet',
        navigationRoute: 'KasiTreeni',
        image: require('../assets/kadetToinen.jpg'),
        icon: <Ionicons name="ios-timer-sharp" size={28} color={themeColor}/>,
        treeninKesto: '45-60min'

    }, 
   
]


    return(
            <Container>
             
            <ScrollView style={{width: '100%'}}>
            {
                treenit.map((item, index) => {
                    return(
                        <TouchableOpacity key={index} onPress={() => navigation.navigate(item.navigationRoute)}>
                        <Card containerStyle={styles.cards} >
                        <Card.Title >
                        <KuvausContainer>
                        <Text medium center>{item.name} </Text>
                        <View style={{marginLeft: 170, flexDirection: 'row'}}>{item.icon}<Text >{item.treeninKesto}</Text></View>
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
        borderRadius: 15,
        marginRight: 30
    },
    cards: {
        borderWidth: 0,
        elevation: 3,
        height: 150,
        width: '100%',
        marginBottom: 60,
        backgroundColor: 'rgba(255, 255, 255, 0)',
    }
    
})
export default Cards;

const Container = styled.View`
align-items: center;
height: 500px;
justify-content: center;
`;

const KuvausContainer = styled.View`
    flex-direction: row;
`;






