import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Firebase from '../config/Firebase';
import { AntDesign} from '@expo/vector-icons';
//import Treenit from '../screens/Treenit';
import Koti from '../screens/Koti';
import MainAppBottomNav from '../navigation/MainAppNavigator';

    const MainBottomNavigator = () => {
        return (
            <MainAppBottomNav />
            );
    }
    
    

    export default MainBottomNavigator;