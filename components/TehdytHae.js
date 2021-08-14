import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import Text from './Text';
import * as firebase from 'firebase';
import { SearchBar } from 'react-native-elements';

export default function TehdytHae() {
  const [loading, setLoading] = useState(false);
  const [defaultData, setDefaultData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState('');

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
        snapshot.docs.map((dbData) => {
          setDefaultData(dbData.data());
          setLoading(false);
        });
      });
  }, []);

  const updateInput = (input) => {
    if (input) {
      const newData = Object.keys(defaultData).filter((item) => {
        const itemData = item.treeni ? item.treeni.toUpperCase() : ''.toUpperCase();
        const textData = input.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log(newData);
      setFilteredData(newData);
      setInput(input);
    } else {
      setFilteredData(defaultData);
      setInput(input);
    }
    /* const filtered = defaultData.filter((item) => {
      return item.treeni.toLowerCase().includes(input.toLowerCase());
    });
    console.log(filtered);
    setInput(input);
    setFilteredData(filtered); */
  };

  const SearchView = ({ item }) => {
    return <Text>{item.treeni}</Text>;
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput placeholder="Search" input={input} onChangeText={updateInput} />
      <FlatList data={filteredData} keyExtractor={(item) => item.treeni} renderItem={SearchView} />
    </View>
  );
}
