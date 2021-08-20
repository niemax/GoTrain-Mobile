import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Text from './Text';
import { Feather } from '@expo/vector-icons';
import * as firebase from 'firebase';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { LottieHae } from './Lottie';
import { useNavigation } from '@react-navigation/native';

export default function TehdytHae() {
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

  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 1, width: '100%', marginLeft: 25, backgroundColor: 'grey', opacity: 0.1 }}
      />
    );
  };

  const SearchView = ({ item, index }) => {
    return (
      <View style={styles.list}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text hae>
            {item.pvm} - {item.treeni}
          </Text>
          <Feather name="chevron-right" size={24} color="grey" />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={filteredData}
        keyExtractor={(index) => index.toString()}
        renderItem={SearchView}
        ItemSeparatorComponent={ItemSeparatorView}
        ListEmptyComponent={
          <View style={{ minHeight: 300, marginTop: 50 }}>
            <LottieHae />
          </View>
        }
        ListHeaderComponent={
          <>
            <TextInput
              style={{ color: themeColor }}
              placeholderTextColor="grey"
              placeholder="Etsi treenin nimellä..."
              autoFocus={true}
              input={input}
              onChangeText={(input) => updateInput(input)}
            />

            <Feather name="search" size={18} style={{ marginRight: 5 }} color="grey" />
          </>
        }
        ListHeaderComponentStyle={{
          flex: 1,
          flexDirection: 'row',
          marginLeft: 22,
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
          height: '85%',
          padding: 5,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 15,
    margin: 10,
  },
});
