import React, { useState, useCallback } from 'react'
import { Button, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 
import { ModalContainer, ModalView, AloitaButton, ButtonContainer, IconTouchable} from '../../components/TrainScreenStyling';
import TreeniData from '../../components/TreeniEsittely';
import { createStackNavigator } from '@react-navigation/stack'
import { WebView } from 'react-native-webview';
import Text from '../../components/Text'
import YoutubePlayer from "react-native-youtube-iframe";
import HeaderComponent from '../../components/HeaderComponent';


const rintaTreeni = [{
        
        
        id: 1,
        name: 'Punnerrukset',
        sarjat: '2-3',
        image: require('../../assets/icons/punnerrukset.png'),
        navigationRoute: 'Punnerrukset'
    },
    {
        id: 2,
        name: 'Penkkipunnerrus',
        sarjat: '2-3',
        image: require('../../assets/icons/penkkipunnerrus.png'),
        navigationRoute: 'Penkkipunnerrus'


    },
    {
        id: 3,
        name: 'Pystypunnerrus',
        sarjat: '2-3',
        image: require('../../assets/icons/pystypunnerrus.png'),
        navigationRoute: 'Pystypunnerrus'


    },
    {
        id: 4,
        name: 'Dipit',
        sarjat: 3,
        image: require('../../assets/icons/dipit.png'),
        navigationRoute: 'Dipit'


    },
    {
        id: 5,
        name: 'Vipunosto sivulle',
        sarjat: 3,
        image: require('../../assets/icons/vipunosto.png'),
        navigationRoute: 'Vipunosto'


    },
    {
        id: 6,
        name: 'Chest fly',
        sarjat: 3,
        image: require('../../assets/icons/chestfly.png'),
        navigationRoute: 'ChestFly'


    },
    {
        id: 7,
        name: 'Tricep pushdown',
        sarjat: 3,
        image: require('../../assets/icons/triceps.png'),
        navigationRoute: 'TricepPushdown'
    }
]


export const Punnerrukset = ({ navigation }) => {
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
   

    return(
        <Container>

        <VideoContainer>
        <YoutubePlayer
        height={220}
        play={playing}
        videoId={"-Mbr55h3BeQ"}
        onChangeState={onStateChange}
      />
      </VideoContainer>

      <Text large left>  Punnerrukset - <Text medium>3 sarjaa 10 toistoa</Text></Text>
      
      <TextContainer>
      
        <Text medium left>{`Pidä keskivartalo tiukkana ja kroppa suorassa. \n \nHengitä sisään alaslaskun aikana, hengitä ulos kun punnerrat itseäsi ylös (eli muista hengittää!)
        \nEli kroppa suorana ja keskivartalo tiukkana, pää neutraalissa asennossa. \n\nJos et jaksa tehdä normaaleja punnerruksia, älä mene varpaiden vaan polvien varaan.
        `}</Text>
      </TextContainer>

        <SuljeButton onPress={() => navigation.goBack()}>
            <Text color="white" center large>Sulje</Text>
        </SuljeButton>
        </Container>
            
       
    )
}
export const Penkkipunnerrus = () => {
    return(
       <Text large center>Penkkipunnerrus</Text> 
    )
}
export const Pystypunnerrus = () => {
    return(
       <Text large center>Pystypunnerrus</Text> 
    )
}
export const Dipit = () => {
    return(
       <Text large center>Dipit</Text> 
    )
}
export const Vipunosto = () => {
    return(
       <Text large center>Vipunosto</Text> 
    )
}
export const  ChestFly = () => {
    return(
       <Text large center>ChestFly</Text> 
    )
}
export const TricepPushdown = () => {
    return(
       <Text large center>TricepPushdown</Text> 
    )
}

    const Rinta = () => {
   
    return(
        <TreeniData 
        backgroundImage={require('../../assets/rintaToinen.jpg')}
        data={rintaTreeni} 
        treeniText='Rinta / Ojentaja / Olkapää'
        treeninKesto='45-60min'
        kohdeRyhmaText='Rinta'
        />
    );
}


    const Stack = createStackNavigator();

    export default () => {
     return(
        <Stack.Navigator
    mode="modal"
    initialRouteName="Rinta"
  
    
     >
      <Stack.Screen name="Rinta" options={{  headerShown: false, headerLeft: null }}  component={Rinta} />
      <Stack.Screen
       name="Punnerrukset" 
       options=
       {{ headerTintColor: 'white', headerStyle: {backgroundColor: '#000' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}
         component={Punnerrukset} />
      <Stack.Screen name="Penkkipunnerrus" options={{ headerShown: false, gestureEnabled: false}}  component={Penkkipunnerrus} />
      <Stack.Screen name="Pystypunnerrus" options={{ headerShown: false, gestureEnabled: false}}  component={Pystypunnerrus} />
      <Stack.Screen name="Dipit" options={{ headerShown: false, gestureEnabled: false}}  component={Dipit} />
      <Stack.Screen name="Vipunosto" options={{ headerShown: false, gestureEnabled: false}}  component={Vipunosto} />
      <Stack.Screen name="ChestFly" options={{ headerShown: false, gestureEnabled: false}}  component={ChestFly} />
      <Stack.Screen name="TricepPushdown" options={{ headerShown: false}} component={TricepPushdown} />
    
    </Stack.Navigator>
     )
    
 }
   



const Container = styled.View`
    background-color: #141314;
    height: 100%;

`;

const VideoContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-left: 15px;
    margin-top: 50px;

`;

const SuljeButton = styled.TouchableOpacity`
align-items: center;
height: 48px;
justify-content: center;
border-radius: 50px;
background-color: ${props => props.color ?? '#FA4242'};
`;
