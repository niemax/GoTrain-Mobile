import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import TehdytTreenit from '../tabs/TehdytTreenit'
import Asetukset from '../tabs/Asetukset'
import LoadingScreen from '../screens/Loading';
import Etusivu from '../screens/Etusivu'
import RintaTreeni from '../screens/TreeniScreens/Rinta'
import SelkaTreeni from '../screens/TreeniScreens/Selka'
import JalkaTreeni from '../screens/TreeniScreens/Jalka'
import KasiTreeni from '../screens/TreeniScreens/Kasi';
import CardioTreeni from '../screens/TreeniScreens/Cardio';


const Stack = createStackNavigator();

const MainAuthStack = () => {
    return(
      
      <Stack.Navigator
       initialRouteName="Signup" // VAIHDA TÄMÄ TAKAISIN SIGNUP
       >
       
        <Stack.Screen name="Loading" options={{ headerShown: false, gestureEnabled: false}}  component={LoadingScreen} />
        <Stack.Screen name="Signup" options={{ headerShown: false, gestureEnabled: false}} component={Signup} />
        <Stack.Screen name="Login" options={{ headerShown: false, gestureEnabled: false}} component={Login} />
        <Stack.Screen name="Kotisivu" options={{ headerShown: false, gestureEnabled: false}} component={KotiScreens} />
      </Stack.Navigator>
    );
}

const KotiScreens = () => {

  return(
    <Stack.Navigator
     initialRouteName="Koti" // VAIHDA TÄMÄ TAKAISIN SIGNUP
     >
      <Stack.Screen name="KotiTab" options={{ headerShown: false, headerLeft: null}}  component={KotiMainTab} />
      <Stack.Screen name="RintaTreeni" options={{ headerShown: false, gestureEnabled: false}} component={RintaTreeni} />
      <Stack.Screen name="SelkaTreeni" options={{ headerShown: false, gestureEnabled: false }} component={SelkaTreeni} />
      <Stack.Screen name="JalkaTreeni" options={{ headerShown: false, gestureEnabled: false }} component={JalkaTreeni} />
      <Stack.Screen name="KasiTreeni" options={{ headerShown: false, gestureEnabled: false }} component={KasiTreeni} />
      <Stack.Screen name="CardioTreeni" options={{ headerShown: false, gestureEnabled: false }} component={CardioTreeni} />
     
    </Stack.Navigator>
  );
}


const Tab = createMaterialBottomTabNavigator();

const KotiMainTab = () => {
    return (
      <Tab.Navigator
      initialRouteName="Koti"
      activeColor="white"
      barStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      
    >
      <Tab.Screen
        name="Kotisivu"
        component={Etusivu}
        options={{
          tabBarLabel: 'Koti',
          tabBarColor: 'rgba(0, 0, 0, 0.9)',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="TehdytTreenit"
        component={TehdytTreenit}
        options={{
          tabBarLabel: 'Tehdyt treenit',
          tabBarColor: 'rgba(0, 0, 0, 0.9)',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-checkmark-done-circle-outline" size={24} color="white" />
          ),
        }}
        />
        <Tab.Screen
        name="Asetukset"
        component={Asetukset}
        options={{
          tabBarLabel: 'Asetukset',
          tabBarColor: 'rgba(0, 0, 0, 0.9)',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings-outline" size={24} color="white" />
          ),
        }}
        />
    </Tab.Navigator>
        );
}


export default MainAuthStack