import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { API } from '@env';
import { ContentLoaderView } from '../utils/Styling';
import Skeleton from './Skeleton';
import Text from './Text';

export default Cards = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    try {
      axios
        .get(`${API}/api/cards/etusivucards`)
        .then((response) => {
          const { data } = response;

          setCardData(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (loading) {
    return (
      <ContentLoaderView>
        <Skeleton />
      </ContentLoaderView>
    );
  }
  return (
    <ContentLoaderView>
      <ScrollView>
        {cardData.map(({ nimi, image, treeninkesto, navigationRoute }) => (
          <TouchableOpacity key={nimi}>
            <Tile
              onPress={() =>
                navigation.navigate(navigationRoute, {
                  treeninNimi: nimi,
                  image: image,
                })
              }
              imageSrc={{
                uri: `${API}/api/${image}`,
                cache: 'default',
              }}
              title={
                <Text title style={{ color: '#FFF', fontFamily: 'MontserratBold' }}>
                  {nimi}
                </Text>
              }
              featured
              caption={
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons name="ios-timer-sharp" size={28} color="#FFF" />
                  <Text
                    medium
                    style={{
                      color: '#FFF',
                      fontFamily: 'MontserratSemiBold',
                    }}
                  >
                    {treeninkesto}
                  </Text>
                </View>
              }
              containerStyle={{ marginBottom: 5 }}
              height={150}
              imageContainerStyle={{
                opacity: 0.9,
                width: '98%',
                borderRadius: 15,
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ContentLoaderView>
  );
};
