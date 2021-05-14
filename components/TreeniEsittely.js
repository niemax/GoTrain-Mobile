import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import Text from '../components/Text';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { Container, AloitaButton, ButtonContainer, IconTouchable, RenderContainer } from '../utils/Styling';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'
import { Appearance, useColorScheme } from 'react-native-appearance';
import Toast from 'react-native-toast-message';
import { LottieLoading } from '../components/Lottie';


 const TreeniEsittelyData = (props) => {
     const [treeniData, setTreeniData] = useState([]);
     const [treeninKesto, setTreeninKesto] = useState('');
     const [kohderyhma, setKohderyhma] = useState('');
     const [treeniText, setTreeniText] = useState('');
     const [aloitaRoute, setAloitaRoute] = useState('');
     const [isLoading, setIsLoading] = useState(true);

    Appearance.getColorScheme();
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'dark' ? 'white' : 'black';

    const navigation = useNavigation();

    const { treeni, backgroundImage } = props;


    const _getData = async () => {
        try {
            // MAIN FETCH
            let response = await fetch(`https://mun-treeni-api.herokuapp.com/${treeni}`);
            const data = await response.json();
            //console.log("kuvaus", data.kuvaus);

            if (response.status === 200) {
                setTreeniData(data?.liikkeet);
                setTreeninKesto(data?.kuvaus.treeninkesto);
                setKohderyhma(data?.kuvaus.kohderyhma);
                setTreeniText(data?.kuvaus.treenitext);
                setAloitaRoute(data?.kuvaus.aloitaRoute);
                setIsLoading(false);
            }
            
            return data;

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        _getData();
    }, []);

    const showToast = () => {
        return(
            Toast.show({
                text2: 'IMPLEMENTED SOON',
                type: 'info',
    
              })
        )
    }

    const _renderTreeninKuvausData = () => {

            return(
                <Container style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}}> 
                <Text treeninNimi left marginLeft="15px" marginTop="15px" >{treeniText.toUpperCase()} </Text>
                <View style={{flexDirection: 'row', margin: 15}}>
                <Ionicons name="ios-timer-sharp" size={26} color={themeColor} />
            
                 <Text medium left>  {treeninKesto}  <Feather name="target" size={26} color={themeColor}/>  Kohderyhmä  -  {kohderyhma}</Text>
            
                     </View>
                     <Text left marginLeft="12px" marginTop="15px" medium> LIIKKEET  ({treeniData.length})</Text>
                     </Container>
            )
    }

    
       return(
        
        <Container style={{backgroundColor: colorScheme === 'dark' ? ('#141314') : ('#F9F8F5')}}>
        
        <Image style={styles.image} source={backgroundImage}></Image>
        <IconTouchable onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row'}}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="white" />
        <IconTouchable onPress={() => showToast()}>
        <Ionicons style={{position: 'absolute', left: 300, bottom: 10}} name="ios-heart-outline" size={38} color="white" />
        </IconTouchable>
        </View>
       
        </IconTouchable>
        
        {!isLoading ? (
            <ScrollView style={{marginTop: 10}}>

        <RenderContainer style={{backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}}>
      
      {_renderTreeninKuvausData()}

      { 
            treeniData.map((item, index) => {

                return(
                    <TouchableOpacity key={index} onPress={() => navigation.navigate(item.navigationRoute)}>
                    <ListItem containerStyle={{ height: 90,
                 backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5'}} bottomDivider >
               
               <ListItem.Content>
              
               <TextContainer>
               <Text marginLeft="3px" medium>{item.nimi}</Text>
               <Text style={{fontFamily: 'MontserratSemiBold', position: 'absolute', left: 247, color: colorScheme === 'dark' ? '#fff' : '#000' }} medium>{item.sarjat} sarjaa</Text>
               </TextContainer>
               
               
               
               </ListItem.Content>
               <Ionicons name="ios-chevron-forward-sharp" size={24} color={themeColor} />
              
               </ListItem>
                    </TouchableOpacity>
                   
                );
            })
        }  
        
        </RenderContainer>
        
        </ScrollView>
        
        ) :
         ( <LottieLoading />)}
         
         {! isLoading && <ButtonContainer>
                <AloitaButton onPress={() => navigation.navigate(aloitaRoute)}>
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
        borderRadius: 15,
        
    }, 
   
    iconImage: {
        height: 40, width: 40,
        marginTop: 15,
    },
     
    });


    const TextContainer = styled.View`
        flex-direction: row;
    `;
  
export default TreeniEsittelyData;