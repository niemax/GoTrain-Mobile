import React from 'react'
import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import Text from '../../components/Text';
import { Ionicons } from '@expo/vector-icons'; 
import { Container, ParagraphContainer, AloitaButton, ButtonContainer, IconTouchable} from '../../components/TrainScreenStyling';
import { Card } from 'react-native-elements';




const treeniEsittely = [{
        id: 1,
        name: 'Leuanveto',
        sarjat: '2-3',
        image: require('../../assets/icons/leuanveto.png'),
    },
    {
        id: 2,
        name: 'Kulmasoutu',
        sarjat: '2-3',
        image: require('../../assets/icons/kulmasoutu.png'),

    },
    {
        id: 3,
        name: 'Hauiskääntö',
        sarjat: '2-3',
        image: require('../../assets/icons/hauiskaanto.png'),

    },
    {
        id: 4,
        name: 'Soutu alataljassa',
        sarjat: 3,
        image: require('../../assets/icons/alatalja.png'),

    },
    {
        id: 5,
        name: 'Lat Pushdown',
        sarjat: 3,
        image: require('../../assets/icons/latpushdown.png'),

    },
    {
        id: 6,
        name: 'Vasarakäännöt',
        sarjat: 3,
        image: require('../../assets/icons/chestfly.png'),

    }
]
   

//#8292B4
export default ({ navigation }) => {
    
   
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
        backgroundColor: '#947AFF'
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





