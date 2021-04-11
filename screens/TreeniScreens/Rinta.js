import React from 'react'
import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 
import { ModalContainer, ModalView, AloitaButton, ButtonContainer, IconTouchable} from '../../components/TrainScreenStyling';

import TreeniData from '../../components/TreeniEsittely';
import { createStackNavigator } from '@react-navigation/stack'
import { WebView } from 'react-native-webview';
import Text from '../../components/Text'
import YoutubePlayer from "react-native-youtube-iframe";



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
    return(
        <Container>
        <WebView
        source={{ uri: 'https://reactnative.dev/' }}
      />
        <ModalView><Text large center>Punnerrukset</Text>
        <AloitaButton onPress={() => navigation.goBack()}>
        
            <Text>Sulje modal</Text>
        </AloitaButton>
         </ModalView>
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

export const Rinta = () => {
   
    return(
        <TreeniData 
        backgroundImage={require('../../assets/rinta.jpg')}
        data={rintaTreeni} 
        treeniText='Rinta / Ojentaja / Olkapää'
        />
    );
}


    const Stack = createStackNavigator();

    const RintaTreeni = () => {
     return(
        <Stack.Navigator
    mode="modal"
    initialRouteName="Rinta"
     >
      <Stack.Screen name="Rinta" options={{ headerShown: false, gestureEnabled: true}}  component={Rinta} />
      <Stack.Screen name="Punnerrukset" options={{ headerShown: false, gestureEnabled: false}}  component={Punnerrukset} />
      <Stack.Screen name="Penkkipunnerrus" options={{ headerShown: false, gestureEnabled: false}}  component={Penkkipunnerrus} />
      <Stack.Screen name="Pystypunnerrus" options={{ headerShown: false, gestureEnabled: false}}  component={Pystypunnerrus} />
      <Stack.Screen name="Dipit" options={{ headerShown: false, gestureEnabled: false}}  component={Dipit} />
      <Stack.Screen name="Vipunosto" options={{ headerShown: false, gestureEnabled: false}}  component={Vipunosto} />
      <Stack.Screen name="ChestFly" options={{ headerShown: false, gestureEnabled: false}}  component={ChestFly} />
      <Stack.Screen name="TricepPushdown" options={{ headerShown: false}} component={TricepPushdown} />
        
    </Stack.Navigator>
     )
    
 }
   

export default RintaTreeni;



const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;