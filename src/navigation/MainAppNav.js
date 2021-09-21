import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import TehdytTreenit from '../tabs/TehdytTreenit';
import TehdytTreenitData from '../screens/TehdytTreenitData';
import Etusivu from '../tabs/Etusivu';
import TreeninEsittely from '../screens/TreeniScreens/TreeninEsittely';
import TreeninAloitus from '../screens/TreeniScreens/TreeninAloitus';
import AloitusHistory from '../screens/AloitusHistory';
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
      component={TreeniScreens}
    />
    <Stack.Screen
      name="SplashScreen"
      options={{ headerShown: false, gestureEnabled: false }}
      component={SplashScreen}
    />
  </Stack.Navigator>
);

const TreeniScreens = () => {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator initialRouteName="KotiTab">
      <Stack.Screen name="KotiTab" options={{ headerShown: false }} component={KotiMainTab} />
      <Stack.Screen
        name="TreeninEsittely"
        options={{ headerShown: false, gestureEnabled: true }}
        component={TreeninEsittely}
      />

      <Stack.Screen
        name="TreeninAloitus"
        options={{ headerShown: false, gestureEnabled: false }}
        component={TreeninAloitus}
      />
      <Stack.Screen
        name="AloitusHistory"
        options={{ headerShown: false, gestureEnabled: true }}
        component={AloitusHistory}
      />
      <Stack.Screen
        name="TehdytTreenitData"
        options={({ route }) => ({
          gestureEnabled: true,
          title: route.params.date,
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#141314' : 'white',
            borderBottomWidth: 0,
          },
          headerBackTitle: 'Back',
          headerTitleStyle: { color: colorScheme === 'dark' ? 'white' : 'black' },
          headerTintColor: '#338467',
        })}
        component={TehdytTreenitData}
      />
    </Stack.Navigator>
  );
};

const TehdytTreenitStack = () => {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      initialRouteName="TehdytTreenit" // VAIHDA TÄMÄ TAKAISIN SIGNUP
    >
      <Stack.Screen
        name="TehdytTreenit"
        options={{ headerShown: false, gestureEnabled: true }}
        component={TehdytTreenit}
      />
      <Stack.Screen
        name="TehdytTreenitData"
        options={({ route }) => ({
          title: route.params.date,
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#141314' : 'white',
            borderBottomWidth: 0,
          },
          headerBackTitle: 'Back',
          headerTitleStyle: { color: colorScheme === 'dark' ? 'white' : 'black' },
          headerTintColor: '#338467',
        })}
        component={TehdytTreenitData}
      />
    </Stack.Navigator>
  );
};
const Tab = createMaterialBottomTabNavigator();

const KotiMainTab = () => {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === 'dark' ? '#141314' : 'white';
  const activeColor = '#338467';

  return (
    <Tab.Navigator
      initialRouteName="Koti"
      activeColor={activeColor}
      barStyle={{ backgroundColor: themeColor, height: 72 }}
    >
      <Tab.Screen
        name="Kotisivu"
        component={Etusivu}
        options={{
          tabBarLabel: 'Koti',
          tabBarIcon: () => <Feather name="home" size={24} color={activeColor} />,
        }}
      />
      <Tab.Screen
        name="TehdytTreenit"
        component={TehdytTreenitStack}
        options={{
          tabBarLabel: 'Edistyminen',
          tabBarIcon: () => <Feather name="check-circle" size={24} color={activeColor} />,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainAppStack;
