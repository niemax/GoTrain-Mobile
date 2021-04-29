  
import React, { useState, useEffect, useCallback } from 'react'
import { Dimensions, ActivityIndicator } from 'react-native';
import Text from '../../components/Text';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { useNavigation  } from '@react-navigation/native'; 
import LopetaTreeni from './TreeninLopetus';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


const AloitaTreeni = (props) => {
    const [treeniData, setTreeniData] = useState([]);
    const [tehdytTreenit, setTehdytTreenit] = useState({});
    const [pbProgress, setPbProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    const { treeni } = props;
 
    const navigation = useNavigation();

    const getData = async () => {
        try {
            let response = await fetch(`https://mun-treeni-api.herokuapp.com/${treeni}`);
            const data = await response.json();
            setTreeniData(data.liikkeet);
           // console.log(data);

            setTimeout(() => {
                setIsLoading(false);
            }, 800);

            return data;

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    const setProgress = (item, index) => {
     //console.log console.log("setProgress", item, index);

        const treenit = {...tehdytTreenit};

        if (!(item.nimi in treenit)) {
            treenit[item.nimi] = { sarjat: item.sarjat, toistot: item.toistot, id: index };
            setCurrentSlide(currentSlide + 1);
        } else {
            delete treenit[item.nimi];
            setCurrentSlide(currentSlide - 1);
            
        }

         
         console.log(currentSlide);

        setTehdytTreenit(treenit);
        setPbProgress(Object.keys(treenit).length / treeniData.length);
        
        console.log("treenit", treenit, Object.keys(treenit).length);
        
       // setPbProgress(Object.keys(tehdytTreenit).length / treeniData.length);
       
    }


    const _renderItem = ({ item, index }) => {
        const btnColor = tehdytTreenit.hasOwnProperty(item.nimi) ? "#054dd9" : "#FFF";
        const treenitLength = Object.keys(treeniData).length;

        
        if (pbProgress >= 1) {
            return (<LopetaTreeni data={tehdytTreenit} />)
        } else if(!isLoading) {
            return (
                
                <RenderContainer key={index}>
                <ExtraContainer>
                <IconTouchable onPress={() => navigation.goBack()} left marginLeft="15px">
                <Ionicons name="ios-chevron-back" size={24} color="white" />
                </IconTouchable> 
                <Text medium marginTop="3px" marginLeft="285px" >{currentSlide} / {treeniData.length}</Text>
                </ExtraContainer>

                     <VideoContainer>
                         <YoutubePlayer
                             height={220}
                             videoId={item.videoId}
                         />
                     </VideoContainer>
                     
                     <ProgressBarContainer>
                     <Progress.Bar progress={pbProgress} width={null} height={3} borderWidth={null} color={"#054dd9"} />
                     </ProgressBarContainer>
     
                     <UtilsContainer>
                        <Text vinkkiTitle >{item.nimi.toUpperCase()}</Text>
     
                         <Text color="#054dd9" toistot >x {item.toistot} </Text>
     
                         <ButtonContainer>
                         
                         {index > 0 && <PreviousButton onPress={() => { carousel.snapToPrev(); }}>
                                 <Ionicons name="ios-chevron-back-outline" size={48} color="white" />
                             </PreviousButton>}
     
                             <DoneButton onPress={() => setProgress(item, index)}>
                                 <Ionicons name="checkmark-circle-outline" size={82} 
                                 color={btnColor}
                                 />
                             </DoneButton>
     
                             {index < treenitLength -1 &&  <NextButton onPress={() => { carousel.snapToNext(); }}>
                                 <Ionicons name="ios-chevron-forward-outline" size={48} color="white" />
                             </NextButton>
                             }
     
                         </ButtonContainer>
                         <NextContainer>
                         <Text vinkkiTitle >{item.sarjat} sarjaa </Text>
                         </NextContainer>
                     
                     </UtilsContainer>
                     
                    
                 </RenderContainer>
                
             );
        } else {
            return(
                <LoadingView><Loading/></LoadingView>
                
            )
        }
        
        
    }

    return (
             <Carousel
                ref={(c) => { carousel = c; }}
                data={treeniData}
                itemWidth={viewportWidth}
                sliderWidth={viewportWidth}
                renderItem={_renderItem}
                slideStyle={{ width: viewportWidth }}
                inactiveSlideScale={1}
                scrollEnabled={false}
                /> 
    )
}

export default AloitaTreeni;


const VideoContainer = styled.View`
    margin-top: 20px;
   `;

const UtilsContainer = styled.View`
    margin-top: 50px;
    align-items: center;
    justify-content: center;
`;

const RenderContainer = styled.View`
    flex: 1;
    background-color: #141314;
`;

const ButtonContainer = styled.View`
    flex-direction: row;
    margin-top: 25px;
`;

const ExtraContainer = styled.View`
    flex-direction: row;
    margin-top: 60px;
`;

const IconTouchable = styled.TouchableOpacity`
    margin-left: 10px;
`;

const PreviousButton = styled.TouchableOpacity`
    margin-top: 15px;
 
`;
const NextButton = styled.TouchableOpacity`
    margin-top: 15px;
   
`;
const DoneButton = styled.TouchableOpacity`
`;

const LoadingView = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    background-color: #141314;
`;

const Loading = styled.ActivityIndicator.attrs(props => ({
    color: '#fff',
    size: "large",
    align: "center",
}))``;

const PoistuButton = styled.TouchableOpacity`
    margin-top: 120px;
    margin-left: 15px;
    width: 120px;
    height: 48px;
    border-radius: 50px;
    background-color: ${props => props.color ?? '#054dd9'};
`;


const ProgressBarContainer = styled.View`
    
`;

const NextContainer = styled.View`
    margin-top: 50px;
`;