import React, { useState, useCallback } from 'react'
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 
import Text from '../components/Text'
import ButtonContainer from './TrainScreenStyling'
import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from '@react-navigation/native'; 
import { Appearance, useColorScheme } from 'react-native-appearance';


const Esikatselu = (props) => {

    Appearance.getColorScheme();
    const colorScheme = useColorScheme();

    
    const navigation = useNavigation();


    const icon = <Ionicons name="ios-alert-circle-outline" size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
    

    return(
        <Container style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}}>
        <VideoContainer>
        <YoutubePlayer 
             height={220}
             videoId={props.videoID}
           
            />
      </VideoContainer>
        <ScrollView>
        <Text vinkkiTitle left>  {props.liike} </Text>
      <WarningContainer>
        {icon}
        <Text vinkit left>Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.</Text>
        </WarningContainer>
      <TextContainer>
      
        <Text vinkit left>{props.ohjeet}</Text>
      </TextContainer>
        </ScrollView>

    <SuljeContainer>
    <SuljeButton onPress={() => navigation.goBack()}>
              <Text color="white" center large>Sulje</Text>
         </SuljeButton>
    </SuljeContainer>

       
        </Container>
        
    )
    
    }


export default Esikatselu;

const Container = styled.View`
    flex: 1;
`;

const VideoContainer = styled.View`
    margin-top: 35px;
`;

const TextContainer = styled.View`
    margin-left: 15px;
    margin-top: 50px;
    flex-direction: row;
`;

const WarningContainer = styled.View`
    flex-direction: row;
    margin-top: 25px;
    margin-left: 10px;
`;


const SuljeButton = styled.TouchableOpacity`
margin-bottom: 30px;
    margin-left: 35px;
    width: 80%;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    shadow-color: 'rgba(0,0,0, .4)';
    shadow-opacity: 0.5;
    background-color: #054dd9;
`;

const SuljeContainer = styled.View`
    justify-content: center;
    height: 12%;
    padding: 15px;
`;
