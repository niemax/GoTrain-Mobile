import React from 'react'
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Text from '../../components/Text';
import { Ionicons } from '@expo/vector-icons'; 



const RintaTreeni = ({ navigation }) => {
    return(
        <Container>
        <Image style={styles.image} source={require('../../assets/rinta.jpg')}></Image>
        <IconTouchable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="black" />
        </IconTouchable>
        
      <Text margin="20px" large heavy color="black">Rinta / Ojentaja / lkapää</Text>
      <ParagraphContainer>
      <Text medium heavy color="black">Treeni sisältää:</Text>
      <Text medium welcome color="black">{`- Punnerrukset\n- Penkkipunnerrus\n- Pystypunnerrus\n- Dipit\n- Vipunosto sivulle\n- Chest Fly\n- Tricep Pushdown`}</Text>
      <Text margin="20px" medium heavy>
             Settejä treeneissä on 2-3, joiden välissä aina 2-3 minuutin mittainen tauko.
        </Text>
        <Text heavy center large>Treeni sopii: Kaikille</Text>
      </ParagraphContainer>
            
           
        <ButtonContainer>
        <AloitaButton>
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

const Container = styled.View`
    flex: 1;
    background-color: #FEEFE6;
`;

const ParagraphContainer = styled.View`
    margin-top: 10px;
`;

const AloitaButton = styled.TouchableOpacity`
    margin: 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #FA4242;
    border-radius: 50px;
`;

const ButtonContainer = styled.View`
    margin-top: 15px;
`;

const IconTouchable = styled.TouchableOpacity`
    position: absolute;
    top: 50px;
    left: 10px;
`;


const TextContainer = styled.View`

`;

export default RintaTreeni;