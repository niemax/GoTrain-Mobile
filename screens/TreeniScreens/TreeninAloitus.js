  
import React, { useState, useEffect, useRef } from 'react'
import { Dimensions, ScrollView } from 'react-native';
import Text from '../../components/Text';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { useNavigation  } from '@react-navigation/native'; 
import LopetaTreeni from './TreeninLopetus';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import { LottieLoading } from '../../components/Lottie';
import axios from 'axios';
import ActionButton from 'react-native-action-button';
import SarjaModal from '../../components/Modal';

import { VideoContainer,
    UtilsContainer, 
    AloitusRenderContainer, 
    AloitusButtonContainer, 
    ExtraContainer, 
    PreviousButton,
    NextButton,
    DoneButton,
    LoadingView,
    ProgressBarContainer,
    InputField,
    ToistotContainer,
    PainotContainer,
    AdditionalContainer
    } from '../../utils/Styling'



const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const AloitaTreeni = ({ route }) => {
    const [treeniData, setTreeniData] = useState([]);
    const [tehdytTreenit, setTehdytTreenit] = useState({});
    const [pbProgress, setPbProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [toistot, setToistot] = useState([]);
    const [painot, setPainot] = useState([]);

    const carousel = useRef(null);

    const { treeni } = route.params;
    const navigation = useNavigation();

    Appearance.getColorScheme();
    const colorScheme = useColorScheme();

    //console.log(treeni)

    async function getData() {
        try {
            
            axios.get(`http://192.168.1.165:5000/api/treenit/${treeni}`)
                .then(response => {
                    console.log(response.data);
                    setTreeniData(response.data[0].liikkeet);
                    //   console.log(response.data.data);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000)
                })

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const setProgress = (item, index) => {
     //console.log console.log("setProgress", item, index);

        const treenit = { ...tehdytTreenit };
        //const painot = `${paino1} - ${paino2} - ${paino3}`;
        //const toistot = `${toisto1} - ${toisto2} - ${toisto3}`;

        if (!(item.nimi in treenit)) {
            treenit[item.nimi] = { nimi: item.nimi, sarjat: item.sarjat, 
            // toistot: { toistot },
            // painot: { painot }  
        
        };
            setCurrentSlide(currentSlide + 1);
            Toast.show({
                text2: `${item.nimi} tehty!`,
                type: 'success',
                visibilityTime: 1000
    
              });
        } else {
            delete treenit[item.nimi];
            setCurrentSlide(currentSlide - 1);
            Toast.show({
                text2: `${item.nimi} poistettu!`,
                type: 'error',
                visibilityTime: 1500
    
              });
            
        }

        setTehdytTreenit(treenit);
        setPbProgress(Object.keys(treenit).length / treeniData.length);
        // setToisto1(''), setToisto2(''), setToisto3(''), setPaino1(''),setPaino2(''), setPaino3('')
        console.log("treenit", treenit, Object.keys(treenit).length);
       
    }

    function handleToisto(value) {

        const newValue = value;

        // setToisto([...toisto], newValue);
    }

    function openModal() {
        return <SarjaModal />
    }

   


    const _renderItem = ({ item, index }) => {
        const btnColor = tehdytTreenit.hasOwnProperty(item.nimi) ? "#054dd9" : colorScheme === 'dark' ? 'white' : 'black'
        const treenitLength = Object.keys(treeniData).length;
        const colorIcon = colorScheme === 'dark' ? 'white' : 'black';
        
        if (! isLoading) {
            return (
                
                <AloitusRenderContainer key={index} style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}}>
                <ScrollView>
                <ExtraContainer>
                <IconTouchable onPress={() => navigation.goBack()} left marginLeft="15px">
                <Ionicons name="ios-chevron-back" size={24} color={colorIcon} />
                </IconTouchable> 
                <Text medium marginTop="3px" marginLeft="240px" ><Text small>TEHTY</Text> {currentSlide} / {treeniData.length}</Text>
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
                        <Text title >{item.nimi.toUpperCase()}</Text>
     
                         <Text marginTop="15px" vinkkiTitle >{item.sarjat} sarjaa </Text>
     
                         <AloitusButtonContainer>
                         
                         {index > 0 && <PreviousButton onPress={() => { carousel.current.snapToPrev() }}>
                                 <Ionicons name="ios-chevron-back-outline" size={48} color={colorIcon} />
                             </PreviousButton>}
     
                             <DoneButton onPress={() => setProgress(item, index)}>
                                <Ionicons name="checkmark-circle-outline" size={82} 
                                color={btnColor}
                                />
                             </DoneButton>
     
                             {index < treenitLength -1 &&  <NextButton onPress={() => { carousel.current.snapToNext() }}>
                                 <Ionicons name="ios-chevron-forward-outline" size={48} color={colorIcon} />
                             </NextButton>
                             }
     
                         </AloitusButtonContainer>
                        <AdditionalContainer>
                         <ActionButton buttonColor="#054dd9" size={82}
                         onPress={() => openModal()}/>


                        

                        </AdditionalContainer>                         
                         {/* <AdditionalContainer>
                         <Text vinkkiTitle>Toistot</Text>
                         <ToistotContainer >
                        {
                        [1,2,3].map((_, index) => (

                        <InputField key={index}
                        style={{color: colorIcon, fontFamily: 'MontserratSemiBold', fontSize: 18}}
                        onChangeText={() => handleToisto()}
                        value={toistot}
                        placeholder={`Sarja ${index + 1}`}
                        keyboardType='numeric'
                        />
                        ))
                        
                        }

                        </ToistotContainer>
                        <Text vinkkiTitle>Painot</Text>
                        <PainotContainer>
                        {
                        [1,2,3].map((_, index) => (

                        <InputField key={index}
                        style={{color: colorIcon, fontFamily: 'MontserratSemiBold', fontSize: 18}}
                        onChangeText={() => definePaino()}
                        value={painot}
                        placeholder={`Sarja ${index + 1}`}
                        keyboardType='numeric'
                        />
                        
                        
                        ))
                        }
                        </PainotContainer>
                         </AdditionalContainer> */}
                        
                     </UtilsContainer>
                </ScrollView>
                
                    
                 </AloitusRenderContainer>
             );

        } else {
            return(
                <LoadingView><LottieLoading/></LoadingView>
            )
        }
        
    }


    if (pbProgress >= 1) {
        return (
        
            <LopetaTreeni treeni={treeni} data={tehdytTreenit} />
   )
       
    } else {
        return (
            <Carousel
            ref={carousel}
            data={treeniData}
            itemWidth={viewportWidth}
            sliderWidth={viewportWidth}
            renderItem={_renderItem}
            slideStyle={{ width: viewportWidth }}
            scrollEnabled={false}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            /> 
        )
    }
    
}


export default AloitaTreeni;



export const IconTouchable = styled.TouchableOpacity`
    margin-left: 10px;
`;



