import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Etusivu from '../screens/Etusivu'
import RintaTreeni from '../screens/TreeniScreens/Rinta'
import SelkaTreeni from '../screens/TreeniScreens/Selka'
import JalkaTreeni from '../screens/TreeniScreens/Jalka'
import KasiTreeni from '../screens/TreeniScreens/Kasi';
import CardioTreeni from '../screens/TreeniScreens/Cardio';


const Stack = createStackNavigator();

const MainAppStack = () => {
    return(
      <Stack.Navigator
       initialRouteName="Etusivu" // VAIHDA TÄMÄ TAKAISIN SIGNUP
       >
        <Stack.Screen name="Etusivu" options={{ headerShown: false, gestureEnabled: false}}  component={Etusivu} />
        <Stack.Screen name="RintaTreeni" options={{ headerShown: false }} component={RintaTreeni} />
        <Stack.Screen name="SelkaTreeni" options={{ headerShown: false }} component={SelkaTreeni} />
        <Stack.Screen name="JalkaTreeni" options={{ headerShown: false }} component={JalkaTreeni} />
        <Stack.Screen name="KasiTreeni" options={{ headerShown: false }} component={KasiTreeni} />
        <Stack.Screen name="CardioTreeni" options={{ headerShown: false }} component={CardioTreeni} />
      </Stack.Navigator>
    );
}


export default MainAppStack;