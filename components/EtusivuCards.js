import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import Text from '../components/Text';
import { Ionicons } from '@expo/vector-icons'; 
import axios from 'axios';
import { ContentLoaderView } from '../utils/Styling';
import { useNavigation } from '@react-navigation/native'; 
import { LottieLoading } from '../components/Lottie';
import ContentLoader, { Facebook, Code } from 'react-content-loader/native';


const Cards = () => {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState('');

   const navigation = useNavigation();

   const MyCodeLoader = () => <Code 
       backgroundColor = {
           '#BFBFBF'
       }
   />

    async function _getCardData() {
        try {

            await axios.get('http://192.168.1.164:3000/api/cards/etusivucards')
                .then(response => {
                    console.log(response.data);
                    setCardData(response.data);


                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                })
        } catch (err) {
            console.error(error);
        }

    }

    useEffect(() => {
        _getCardData();
    }, []);

    
    if (loading) {
        return (
            <ContentLoaderView>
            <MyCodeLoader />
            </ContentLoaderView>
        )
            
     } else {
            return (
                <ScrollView style={{marginTop: 25}}>
            {
                cardData.map((item, index) => {
                    const img = item.image;

                    return(
                        <TouchableOpacity key={index}>
                        <Tile
                        onPress={() => navigation.navigate(item.navigationRoute)}
                        imageSrc={{ uri: `http://192.168.1.164:3000/api/${img}` }}
                        title={<Text title style={{color: '#FFF', fontFamily: 'MontserratBold'}}>{item.nimi}</Text>} featured
                        caption=
                        {
                        <View style={{ flexDirection: 'row'}}>
                        { <Ionicons name="ios-timer-sharp" size={28} color={'#FFF'} /> }
                        <Text medium style={{color: '#FFF', fontFamily: 'MontserratSemiBold'}} >{item.treeninkesto}
                        </Text>
                        </View>
                        }
                        containerStyle={{ marginBottom: 5, marginLeft: 8.5}}  
                        height={150}  
                        width={'98%'}   
                        imageContainerStyle={{opacity: 0.9, borderRadius: 10}}
                                                
                        />
                       
                        </TouchableOpacity>
                    );
                })
            }
            </ScrollView>
            )
        }
            
}



export default Cards;







