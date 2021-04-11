import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, ScrollView, View, Modal, Pressable } from 'react-native';
import Text from '../components/Text';
import { Ionicons } from '@expo/vector-icons'; 
import { Container, ModalContainer, ModalView, AloitaButton, ButtonContainer, IconTouchable} from '../components/TrainScreenStyling';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'




 const TreeniData = (props) => {

    const navigation = useNavigation();

    const { data, backgroundImage, treeniText } = props;
  



    return(
        <Container>
        
        <Image style={styles.image} source={backgroundImage}></Image>
        <IconTouchable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle-outline" size={38} color="black" />
        </IconTouchable>
        <ScrollView style={{marginTop: 10}}>
        <Container>
        
        <Text large center margin="3px" >{treeniText} <Image 
        style={{height: 40, width: 40}} 
        source={data.treeniIcon}>
        </Image></Text>

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
                <TouchableOpacity onPress={() => navigation.push(item.navigationRoute)} hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}><Ionicons name="ios-chevron-forward-sharp" size={24} color="black" /></TouchableOpacity>
               
                </ListItem>
                    
        
                );
            })
        }
        </Container>
        </ScrollView>
        <ButtonContainer>
                <AloitaButton color="#FDC10B">
                <Text large >Aloita treeni</Text>
                </AloitaButton>
                </ButtonContainer>
                </Container>
        
    );
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '35%',
        opacity: 0.9
        
    }, 
    cards: {
        height: 70,
        borderWidth: 0,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#fff',
        margin: 0.2,
    },
    
    iconImage: {
        height: 40, width: 40,
        marginTop: 15,
    },

    toistotText: {
        position: 'absolute', right: 10, fontFamily: 'MontserratBold'
    }, 
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
    });





export default TreeniData;