import React from 'react'
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Text from '../../components/Text';
import { Ionicons } from '@expo/vector-icons'; 
import { Container, ParagraphContainer, AloitaButton, ButtonContainer, IconTouchable} from '../../components/TrainScreenStyling';



const RintaTreeni = ({ navigation }) => {
    
    return(
        <Container>
        <Image style={styles.image} source={require('../../assets/rinta.jpg')}></Image>
        <IconTouchable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="black" />
        </IconTouchable>

      <Text margin="5px" large >Rinta / Ojentaja / Olkapää  <Image style={{height: 40, width: 40}} source={require('../../assets/penkki.png')}></Image></Text>
      <ParagraphContainer>
     
      <Text large>Treeni sisältää:</Text>
      <Text medium welcome>{`- Punnerrukset\n- Penkkipunnerrus\n- Pystypunnerrus\n- Dipit\n- Vipunosto sivulle\n- Chest Fly\n- Tricep Pushdown`}</Text>
      <Text margin="12px" medium >
             Settejä treeneissä on 2-3, joiden välissä aina 2-3 minuutin mittainen tauko.
        </Text>
        <Text  center large>Treeni sopii: Kaikille</Text>
      </ParagraphContainer>
            
           
        <ButtonContainer>
        <AloitaButton color="#FDC10B">
        <Text  large color="white">Aloita treeni</Text>
        </AloitaButton>
        </ButtonContainer>
        </Container>
       
      
        
    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '35%',
        opacity: 0.9
    }
})






export default RintaTreeni;