import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as firebase from 'firebase';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { useNavigation } from '@react-navigation/native';
import Text from '../components/Text';
import { Container } from '../utils/Styling';

export default function AloitusHistory() {
  const [loading, setLoading] = useState(false);
  const [defaultData, setDefaultData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState('');

  const colorScheme = useColorScheme();
  Appearance.getColorScheme();
  const themeColor = colorScheme === 'dark' ? 'white' : 'black';
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    db.collection('users')
      .doc(currentUser.uid)
      .collection('treenidata')
      .orderBy('timestamp', 'desc')
      .get()

      .then((snapshot) => {
        const arr = [];
        snapshot.docs.map((dbData) => {
          arr.push(dbData.data());
          setDefaultData(arr);
          setLoading(false);
        });
      });
  }, []);

  const updateInput = (input) => {
    const filtered = defaultData.filter((item) => {
      return item.treeni.toUpperCase().includes(input.toUpperCase());
    });
    setFilteredData(filtered);
  };

  const ItemSeparatorView = () => (
    <View
      style={{ height: 1, width: '100%', marginLeft: 25, backgroundColor: 'grey', opacity: 0.1 }}
    />
  );

  const SearchView = ({ item, index }) => (
    <View style={styles.list}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TehdytTreenitData', {
            data: item,
            date: item.pvm,
          })
        }
      >
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text hae>
            {item.pvm} - {item.treeni}
          </Text>
          <Feather name="chevron-right" size={24} color="grey" />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <Container style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : 'white' }}>
      <SafeAreaView>
        <Feather
          name="chevron-left"
          size={32}
          color="#338467"
          onPress={() => navigation.goBack()}
        />
        <FlatList
          automaticallyAdjustContentInsets="true"
          data={filteredData}
          keyExtractor={(item) => item.timestamp.toString()}
          renderItem={SearchView}
          ItemSeparatorComponent={ItemSeparatorView}
          ListHeaderComponent={
            <>
              <TextInput
                style={{ color: themeColor }}
                placeholderTextColor="grey"
                autoFocus="true"
                placeholder="Etsi treenin nimellä..."
                input={input}
                onChangeText={updateInput}
              />

              <Feather name="search" size={18} style={{ marginRight: 5 }} color="#338467" />
            </>
          }
          ListHeaderComponentStyle={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 22,
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            height: '85%',
            padding: 5,
          }}
        />
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 15,
    margin: 10,
  },
});
