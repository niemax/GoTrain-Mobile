import React from 'react'
import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import Text from '../../components/Text';
import { Ionicons } from '@expo/vector-icons'; 
import { Container, ParagraphContainer, AloitaButton, ButtonContainer, IconTouchable} from '../../components/TrainScreenStyling';
import { Card } from 'react-native-elements';




const treeniEsittely = [{
        id: 1,
        name: 'Punnerrukset',
        sarjat: '2-3',
        image: require('../../assets/icons/punnerrukset.png'),
    },
    {
        id: 2,
        name: 'Penkkipunnerrus',
        sarjat: '2-3',
        image: require('../../assets/icons/penkkipunnerrus.png'),

    },
    {
        id: 3,
        name: 'Pystypunnerrus',
        sarjat: '2-3',
        image: require('../../assets/icons/pystypunnerrus.png'),

    },
    {
        id: 4,
        name: 'Dipit',
        sarjat: 3,
        image: require('../../assets/icons/dipit.png'),

    },
    {
        id: 5,
        name: 'Vipunosto sivulle',
        sarjat: 3,
        image: require('../../assets/icons/vipunosto.png'),

    },
    {
        id: 6,
        name: 'Chest fly',
        sarjat: 3,
        image: require('../../assets/icons/chestfly.png'),

    },
    {
        id: 7,
        name: 'Tricep pushdown',
        sarjat: 3,
        image: require('../../assets/icons/triceps.png'),

    }
    


]
   


const RintaTreeni = ({ navigation }) => {
    
    return(
        <Container>
        
        <Image style={styles.image} source={require('../../assets/rinta.jpg')}></Image>
        <IconTouchable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="black" />
        </IconTouchable>
        <ScrollView>
        <Text large>Rinta / Ojentaja / Olkapää <Image 
        style={{height: 40, width: 40,}} 
        source={require('../../assets/penkki.png')}>

        </Image></Text>
        
        {
                treeniEsittely.map((item, index) => {
                    return(
                        <Card key={index} containerStyle={styles.cards} >
                        <View style={{flexDirection: 'row'}}>
                        <Card.Image 
                        source={item.image}
                        style={styles.iconImage}>
                        
                        </Card.Image>
                        <Text medium>{item.name}</Text>
                        
                        </View>
                        <Text style={styles.toistotText} heavy medium>{item.sarjat} sarjaa</Text>
                        </Card>
                    );
                })
            }
           
        <ButtonContainer>
        <AloitaButton color="#FDC10B">
        <Text large >Aloita treeni</Text>
        </AloitaButton>
        </ButtonContainer>
        </ScrollView>
        </Container>
        
      
        
    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '35%',
        opacity: 0.9
        
    }, 
    cards: {
        height: 60,
        borderWidth: 0,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#FDC10B'
    },
    
    iconImage: {
        height: 40, width: 40,
        marginRight: 20,
        padding: 0
    },

    toistotText: {
        position: 'absolute', right: 5, fontFamily: 'MontserratBold'
    }
})







export default RintaTreeni;