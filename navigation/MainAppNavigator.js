import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Koti from '../screens/Koti'

const Tab = createBottomTabNavigator();

const MainAppBottomNav = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Koti" initialRouteName="Koti" component={Koti} />
        </Tab.Navigator>
        );
}

export default MainAppBottomNav;