import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import Text from '../components/Text';
import { Ionicons } from '@expo/vector-icons'; 
import axios from 'axios';
import { ContentLoaderView } from '../utils/Styling';
import { useNavigation } from '@react-navigation/native'; 
import { Skeleton } from '../components/Skeleton';
import { HOMEDATA, MOBILEDATA } from '@env';


const Cards = ({ route }) => {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
   

    async function _getCardData() {

        try {
            await axios.get(`http://${HOMEDATA}/api/cards/etusivucards`)
                .then(response => {
                    
                    const { data } = response;

                    setCardData(data);


                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false);
                    }, 1500);
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

            <Skeleton />
            </ContentLoaderView>
        )
            
     } else {
            return (
                <ContentLoaderView>
                    <ScrollView>

            {
                cardData.map(({ nimi, image, treeninkesto, navigationRoute }, index) => {

                    return(
                        <TouchableOpacity key={index}>
                        <Tile
                        onPress={() => navigation.navigate(navigationRoute, {
                            treeninNimi: nimi,
                            image: image
                        })}
                        imageSrc={{ uri: `http://${HOMEDATA}/api/${image}`, cache: 'default', }}
                        title=
                        {
                        <Text title style={{color: '#FFF', fontFamily: 'MontserratBold'}}>
                        {nimi}
                        </Text>
                        } featured
                        caption=
                        {
                        <View style={{ flexDirection: 'row'}}>
                        { 
                            <Ionicons name="ios-timer-sharp" size={28} color={'#FFF'} /> 
                        }
                        <Text medium style={{color: '#FFF', fontFamily: 
                        'MontserratSemiBold'}}>
                        {treeninkesto}
                        </Text>
                        </View>
                        }
                        containerStyle={{ marginBottom: 5}}  
                        height={150}  
                        imageContainerStyle={{opacity: 0.9, width: '98%', borderRadius: 15}}
                                                
                        />
                       
                        </TouchableOpacity>
                    );
                })
            }
            </ScrollView>
                </ContentLoaderView>
                
            )
        }
            
}



export default Cards;







