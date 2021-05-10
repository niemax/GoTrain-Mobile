  
import React, { useState, useEffect, useRef } from 'react'
import { Dimensions } from 'react-native';
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

const AloitaTreeni = (props) => {
    const [treeniData, setTreeniData] = useState([]);
    const [tehdytTreenit, setTehdytTreenit] = useState({});
    const [pbProgress, setPbProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [toisto1, setToisto1] = useState('');
    const [toisto2, setToisto2] = useState('');
    const [toisto3, setToisto3] = useState('');
    const [paino1, setPaino1] = useState('');
    const [paino2, setPaino2] = useState('');
    const [paino3, setPaino3] = useState('');

    const carousel = useRef(null)

    Appearance.getColorScheme();
    const colorScheme = useColorScheme();

    const { treeni } = props;
    //console.log(treeni)
    const navigation = useNavigation();

    const getData = async () => {
        try {
            let response = await fetch(`https://mun-treeni-api.herokuapp.com/${treeni}`);
            const data = await response.json();

            if (response.status === 200) {
                setTreeniData(data?.liikkeet);

                setTimeout(() => {
                    setIsLoading(false);
                }, 1500)
                
            }

            return data;

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
        const painot = `${paino1} - ${paino2} - ${paino3}`
        const toistot = `${toisto1} - ${toisto2} - ${toisto3}`

        if (!(item.nimi in treenit)) {
            treenit[item.nimi] = { nimi: item.nimi, sarjat: item.sarjat, 
            toistot: { toistot },
            painot: { painot }  
        
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
        setToisto1(''), setToisto2(''), setToisto3(''), setPaino1(''),setPaino2(''), setPaino3('')
        console.log("treenit", treenit, Object.keys(treenit).length);
       
    }


    const _renderItem = ({ item, index }) => {
        const btnColor = tehdytTreenit.hasOwnProperty(item.nimi) ? "#054dd9" : (colorScheme === 'dark' ? 'white' : 'black')
        const treenitLength = Object.keys(treeniData).length;
        const colorIcon = colorScheme === 'dark' ? 'white' : 'black';
        
        if (pbProgress >= 1) {
            return (<LopetaTreeni treeni={treeni} data={tehdytTreenit} />)
        } else if (! isLoading) {
            return (
                
                <AloitusRenderContainer key={index} style={{backgroundColor: colorScheme === 'dark' ? ('#141314') : ('#F9F8F5')}}>
                <ExtraContainer>
                <IconTouchable onPress={() => navigation.goBack()} left marginLeft="15px">
                <Ionicons name="ios-chevron-back" size={24} color={colorIcon} />
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
                        <Text large >{item.nimi.toUpperCase()}</Text>
     
                         <Text marginTop="15px" color="#000" vinkkiTitle >{item.sarjat} sarjaa </Text>
     
                         <AloitusButtonContainer>
                         
                         {index > 0 && <PreviousButton onPress={() => { carousel.current.snapToPrev(); }}>
                                 <Ionicons name="ios-chevron-back-outline" size={48} color={colorIcon} />
                             </PreviousButton>}
     
                             <DoneButton onPress={() => setProgress(item, index)}>
                                 <Ionicons name="checkmark-circle-outline" size={82} 
                                 color={btnColor}
                                 />
                             </DoneButton>
     
                             {index < treenitLength -1 &&  <NextButton onPress={() => { carousel.current.snapToNext(); }}>
                                 <Ionicons name="ios-chevron-forward-outline" size={48} color={colorIcon} />
                             </NextButton>
                             }
     
                         </AloitusButtonContainer>
                         <AdditionalContainer>
                         <Text vinkkiTitle>Toistot
                         
                        </Text>
                         <ToistotContainer >

                         <InputField
                         style={{color: colorIcon, fontFamily: 'MontserratSemiBold', fontSize: 18}}
                        onChangeText={(toisto1) => setToisto1(toisto1)}
                        value={toisto1}
                        placeholder="Sarja 1"
                        keyboardType='numeric'
                        />
                         <InputField
                         style={{color: colorIcon, fontFamily: 'MontserratSemiBold', fontSize: 18}}
                        onChangeText={(toisto2) => setToisto2(toisto2)}
                        value={toisto2}
                        placeholder="Sarja 2"
                        keyboardType='numeric'
                        />
                         <InputField
                         style={{color: colorIcon, fontFamily: 'MontserratSemiBold', fontSize: 18}}
                        onChangeText={(toisto3) => setToisto3(toisto3)}
                        value={toisto3}
                        placeholder="Sarja 3"
                        keyboardType='numeric'
                        />
                        </ToistotContainer>
                        <Text vinkkiTitle>Painot(kg)
                        
                        </Text>
                         <PainotContainer>
                         <InputField
                         style={{color: colorIcon, fontFamily: 'MontserratSemiBold', fontSize: 18}}
                        onChangeText={(paino1) => setPaino1(paino1)}
                        value={paino1}
                        placeholder="Sarja 1"
                        keyboardType='numeric'
                        />
                         <InputField
                         style={{color: colorIcon, fontFamily: 'MontserratSemiBold', fontSize: 18}}
                        onChangeText={(paino2) => setPaino2(paino2)}
                        value={paino2}
                        placeholder="Sarja 2"
                        keyboardType='numeric'
                        />
                         <InputField
                         style={{color: colorIcon, fontFamily: 'MontserratSemiBold', fontSize: 18}}
                        onChangeText={(paino3) => setPaino3(paino3)}
                        value={paino3}
                        placeholder="Sarja 3"
                        keyboardType='numeric'
                        />
                        </PainotContainer>
                         </AdditionalContainer>
                        
                     </UtilsContainer>
                    
                 </AloitusRenderContainer>
             );

        } else {
            return(
                <LoadingView><LottieLoading/></LoadingView>
            )
        }
        
    }

    return (
             <Carousel
                ref={carousel}
                data={treeniData}
                itemWidth={viewportWidth}
                sliderWidth={viewportWidth}
                renderItem={_renderItem}
                slideStyle={{ width: viewportWidth }}
                scrollEnabled={true}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                /> 
    )
}


export default AloitaTreeni;



export const IconTouchable = styled.TouchableOpacity`
    margin-left: 10px;
`;



