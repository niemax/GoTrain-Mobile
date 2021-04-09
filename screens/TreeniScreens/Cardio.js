import React from 'react'
import { Image, StyleSheet } from 'react-native';
import Text from '../../components/Text';
import { Ionicons } from '@expo/vector-icons'; 
import { Container, ParagraphContainer, AloitaButton, ButtonContainer, IconTouchable} from '../../components/TrainScreenStyling';




const CardioTreeni = ({ navigation }) => {
    return(
        <Container>
        <Image style={styles.image} source={require('../../assets/cardio.jpg')}></Image>
        <IconTouchable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="black" />
        </IconTouchable>
        
      <Text center margin="15px" large >Cardio<Image style={{ height: 40, width: 40}} source={require('../../assets/cardioicon.png')}></Image> </Text>
      <ParagraphContainer>
      
      <Text medium >Treeni sisältää:</Text>
      <Text medium welcome>{`- Leuanveto\n- Kulmasoutu\n- Hauiskääntö\n- Soutu alataljassa\n- Vipunosto sivulle\n- Lat pushdown kaapelilla\n- Vasarakäännöt`}</Text>
      <Text margin="20px" medium >
             Settejä treeneissä on 2-3, joiden välissä aina 2-3 minuutin mittainen tauko.
        </Text>
        <Text  center large>Treeni sopii: Kaikille</Text>
      </ParagraphContainer>
            
           
        <ButtonContainer>
        <AloitaButton color="#947AFF">
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




export default CardioTreeni;