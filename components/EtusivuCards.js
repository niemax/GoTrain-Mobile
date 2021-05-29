import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Tile } from 'react-native-elements';
import Text from '../components/Text';
import { useNavigation } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons'; 


const Cards = () => {
    
    const navigation = useNavigation();
    
    const treenit = [{
    
        name: 'Rinta',
        image: require('../assets/rintaToinen.jpg'),
        navigationRoute: 'RintaTreeni',
        icon: <Ionicons name="ios-timer-sharp" size={28} color={'#FFF'} />,
        treeninKesto: '60-75min'
    },
    {
        name: 'Selkä',
        image: require('../assets/selkaToinen.jpg'),
        navigationRoute: 'SelkaTreeni',
        icon: <Ionicons name="ios-timer-sharp" size={28} color={'#FFF'} />,
        treeninKesto: '60-75min'

    },
    {
        name: 'Jalat',
        navigationRoute: 'JalkaTreeni',
        image: require('../assets/jalatToinen.jpg'),
        icon: <Ionicons name="ios-timer-sharp" size={28} color={'#FFF'} />,
        treeninKesto: '45-60min'

    }, 
    {
        name: 'Kädet',
        navigationRoute: 'KasiTreeni',
        image: require('../assets/kadetToinen.jpg'),
        icon: <Ionicons name="ios-timer-sharp" size={28} color={'#FFF'}/>,
        treeninKesto: '45-60min'

    }, 
   
]


    return(
             
            <ScrollView style={{marginTop: 25}}>
            {
                treenit.map((item, index) => {
                    return(
                        <TouchableOpacity key={index}>
                        <Tile
                        onPress={() => navigation.navigate(item.navigationRoute)}
                        imageSrc={item.image}     
                        title={<Text title style={{color: '#FFF', fontFamily: 'MontserratBold'}}>{item.name}</Text>} featured
                        caption=
                        {<View style={{ flexDirection: 'row'}}>{item.icon}
                        <Text medium style={{color: '#FFF', fontFamily: 'MontserratSemiBold'}} >{item.treeninKesto}
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
    );
}



export default Cards;







