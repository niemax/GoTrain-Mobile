  
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Dimensions } from 'react-native';
import Text from '../../components/Text';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native'; 


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


const AloitaTreeni = (props) => {
    const [treeniData, setTreeniData] = useState([]);
    const [tehdytTreenit, setTehdytTreenit] = useState({});
    const [slideIndex, setSlideIndex] = useState(0);
    const [paivita, setPaivita] = useState(!paivita); 
    const [pbProgress, setPbProgress] = useState(0)
    const [playing, setPlaying] = useState(false);

    const navigation = useNavigation();

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            //Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);


    const getData = async () => {
        try {
            let response = await fetch('https://mun-treeni-api.herokuapp.com/treenit')
            const data = await response.json();
            // uudelleenkäyettävä komponentti -- data[0].props.liikkeet
            setTreeniData(data[0].rintatreeni.liikkeet);
            console.log(data);
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

        const treenit = tehdytTreenit;

        if (!(item.nimi in treenit)) {

            treenit[item.nimi] = { sarjat: item.sarjat, toistot: item.toistot, id: index };
            setTehdytTreenit(treenit);
        } else {
            delete treenit[item.nimi];
        }
        console.log("treenit", treenit, Object.keys(treenit).length);
        setPaivita(paivita);
        setPbProgress(Object.keys(tehdytTreenit).length / treeniData.length);
        
        
    }


    const renderItem = ({ item, index }) => {
        const btnColor = tehdytTreenit.hasOwnProperty(item.nimi) ? "#3FBF3F" : "#FFF";
        const teksti =  tehdytTreenit.hasOwnProperty(item.nimi) ? `${item.nimi} tehty!` : null;
        const treenitLength = Object.keys(treeniData).length;

        return (
            <RenderContainer key={index}>

                <VideoContainer>
                    <YoutubePlayer
                        height={220}
                        videoId={item.videoId}
                        play={playing}
                        onChangeState={onStateChange}
                    />
                </VideoContainer>
                
                <ProgressBarContainer>
                <Progress.Bar progress={pbProgress} width={null} height={3} borderWidth={null} color={"#3FBF3F"} />
                </ProgressBarContainer>

                <UtilsContainer>
                <Text>{teksti}</Text>
                    <Text title center>{item.nimi} </Text>

                    <Text large center>x{item.toistot} </Text>
                    

                    <ButtonContainer>
                    
                    {index > 0 && <PreviousButton onPress={() => { carousel.snapToPrev(); }}>
                            <Ionicons name="ios-chevron-back-outline" size={68} color="white" />
                        </PreviousButton>}
                        

                        <DoneButton onPress={() => setProgress(item, index)}>
                            <Ionicons name="checkmark-circle-outline" size={92} 
                            color={btnColor}
                            />
                        </DoneButton>

                        {index < treenitLength -1 &&  <NextButton onPress={() => { carousel.snapToNext(); }}>
                            <Ionicons name="ios-chevron-forward-outline" size={68} color="white" />
                        </NextButton>
                        }


                    </ButtonContainer>
                    <NextContainer>
                    <Text large center>{item.sarjat} sarjaa </Text>
                    </NextContainer>

                
                </UtilsContainer>
                <PoistuButton onPress={() => navigation.goBack()}>
                    <Text padding="13px" center medium>Poistu</Text>
                </PoistuButton>
            </RenderContainer>
        );
    }

    return (
        <Carousel
            ref={(c) => { carousel = c; }}
            data={treeniData}
            itemWidth={viewportWidth}
            sliderWidth={viewportWidth}
            renderItem={renderItem}
            slideStyle={{ width: viewportWidth }}
            inactiveSlideScale={1}
            onSnapToItem={(index) => setSlideIndex(index)}
            extraData={paivita}

        />
    )
}

export default AloitaTreeni;


const VideoContainer = styled.View`
margin-top: 35px;
   `;

const UtilsContainer = styled.View`
    margin-top: 80px;
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
const PreviousButton = styled.TouchableOpacity`
 
`;
const NextButton = styled.TouchableOpacity`
   
`;
const DoneButton = styled.TouchableOpacity`
`;


const PoistuButton = styled.TouchableOpacity`
    margin-top: 120px;
    margin-left: 15px;
    width: 120px;
    height: 48px;
    border-radius: 50px;
    background-color: ${props => props.color ?? '#FA4242'};
`;


const ProgressBarContainer = styled.View`
    
`;

const NextContainer = styled.View`
    margin-top: 50px;
`;