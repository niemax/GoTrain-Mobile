import React, { useState, useCallback } from 'react'
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 
import Text from '../components/Text'
import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from '@react-navigation/native'; 

//import VideoPlayer from '../../components/TreeninEsikatselu';

/* 


    return(
        <Text>Hi</Text>
    )
} */




const Esikatselu = (props) => {
    const navigation = useNavigation();
    const [playing, setPlaying] = useState(false);


    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    const icon = <Ionicons name="ios-alert-circle-outline" size={24} color="white" />
    

    return(
        <Container>
        <VideoContainer>
        <YoutubePlayer 
             height={220}
             videoId={props.videoID}
           
            />
      </VideoContainer>
        <ScrollView>
        <Text vinkkiTitle left>  {props.liike} - <Text medium>{props.toistot}</Text></Text>
      <WarningContainer>
        {icon}
        <Text vinkit left>Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.</Text>
        </WarningContainer>
      <TextContainer>
      
        <Text vinkit left>{props.ohjeet}</Text>
      </TextContainer>
        </ScrollView>

        <SuljeButton onPress={() => navigation.goBack()}>
            <Text color="white" center large>Sulje</Text>
        </SuljeButton>
        </Container>
        
    )
    
    }


export default Esikatselu;

const Container = styled.View`
    background-color: #141314;
    flex: 1;
    flex-direction: column;
`;

const VideoContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-left: 15px;
    margin-top: 50px;
    flex-direction: row
`;

const WarningContainer = styled.View`
    flex-direction: row;
    margin-top: 25px;
    margin-left: 10px;
`;


const SuljeButton = styled.TouchableOpacity`
margin-bottom: 30px;
align-items: center;
height: 48px;
justify-content: center;
border-radius: 50px;
background-color: ${props => props.color ?? '#FA4242'};
`;
