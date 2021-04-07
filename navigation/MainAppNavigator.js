import 'react-native-gesture-handler';
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Koti from '../screens/Koti'
import TehdytTreenit from '../tabs/TehdytTreenit'
import Asetukset from '../tabs/Asetukset'
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainAppBottomNav = () => {
    return (
      
      <Tab.Navigator
      initialRouteName="Koti"
      activeColor="#fff"
      shifting={true}
    >
      <Tab.Screen
        name="Koti"
        component={Koti}
        options={{
          tabBarLabel: 'Koti',
          tabBarColor: 'rgba(228, 43, 10, 0.87)',
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
          tabBarColor: '#EA5504',
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
          tabBarColor: '#FF8A42',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings-outline" size={24} color="white" />
          ),
        }}
        />
    </Tab.Navigator>
        );
}

export default MainAppBottomNav;