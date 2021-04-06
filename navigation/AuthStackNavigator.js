import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
import LoadingScreen from '../screens/Loading';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return(
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Signup"
       >
        <Stack.Screen name="Loading" options={{ headerShown: false}} component={LoadingScreen} />
        <Stack.Screen name="Signup" options={{ headerShown: false}} component={Signup} />
        <Stack.Screen name="Login" options={{ headerShown: false}} component={Login} />
        <Stack.Screen name="Home" options={{ headerShown: false}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}


export default MainStackNavigator;