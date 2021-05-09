import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import TehdytTreenit from '../tabs/TehdytTreenit'
import LoadingScreen from '../screens/Loading';
import Etusivu from '../tabs/Etusivu'
import RintaTreeni from '../screens/TreeniScreens/Rinta'
import SelkaTreeni from '../screens/TreeniScreens/Selka'
import JalkaTreeni from '../screens/TreeniScreens/Jalka'
import KasiTreeni from '../screens/TreeniScreens/Kasi';
import { Appearance, useColorScheme } from 'react-native-appearance';


const Stack = createStackNavigator();

const MainAppStack = () => {
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
     initialRouteName="KotiTab"
     >
      <Stack.Screen name="KotiTab" options={{ headerShown: false}}  component={KotiMainTab} />
      <Stack.Screen name="RintaTreeni" options={{ headerShown: false, gestureEnabled: false}} component={RintaTreeni} />
      <Stack.Screen name="SelkaTreeni" options={{ headerShown: false, gestureEnabled: false }} component={SelkaTreeni} />
      <Stack.Screen name="JalkaTreeni" options={{ headerShown: false, gestureEnabled: false }} component={JalkaTreeni} />
      <Stack.Screen name="KasiTreeni" options={{ headerShown: false, gestureEnabled: false }} component={KasiTreeni} />
     
    </Stack.Navigator>
  );
}


const Tab = createMaterialBottomTabNavigator();

const KotiMainTab = () => {
  Appearance.getColorScheme();
        const colorScheme = useColorScheme();
        const themeColor = colorScheme === 'dark' ? '#141314' : '#F9F8F5';
        const activeColor = colorScheme === 'dark' ? 'white' : 'black';

    return (
      <Tab.Navigator
      initialRouteName="Koti"
      activeColor={activeColor}
      barStyle={{ backgroundColor: themeColor }}
      
    >
      <Tab.Screen
        name="Kotisivu"
        component={Etusivu}
        options={{
          tabBarLabel: 'Koti',
          tabBarColor: themeColor,
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={24} color={activeColor} />
          ),
        }}
      />
      <Tab.Screen
        name="TehdytTreenit"
        component={TehdytTreenit}
        options={{
          tabBarLabel: 'Edistymiseni',
          tabBarColor: themeColor,
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-checkmark-done-circle-outline" size={24} color={activeColor} />
          ),
        }}
        />
    </Tab.Navigator>
        );
}


export default MainAppStack;