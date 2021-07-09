  
import React, { useState, useEffect, useRef } from 'react'
import { Dimensions, ScrollView, Alert, } from 'react-native';
import Text from '../../components/Text';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons, Feather } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { useNavigation  } from '@react-navigation/native'; 
import LopetaTreeni from './TreeninLopetus';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import { LottieLoading,  } from '../../components/Lottie';
import axios from 'axios';
import { HOMEDATA, MOBILEDATA } from '@env';
import { SpeedDial } from 'react-native-elements';
import Dialog from "react-native-dialog";
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
    SeuraavaksiContainer
    } from '../../utils/Styling'


const { width: viewportWidth } = Dimensions.get('window');

const AloitaTreeni = ({ route }) => {
    const [treeniData, setTreeniData] = useState([]);
    const [tehdytTreenit, setTehdytTreenit] = useState({});
    const [pbProgress, setPbProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [toisto, setToisto] = useState('');
    const [paino, setPaino] = useState('');
    const [lisatieto, setLisatieto] = useState('');
    const [toistotPainotData, setToistotPainotData] = useState([]);
    const [open, setOpen] = useState(false);

    const carousel = useRef();
    const dial = useRef();
    const { treeni } = route.params;

    const navigation = useNavigation();
    
    Appearance.getColorScheme();
    const colorScheme = useColorScheme();
    const lisaaIcon = <Feather name="plus" size={24} color="white" />
    
    async function getData() {
        
        try {
            
            
            axios.get(`http://${HOMEDATA}/api/treenit/${treeni}`)
                .then(response => {
                    setTreeniData(response.data[0].liikkeet);

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

        const treenit = { ...tehdytTreenit };

        if (!(item.nimi in treenit)) {
            treenit[item.nimi] = {
                nimi: item.nimi,
                sarjat: item.sarjat,
                id: index,
                suoritusStats: toistotPainotData
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
        setToistotPainotData('');
        setTehdytTreenit(treenit);
        setPbProgress(Object.keys(treenit).length / treeniData.length);
        console.log("treenit", treenit, Object.keys(treenit).length);

    }


    const handleToistotPainotData = () => {
        const newArr = [...toistotPainotData];

        try {
            if (toisto == '' || paino == '') {
                Alert.alert('Syötä molemmat tiedot!');
                return;

            } else {
                newArr.push({
                    toistot: toisto,
                    painot: paino,
                    lisatiedot: lisatieto.trim()
                });
            }
        } catch (e) {
            console.error(e);
        }


        setToistotPainotData(newArr);
        setToisto(''), setPaino(''),
        setVisible(false);

        //dial.current.color = 'color: red';
    }

    const renderDialogs = (item, index) => {

        return (
            <>
            <SpeedDial
                style={{
                shadowColor: 'black',
                shadowOpacity: 0.8,
                elevation: 6,
                shadowRadius: 3,
                shadowOffset : { width: 0, height: 3 },
                }}
                color={'#054dd9'}
                isOpen={open}
                overlayColor={'transparent'}
                icon={lisaaIcon}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
                >
                        <SpeedDial.Action 
                        color={'#054dd9'}
                        ref={dial}
                        icon={lisaaIcon}
                        title={`Lisää sarjan 1 tiedot`}
                        onPress={() => setVisible(true)}
                        />
                        <SpeedDial.Action
                        color={'#054dd9'}
                        ref={dial}
                        icon={lisaaIcon}
                        title={`Lisää sarjan 2 tiedot`}
                        onPress={() => setVisible(true)}
                        />
                        <SpeedDial.Action 
                        color={'#054dd9'}
                        ref={dial}
                        icon={lisaaIcon}
                        title={`Lisää sarjan 3 tiedot`}
                        onPress={() => setVisible(true)}
                        />
                        
                        </SpeedDial>
                    
                        <Dialog.Container visible={visible} >
                        <Dialog.Title>Lisää sarjan tiedot</Dialog.Title>
                        <Dialog.Description>
                        Lisää toistot ja painot
                        </Dialog.Description>
                        <Text medium center marginBottom="10px">Toistot</Text>
                        <Dialog.Input
                        keyboardType='numeric'
                        onChangeText={(text) => setToisto(text)}
                        >
                        </Dialog.Input>
                        <Text medium center marginBottom="10px">Painot(kg)</Text>
                        <Dialog.Input
                        keyboardType='numeric'
                        onChangeText={(text) =>  setPaino(text)}
                        >
                        </Dialog.Input>
                        <Text medium center marginBottom="10px">Lisätiedot</Text>
                        <Dialog.Input
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={(text) =>  setLisatieto(text)}
                        >
                        </Dialog.Input>
                        

                        <Dialog.Button label="Lisää" onPress={handleToistotPainotData} />
                        <Dialog.Button label="Peruuta" onPress={() => setVisible(false)} />
                        </Dialog.Container> 
            </>
            

        )
    }
    
    
    const _renderItem = ({ item, index }) => {
        const btnColor = tehdytTreenit.hasOwnProperty(item.nimi) ? "#054dd9" : colorScheme === 'dark' ? 'white' : 'black'
        const treenitLength = Object.keys(treeniData).length;
        const colorIcon = colorScheme === 'dark' ? 'white' : 'black';
        const nextValue = treeniData[( index + 1 ) % treeniData.length].nimi;

        if (! isLoading) {
            return (
                
                <AloitusRenderContainer key={index} style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}}>
                <ExtraContainer>
                <IconTouchable onPress={() => navigation.goBack()} left marginLeft="15px">
                <Ionicons name="ios-chevron-back" size={24} color={colorIcon} />
                </IconTouchable> 
                <Text medium marginTop="3px" marginLeft="240px" ><Text small>TEHTY</Text> {currentSlide} / {treeniData.length}</Text>
                </ExtraContainer>
                     <VideoContainer>
                         <YoutubePlayer
                             height={240}
                             videoId={item.videoId}
                         />
                     </VideoContainer>
                     
                     <ProgressBarContainer>
                     <Progress.Bar progress={pbProgress} width={null} height={3} borderWidth={null} color={"#054dd9"} />
                     </ProgressBarContainer>
     
                     <UtilsContainer>
                        <Text title >{item.nimi.toUpperCase()}</Text>
     
                         <Text marginTop="15px" large >{item.sarjat} sarjaa </Text>
     
                         <AloitusButtonContainer>
                         
                         {index > 0 && <PreviousButton onPress={() => { carousel.current.snapToPrev() }}>
                                 <Ionicons name="ios-chevron-back-outline" size={58} color={colorIcon} />
                             </PreviousButton>}
     
                             <DoneButton onPress={() => setProgress(item, index)}>
                                <Ionicons name="checkmark-circle-outline" size={90} 
                                color={btnColor}
                                />
                             </DoneButton>
     
                             {index < treenitLength -1 &&  <NextButton onPress={() => { carousel.current.snapToNext() }}>
                                 <Ionicons name="ios-chevron-forward-outline" size={58} color={colorIcon} />
                             </NextButton>
                             }
     
                         </AloitusButtonContainer>
                         
                           
                        
                     </UtilsContainer>
                     <SeuraavaksiContainer>
                     
                    {index < treenitLength - 1 && 
                    <Text >
                    SEURAAVAKSI
                    </Text>
                    }
                    {index < treenitLength - 1 && 
                    <Text style={{fontFamily: 'MontserratBold', color: colorScheme === 'dark' ? '#fff' : '#000'}} treeninNimi>
                    {nextValue.toUpperCase()}
                    </Text>}
                     
                     </SeuraavaksiContainer>
                     
                   {renderDialogs(item, index)}
                     
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



