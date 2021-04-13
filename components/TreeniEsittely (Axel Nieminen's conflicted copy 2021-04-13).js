import React from 'react'
import { Image, StyleSheet, TouchableOpacity, ScrollView, View, Modal, Pressable } from 'react-native';
import Text from '../components/Text';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { Container, AloitaButton, ButtonContainer, IconTouchable } from '../components/TrainScreenStyling';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'




 const TreeniData = (props) => {

    const navigation = useNavigation();

    const { data, backgroundImage, treeniText, treeninKesto, kohdeRyhmaText } = props;


    return(
        <Container>
        
        <Image style={styles.image} source={backgroundImage}></Image>
        <IconTouchable onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row'}}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="white" />
        <IconTouchable><Ionicons style={{position: 'absolute', left: 300, bottom: 10}} name="ios-heart-outline" size={38} color="white" /></IconTouchable>
        </View>
       
        </IconTouchable>
        <ScrollView style={{marginTop: 10}}>
        <Container>
        
        <Text medium left marginLeft="20px" marginTop="10px" >{treeniText.toUpperCase()} </Text>
        <View style={{flexDirection: 'row', margin: 15}}>
        <Ionicons name="ios-timer-sharp" size={26} color="white" />
        
        <Text medium left>{treeninKesto}  <Feather name="target" size={26} color="white" />  Kohderyhmä  -  {kohdeRyhmaText} </Text>
        
        
        </View>
        

        {
            data.map((item, index) => {
                return(
                    <ListItem key={index} containerStyle={styles.cards} bottomDivider >
      
                <ListItem.Content>
                <Image 
                source={item.image}
                style={styles.iconImage}>
                </Image>
                <Text medium>{item.name}</Text>
                
                <Text style={styles.toistotText} medium>{item.sarjat} sarjaa</Text>
                </ListItem.Content>
                <TouchableOpacity onPress={() => navigation.push(item.navigationRoute)} 
                hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
                <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
                </TouchableOpacity>
               
                </ListItem>
                );
            })
        }
        </Container>
        </ScrollView>
        <ButtonContainer>
                <AloitaButton color="white">
                <Text color="black" large >Aloita treeni</Text>
                </AloitaButton>
                </ButtonContainer>
                </Container>
        
    );
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '36%',
        opacity: 0.9,
        borderRadius: 30,
        
    }, 
    cards: {
        height: 70,
        borderWidth: 0,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#141314',
        margin: 0.3,
    },
    
    iconImage: {
        height: 40, width: 40,
        marginTop: 15,
    },

    toistotText: {
        position: 'absolute', right: 10, fontFamily: 'MontserratBold'
    }, 
   
     
    });





export default TreeniData;