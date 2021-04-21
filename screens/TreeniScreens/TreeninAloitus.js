import React, { useState, useEffect, useCallback, useRef } from 'react'
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
    const [indexes, setIndexes] = useState([]);
    const [click, setClick] = useState(1)
    const [teksti, setTeksti] = useState('');

    let currentButton = useRef();

    


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

    useEffect(() => {
        getData();
    }, [])

    const makeProgress = (itm, idx) => {
        
        let completed = [];
        setClick(click+1);
        let num = 0;
       // console.log(currentButton)

           const currentBtn = currentButton[idx]
           

           if (!completed.includes(currentBtn)) {
            completed.push(currentBtn);
            let teksti = `${itm.nimi} sarja valmis` 
            setTeksti(teksti)
            console.log(completed)
           } 
            
      
        console.log(teksti);


        
        
    }


    

    const renderItem = ({item, index}) => {
        return (
            <RenderContainer>
            
            <VideoContainer>
            <YoutubePlayer 
            height={220}
            videoId={item.videoId}
            play={playing}
            onChangeState={onStateChange}
            />
            </VideoContainer>
           
           <UtilsContainer>
           <Text title center>{item.nimi} </Text>
            {currentButton &&  <Text>{teksti}</Text> }
               
           

                <Text large center>x{item.toistot} </Text>
                <ButtonContainer>
                {
                    index > 0 &&  <PreviousButton onPress={() => carousel.snapToPrev()}>
                <Ionicons name="ios-chevron-back-outline" size={68} color="white" />
                </PreviousButton> 
                }
               
                <DoneButton ref={currentButton} onPress={() => makeProgress(item, index)}>
                <Ionicons name="checkmark-circle-outline" size={92} color="white" />
                </DoneButton>
                {
                     index < 6 && <NextButton onPress={() => carousel.snapToNext()}>
                <Ionicons name="ios-chevron-forward-outline" size={68} color="white" />
                </NextButton>
                }
                
                </ButtonContainer>
                <NextContainer>
                <Text vinkit>Seuraavaksi</Text>
                <Text medium>{}</Text>
                </NextContainer>
               
               
           </UtilsContainer>

            </RenderContainer>
        );
    }
   

   

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
margin-top: 35px;
   `;

const UtilsContainer = styled.View`
    margin-top: 120px;
    align-items: center;
    justify-content: center;
`;

const RenderContainer = styled.View`
    flex: 1;
    background-color: #141314;
`;

const ButtonContainer = styled.View`
    flex-direction: row;
    margin-top: 30px;
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