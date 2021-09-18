import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import TehdytTreenit from '../tabs/TehdytTreenit';
import TehdytTreenitData from '../screens/TehdytTreenitData';
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
        screenOptions={{ mode: 'modal' }}
        mode="modal"
        name="TreeninEsikatselu"
        options={({ route }) => ({
          title: route.params.nimi,
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#141314' : 'white',
            borderBottomWidth: 0,
          },
          headerBackTitle: 'Back',
          headerTintColor: colorScheme === 'dark' ? 'white' : 'black',
        })}
        component={TreeninEsikatselu}
      />
      <Stack.Screen
        name="TreeninAloitus"
        options={{ headerShown: false, gestureEnabled: false }}
        component={TreeninAloitus}
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
          headerTintColor: colorScheme === 'dark' ? 'white' : 'black',
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
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={activeColor} />,
        }}
      />
      <Tab.Screen
        name="TehdytTreenit"
        component={TehdytTreenitStack}
        options={{
          tabBarLabel: 'Minä',
          tabBarColor: themeColor,
          tabBarIcon: ({ color }) => <Feather name="check-circle" size={24} color={activeColor} />,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer" component={Drawer} />
    </Drawer.Navigator>
  );
}

export default MainAppStack;
