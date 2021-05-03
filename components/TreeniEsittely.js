import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import Text from '../components/Text';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { Container, AloitaButton, ButtonContainer, IconTouchable, RenderContainer } from '../components/TrainScreenStyling';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'


 const TreeniEsittelyData = (props) => {
     const [treeniData, setTreeniData] = useState([]);
     const [treeninKesto, setTreeninKesto] = useState('');
     const [kohderyhma, setKohderyhma] = useState('');
     const [treeniText, setTreeniText] = useState('');
     const [aloitaRoute, setAloitaRoute] = useState('');
     const [isLoading, setIsLoading] = useState(true);


    const navigation = useNavigation();

    const { treeni, backgroundImage } = props;


    const _getData = async () => {
        try {
            // MAIN FETCH
            let response = await fetch(`https://mun-treeni-api.herokuapp.com/${treeni}`);
            const data = await response.json();
            setTreeniData(data.liikkeet);
            setTreeninKesto(data.kuvaus.treeninkesto);
            setKohderyhma(data.kuvaus.kohderyhma);
            setTreeniText(data.kuvaus.treenitext);
            setAloitaRoute(data.kuvaus.aloitaRoute);
            //console.log("kuvaus", data.kuvaus);

            if (data) {
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

    const _renderTreeninKuvausData = () => {

            return(
                <Container> 
                <Text treeninNimi left marginLeft="15px" marginTop="15px" >{treeniText.toUpperCase()} </Text>
                <View style={{flexDirection: 'row', margin: 15}}>
                <Ionicons name="ios-timer-sharp" size={26} color="white" />
            
                 <Text medium left>  {treeninKesto}  <Feather name="target" size={26} color="white" />  Kohderyhmä  -  {kohderyhma}</Text>
            
                     </View>
                     <Text left marginLeft="12px" marginTop="15px" medium> LIIKKEET  ({treeniData.length})</Text>
                     </Container>
            )
    }

    
       return(
        
        <Container>
        
        <Image style={styles.image} source={backgroundImage}></Image>
        <IconTouchable onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row'}}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="white" />
        <IconTouchable><Ionicons style={{position: 'absolute', left: 300, bottom: 10}} name="ios-heart-outline" size={38} color="white" /></IconTouchable>
        </View>
       
        </IconTouchable>
        
        {!isLoading ? (
            <ScrollView style={{marginTop: 10}}>

        <RenderContainer>
      
      {_renderTreeninKuvausData()}

      { 
            treeniData.map((item, index) => {

                return(
                    <TouchableOpacity key={index} onPress={() => navigation.navigate(item.navigationRoute)}>
                    <ListItem containerStyle={styles.cards} bottomDivider >
               
               <ListItem.Content>
              {/*  <Image 
               source={require(`../../assets/icons/${item.image}`)}
               style={styles.iconImage}>
               </Image> */}
               <Text marginLeft="3px" medium>{item.nimi}</Text>
               
               <Text style={styles.sarjatText} medium>{item.sarjat} sarjaa</Text>
               </ListItem.Content>
               <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
              
               </ListItem>
                    </TouchableOpacity>
                   
                );
            })
        }  
        
        </RenderContainer>
        
        </ScrollView>
        
        ) :
         ( <Loading/>)}
         
         {! isLoading && <ButtonContainer>
                <AloitaButton onPress={() => navigation.navigate(aloitaRoute)}>
                <Text large >Aloita treeni</Text>
                </AloitaButton>
                </ButtonContainer> }
        
         
                </Container>
                
        
    );
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '25%',
        opacity: 0.7,
        borderRadius: 30,
        
    }, 
    cards: {
        height: 90,
        backgroundColor: '#141314',
        margin: 0.3,
    },
    
    iconImage: {
        height: 40, width: 40,
        marginTop: 15,
    },

    sarjatText: {
        position: 'absolute', right: 3, fontFamily: 'MontserratBold'
    }, 
   
     
    });


    const Loading = styled.ActivityIndicator.attrs(props => ({
        color: '#fff',
        size: "large",
        align: "center",
        marginTop: 200
    }))``;

  



export default TreeniEsittelyData;