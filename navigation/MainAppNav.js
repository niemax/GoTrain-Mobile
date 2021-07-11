import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import TehdytTreenit from '../tabs/TehdytTreenit';
import Etusivu from '../tabs/Etusivu';
import TreeninEsittely from '../screens/TreeniScreens/TreeninEsittely';
import TreeninEsikatselu from '../screens/TreeniScreens/TreeninEsikatselu';
import TreeninAloitus from '../screens/TreeniScreens/TreeninAloitus';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const MainAppStack = () => (
  <Stack.Navigator
    initialRouteName="SplashScreen" // VAIHDA TÄMÄ TAKAISIN SIGNUP
  >
    <Stack.Screen
      name="Signup"
      options={{ headerShown: false, gestureEnabled: false }}
      component={Signup}
    />
    <Stack.Screen
      name="Login"
      options={{ headerShown: false, gestureEnabled: false }}
      component={Login}
    />
    <Stack.Screen
      name="Kotisivu"
      options={{ headerShown: false, gestureEnabled: false }}
      component={KotiScreens}
    />
    <Stack.Screen
      name="SplashScreen"
      options={{ headerShown: false, gestureEnabled: false }}
      component={SplashScreen}
    />
  </Stack.Navigator>
);

const KotiScreens = () => (
  <Stack.Navigator initialRouteName="KotiTab">
    <Stack.Screen name="KotiTab" options={{ headerShown: false }} component={KotiMainTab} />
    <Stack.Screen
      name="TreeninEsittely"
      options={{ headerShown: false, gestureEnabled: false }}
      component={TreeninEsittely}
    />
    <Stack.Screen
      name="TreeninEsikatselu"
      options={{ headerShown: false, gestureEnabled: false }}
      component={TreeninEsikatselu}
    />
    <Stack.Screen
      name="TreeninAloitus"
      options={{ headerShown: false, gestureEnabled: false }}
      component={TreeninAloitus}
    />
  </Stack.Navigator>
);

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
          tabBarLabel: 'Minä',
          tabBarColor: themeColor,
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-checkmark-done-circle-outline" size={24} color={activeColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainAppStack;
