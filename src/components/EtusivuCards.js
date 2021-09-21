import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { API, localhost } from '@env';
import { useFetch } from '../hooks/useFetch';
import Skeleton from './skeletons/Skeleton';
import Text from './Text';

export default Cards = () => {
  const { responseData, loading } = useFetch(`${API}/api/cards/etusivucards`);
  const navigation = useNavigation();

  if (loading) {
    return <Skeleton length={responseData.length} />;
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
      }}
    >
      {responseData.map(({ nimi, image, treeninkesto }) => (
        <>
          <TouchableOpacity
            style={{
              height: 160,
              width: '47%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5,
              marginTop: 9,
              backgroundColor: 'grey',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            onPress={() =>
              navigation.navigate('TreeninEsittely', {
                treeninNimi: nimi,
                image: image,
              })
            }
          >
            <Image
              style={{
                width: '100%',
                height: '100%',
                opacity: 0.8,
                borderRadius: 20,
              }}
              source={{ url: image, cache: 'default' }}
            />

            <View
              style={{
                position: 'absolute',
                top: 50,
                borderRadius: 5,
                width: '50%',
                backgroundColor: '#522802',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Text medium fontFamily="MontserratBold" style={{ color: 'white' }}>
                {nimi}
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 80,
                borderRadius: 5,
                width: 'auto',
                flexDirection: 'column',
                paddingHorizontal: 2,
                backgroundColor: '#338467',
                justifyContent: 'center',
              }}
            >
              <Text medium fontFamily="MontserratBold" style={{ color: 'white' }}>
                <Feather name="clock" size={18} color="white" />
                {treeninkesto}
              </Text>
            </View>
          </TouchableOpacity>
        </>
      ))}
    </View>
  );
};
