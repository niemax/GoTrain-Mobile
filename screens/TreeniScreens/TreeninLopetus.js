import styled from 'styled-components/native';
import { Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from "react";
import Text from '../../components/Text';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Card } from 'react-native-elements';
import { ButtonContainer, PalauteIcon } from '../../components/TrainScreenStyling';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';
import moment from 'moment';
import 'moment/locale/fi'
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';



const LopetaTreeni = (props) => {
        const {
            data,
            treeni
        } = props;

        const [shoot, setShoot] = useState(false);

        Appearance.getColorScheme();
        const colorScheme = useColorScheme();

        const navigation = useNavigation();
        

        const saveToDatabase = async () => {
            const db = firebase.firestore();

            const currentUser = firebase.auth().currentUser;

            const ref = db.collection('users').doc(currentUser.uid)
                .collection('treenidata');

            const date = moment().locale('fi')
                .format('LL')

            try {
                await ref.add({
                    treeni: treeni,
                    pvm: date,
                    treeniData: data
                });

            } catch (err) {
                console.error(err)
            }
            
            Toast.show({
                text2: 'Treeni lisätty tehtyihin treeneihin',
                type: 'success',
                visibilityTime: 2500
    
              });
             setTimeout(() => {
                navigation.pop();
            }, 3000) 

        }

       
        
    useEffect(() => {
        
        setTimeout(() => {
            setShoot(true)
            
        }, 300)
    })
        

   // console.log("tehdyt treenit data", data);


    return (
        <Container style={{backgroundColor: colorScheme === 'dark' ? ('#141314') : ('#F9F8F5')}}>
        <BackgroundContainer>
        <Image style={{height: 100, width: 100}} source={require('../../assets/icons/applause.png')} />
        <Text style={{fontFamily: 'MontserratExtraBold'}} marginTop="20px" large medium>{treeni.toUpperCase()} SUORITETTU</Text>
        </BackgroundContainer>
            <Card containerStyle={{borderWidth: 0,
            elevation: 3,
            height: 100,
            width: '92%',
            backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
            borderRadius: 15}} 
            >
            <Text style={{fontFamily: 'MontserratExtraBold', color: colorScheme === 'dark' ? 'white' : 'black'}} medium >TREENIT </Text>
            <Text style={{fontFamily: 'MontserratExtraBold'}} title color="#054dd9">{Object.keys(data).length}</Text>
            
            </Card>
            <Card containerStyle={{borderWidth: 0,
            elevation: 3,
            height: 100,
            width: '92%',
            backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
            borderRadius: 15,}} >
            <Text style={{fontFamily: 'MontserratExtraBold', color: colorScheme === 'dark' ? 'white' : 'black'}} medium >SUORITUS % </Text>
            <Text style={{fontFamily: 'MontserratExtraBold'}} title color="#054dd9">100</Text>
            
            </Card>
            <Card containerStyle={{borderWidth: 0,
            elevation: 3,
            height: 200,
            width: '92%',
            backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
            borderRadius: 15,}} >
            <Text style={{fontFamily: 'MontserratExtraBold', color: colorScheme === 'dark' ? 'white' : 'black'}} medium >Oliko treeni mieluisa? </Text>
            <Text style={{fontFamily: 'MontserratExtraBold', color: colorScheme === 'dark' ? 'white' : 'black'}} marginTop="10px" small >Annathan palautetta, jotta voin kehittää treenitarjontaa</Text>
            <PalauteButtonContainer>
            <PalauteIcon>
            <Ionicons name="ios-sad-outline" size={64} color={colorScheme === 'dark' ? 'white' : 'black'} />
            </PalauteIcon>
            <PalauteIcon>
            <FontAwesome5 name="smile-beam" size={64} color={colorScheme === 'dark' ? 'white' : 'black'} />
            </PalauteIcon>
            <PalauteIcon>
            <Ionicons name="ios-sad-outline" size={64} color={colorScheme === 'dark' ? 'white' : 'black'} />
            </PalauteIcon>
            
            </PalauteButtonContainer>
            </Card>
        
        {shoot ? (
        <ConfettiCannon
        count={70}
        origin={{x: 0, y: -20}}
        autoStart={false}
        fallSpeed={6000}
        fadeOut={true}
      />
        ) : (null)
        }
       
         
      
      <ButtonContainer>
        <LopetaButton onPress={() => saveToDatabase()}>
        <Ionicons name="ios-checkmark-outline" size={24} color="white" />
        <Text medium>Lopeta</Text>
        </LopetaButton>
            </ButtonContainer>
        </Container>
         
    );
   
}


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
`;

export default LopetaTreeni;