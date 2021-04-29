import styled from 'styled-components/native';
import { Image, StyleSheet } from 'react-native';
import React, { useState , useEffect } from "react";
import Text from '../../components/Text';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Card } from 'react-native-elements';
import { ButtonContainer, PalauteIcon } from '../../components/TrainScreenStyling';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';
import "firebase/firestore";


const LopetaTreeni = (props) => {
        const {
            data
        } = props;

        const navigation = useNavigation();
       

        const saveToDatabase = async () => {
            const db = firebase.firestore();
            const treeniData = {...data};
            

            const currentUser = firebase.auth().currentUser;
            

            console.log("tehdyt",treeniData);

            try {
                const treeniRef = db.collection('users').doc(currentUser.uid);
               await treeniRef.set({
                   tehdytTreenit: data
                }, { merge: true });

            } catch (err) {
                console.error(err)
            }

            setTimeout(() => {
                navigation.goBack();
            }, 1000)
 
        }


    console.log("tehdyt treenit data", data);


    return (
        <Container>
        
        <BackgroundContainer>
        <Image style={{height: 100, width: 100}} source={require('../../assets/icons/applause.png')} />
        <Text style={{fontFamily: 'MontserratExtraBold'}} marginTop="20px" large medium>TREENI SUORITETTU!</Text>
        </BackgroundContainer>
            <Card containerStyle={styles.cards} >
            <Text style={{fontFamily: 'MontserratExtraBold'}} medium >TREENIT </Text>
            <Text style={{fontFamily: 'MontserratExtraBold'}} title color="#054dd9">{Object.keys(data).length}</Text>
            
            </Card>
            <Card containerStyle={styles.cards} >
            <Text style={{fontFamily: 'MontserratExtraBold'}} medium >SUORITUS </Text>
            <Text style={{fontFamily: 'MontserratExtraBold'}} title color="#054dd9">100%</Text>
            
            </Card>
            <Card containerStyle={styles.feedbackCard} >
            <Text style={{fontFamily: 'MontserratExtraBold'}} medium >Oliko treeni mieluisa? </Text>
            <Text style={{fontFamily: 'MontserratExtraBold'}} marginTop="10px" small >Annathan palautetta, jotta voin kehittää treenitarjontaa</Text>
            <PalauteButtonContainer>
            <PalauteIcon>
            <Ionicons name="ios-sad-outline" size={64} color="white" />
            </PalauteIcon>
            <PalauteIcon>
            <FontAwesome5 name="smile-beam" size={64} color="white" />
            </PalauteIcon>
            <PalauteIcon>
            <Ionicons name="ios-sad-outline" size={64} color="white" />
            </PalauteIcon>
            
            </PalauteButtonContainer>
            </Card>
        
       
        <ConfettiCannon
        count={60}
        origin={{x: 0, y: -20}}
        autoStart={true}
        fallSpeed={7000}
        fadeOut={false}
        
      />
      
      <ButtonContainer>
        <LopetaButton onPress={() => saveToDatabase()}>
        <Ionicons name="ios-checkmark-outline" size={24} color="white" />
        <Text medium>Lopeta</Text>

        </LopetaButton>

            </ButtonContainer>
        </Container>
        
        
         
    );
   
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '35%',
        opacity: 0.8,
},
cards: {
    borderWidth: 0,
    elevation: 3,
    height: 100,
    width: '92%',
    backgroundColor: '#212121',
    borderRadius: 15,
},

feedbackCard: {
    borderWidth: 0,
    elevation: 3,
    height: 200,
    width: '92%',
    backgroundColor: '#212121',
    borderRadius: 15,
}

});

const BackgroundContainer = styled.View`
    background: #054dd9;
    height: 30%;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;


const LopetaButton = styled.TouchableOpacity`
     margin-bottom: 30px;
    margin-left: 35px;
    width: 80%;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    shadow-color: 'rgba(0,0,0, .4)';
    shadow-opacity: 0.5;
    background-color: ${props => props.color ?? '#054dd9'};
    flex-direction: row;
`;

const PalauteButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
`;




const Container = styled.View`
     flex: 1;
    background-color: #141314;
`;

export default LopetaTreeni;