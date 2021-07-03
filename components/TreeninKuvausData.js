import React from 'react'
import { View } from 'react-native';
import Text from '../components/Text'
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { Container } from '../utils/Styling';
import { Appearance, useColorScheme } from 'react-native-appearance';


export default function TreeninKuvausData({ treeninKesto, kohderyhma, treeniText, treeniData }) {

    Appearance.getColorScheme();
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'dark' ? 'white' : 'black';
    
    

    return (
        <Container style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5', }}> 
        <Text treeninNimi left marginLeft="15px"  >{treeniText.toUpperCase()} </Text>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10, marginBottom: 20}}>
        <Ionicons name="ios-timer-sharp" size={26} color={themeColor} />
    
         <Text medium >  {treeninKesto}  <Feather name="target" size={26} color={themeColor}/>  Kohderyhmä  -  {kohderyhma}</Text>
    
             </View>
             <Text left marginLeft="10px" marginTop="15px" medium> LIIKKEET  ({treeniData.length})</Text>
             </Container>
    )
}
