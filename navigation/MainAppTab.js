import 'react-native-gesture-handler';
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Koti from '../tabs/Koti'
import TehdytTreenit from '../tabs/TehdytTreenit'
import Asetukset from '../tabs/Asetukset'
import { Ionicons } from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator();

const MainAppBottomNav = () => {
    return (
      <Tab.Navigator
      initialRouteName="Koti"
      activeColor="black"
      shifting={true}
      
    >
      <Tab.Screen
        name="Home"
        component={Koti}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#EFEEF0',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="TehdytTreenit"
        component={TehdytTreenit}
        options={{
          tabBarLabel: 'Tehdyt treenit',
          tabBarColor: '#EFEEF0',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-checkmark-done-circle-outline" size={24} color="black" />
          ),
        }}
        />
        <Tab.Screen
        name="Asetukset"
        component={Asetukset}
        options={{
          tabBarLabel: 'Asetukset',
          tabBarColor: '#EFEEF0',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings-outline" size={24} color="black" />
          ),
        }}
        />
    </Tab.Navigator>
        );
}

export default MainAppBottomNav;