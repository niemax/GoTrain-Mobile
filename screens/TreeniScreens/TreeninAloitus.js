import React, { useState, useEffect, useCallback } from 'react'
import { Dimensions } from 'react-native';
import Text from '../../components/Text';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'; 
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons'; 

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


const AloitaTreeni = (props) => {
    const navigation = useNavigation();

    const [treeniData, setTreeniData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);


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


    const { treeni } = props;

    const getData = async() => {
        try {
            let response = await fetch('https://mun-treeni-api.herokuapp.com/treenit')
            const data = await response.json();
            // uudelleenkäyettävä komponentti -- data[0].props.liikkeet
            setTreeniData(data[0].rintatreeni.liikkeet);
            return data;

        } catch (error) {
            console.error(error);
        }
    }

    const renderItem = ({item, index}) => {
     setCurrentIndex(index)
        return (
            <RenderContainer>
            <VideoContainer>
            <YoutubePlayer 
            height={230}
            videoId={item.videoId}
            play={playing}
            onChangeState={onStateChange}
            />
            </VideoContainer>
           
           <UtilsContainer>
           <Text title center>{item.nimi} </Text>
                <Text large center>x{item.toistot} </Text>
                
                <ButtonContainer>
                <PreviousButton onPress={() => { carousel.snapToPrev(); }}>
                <Ionicons name="ios-chevron-back-outline" size={68} color="white" />
                </PreviousButton>
                <DoneButton>
                <Ionicons name="checkmark-circle-outline" size={92} color="white" />
                </DoneButton>
                <NextButton onPress={() => { carousel.snapToNext(); }}>
                <Ionicons name="ios-chevron-forward-outline" size={68} color="white" />
                </NextButton>
                </ButtonContainer>
                <NextContainer>
                <Text vinkit>Seuraavaksi</Text>
                <Text medium>Punnerrukset</Text>
                </NextContainer>
               
               
           </UtilsContainer>

            </RenderContainer>
        );
    }
   

    useEffect(() => {
        getData();
    }, [])

    return(
             <Carousel
              ref={(c) => { carousel = c; }}
              data={treeniData}
              itemWidth={viewportWidth}
              sliderWidth={viewportWidth}
              renderItem={renderItem}
              slideStyle={{ width: viewportWidth }}
              inactiveSlideScale={1}
              scrollEnabled={false}
            />
    )

}

export default AloitaTreeni;


const VideoContainer = styled.View`
   `;

const UtilsContainer = styled.View`
    margin-top: 120px;
    align-items: center;
    justify-content: center;
`;

const RenderContainer = styled.View`
    flex: 1
    background-color: #141314
`;

const ButtonContainer = styled.View`
    flex-direction: row;
    margin-top: 35px;
`;
const PreviousButton = styled.TouchableOpacity`
 
`;
const NextButton = styled.TouchableOpacity`
   
`;
const DoneButton = styled.TouchableOpacity`

`;

const NextContainer = styled.View`
    margin-top: 130px;
`;