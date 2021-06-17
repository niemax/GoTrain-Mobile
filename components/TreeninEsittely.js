import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import Text from '../components/Text';
import { Ionicons } from '@expo/vector-icons'; 
import { Container, AloitaButton, ButtonContainer, IconTouchable, } from '../utils/Styling';
import { ListItem } from 'react-native-elements'
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import { LottieLoading } from '../components/Lottie';
import TreeninKuvausData from '../components/TreeninKuvausData';
import axios from 'axios';

export default function TreeninEsittely({ route, navigation }) {
    const [treeniData, setTreeniData] = useState([]);
    const [treeninKesto, setTreeninKesto] = useState('');
    const [kohderyhma, setKohderyhma] = useState('');
    const [treeniText, setTreeniText] = useState('');
    const [aloitaRoute, setAloitaRoute] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    Appearance.getColorScheme();
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'dark' ? 'white' : 'black';
    
    const { treeninNimi, image } = route.params;

    async function _getData() {
        try {


            axios.get(`http://192.168.1.164:3000/api/treenit/${treeninNimi}`)
                .then(response => {
                    console.log(response.data);
                    setTreeniData(response.data[0].liikkeet);
                    setTreeninKesto(response.data[0].kuvaus.treeninkesto);
                    setKohderyhma(response.data[0].kuvaus.kohderyhma);
                    setTreeniText(response.data[0].kuvaus.treenitext);
                    setAloitaRoute(response.data[0].kuvaus.aloitaRoute); 
                    //   console.log(response.data.data);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                })

        } catch (error) {
            console.error(error);
        }
    }

    const showToast = () => {

        Toast.show({
            text2: 'Implemented soon!',
            type: 'info',
            visibilityTime: 2500

        });
    }

    useEffect(() => {
        _getData();
        console.log(treeninNimi);
    }, []);





    return(
        
        <Container style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',}}>
        
        <Image style={styles.image} source={{ uri: `http://192.168.1.164:3000/api/${image}`} }></Image>
        <View style={{flexDirection: 'row', position: 'absolute', top: 35}}>
        <IconTouchable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="white" />
        </IconTouchable>
        <IconTouchable onPress={() => showToast()}>
        <Text right marginLeft="290px"><Ionicons name="ios-heart-outline" size={38} color="white" /></Text>
        </IconTouchable>
        
        </View>
       
        
        {!isLoading ? (
            <MainDataContainer>
            <ScrollView style={{marginTop: 10}}>


        <TreeninKuvausData
        treeninKesto={treeninKesto}
        kohderyhma={kohderyhma}
        treeniText={treeniText}
        treeniData={treeniData}
        />

    { 
    treeniData.map((item, index) => {

    return(
        <TouchableOpacity key={index} onPress={() => navigation.navigate(item.navigationRoute)}>
        <ListItem 
        containerStyle={{ height: 90,
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}} bottomDivider >
   
    <ListItem.Content>
  
    <TextContainer>
    <Text marginLeft="3px" medium>{item.nimi}</Text>
    <Text 
    style=
    {{
        fontFamily: 'MontserratSemiBold', 
        position: 'absolute', left: 247, 
        color: colorScheme === 'dark' ? '#fff' : '#000' 
        }} medium>{item.sarjat} sarjaa
        </Text>
    </TextContainer>
       
    </ListItem.Content>
    <Ionicons name="ios-chevron-forward-sharp" size={24} color={themeColor} />
       
    </ListItem>
         </TouchableOpacity>

      );
    })
    }  


</ScrollView>
            </MainDataContainer>
            
           
        
        ) :
         ( <LottieLoading />)}
         
         {! isLoading && <ButtonContainer>
                <AloitaButton onPress={() => navigation.navigate('TreeninAloitus', {
                    treeni: treeninNimi
                })}>
                <Text large >Aloita treeni</Text>
                </AloitaButton>
                </ButtonContainer> 
                }
        
                </Container>
                
        
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '30%',
        
    }, 
   
    iconImage: {
        height: 40, width: 40,
        marginTop: 15,
    },
     
    });


const TextContainer = styled.View`
    flex-direction: row;
`;

const MainDataContainer = styled.View`
    flex: 2;
`;