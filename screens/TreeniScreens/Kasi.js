import React from 'react'
import { Image, StyleSheet } from 'react-native';
import Text from '../../components/Text';
import { Ionicons } from '@expo/vector-icons'; 
import { Container, ParagraphContainer, AloitaButton, ButtonContainer, IconTouchable} from '../../components/TrainScreenStyling';






const KasiTreeni = ({ navigation }) => {
    return(
        <Container>
        <Image style={styles.image} source={require('../../assets/kadet.jpg')}></Image>
        <IconTouchable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="black" />
        </IconTouchable>
        
      <Text margin="5px" large heavy>Käsitreeni <Image style={{height: 40, width: 40}} source={require('../../assets/kadeticon.png')}></Image></Text>
      <ParagraphContainer>
      
      <Text medium heavy>Treeni sisältää:</Text>
      <Text medium welcome>{`- Leuanveto\n- Kulmasoutu\n- Hauiskääntö\n- Soutu alataljassa\n- Vipunosto sivulle\n- Lat pushdown kaapelilla\n- Vasarakäännöt`}</Text>
      <Text margin="20px" medium heavy>
             Settejä treeneissä on 2-3, joiden välissä aina 2-3 minuutin mittainen tauko.
        </Text>
        <Text heavy center large>Treeni sopii: Kaikille</Text>
      </ParagraphContainer>
            
           
        <ButtonContainer>
        <AloitaButton color="#8292B4">
        <Text heavy large color="white">Aloita treeni</Text>
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



export default KasiTreeni