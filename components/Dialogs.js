import React, { useRef, useState, createRef } from 'react';
import { Alert, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import Emoji from 'react-native-emoji';
import AloitusTimer from './AloitusTimer';
import Dialog from 'react-native-dialog';
import { FloatingActionButton } from '../utils/Styling';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from './Text';
import * as Haptics from 'expo-haptics';
import ActionSheet from 'react-native-actions-sheet';

export default function Dialogs({
  visible,
  setVisible,
  paino,
  setPaino,
  toisto,
  setToisto,
  lisatieto,
  setLisatieto,
  toistotPainotData,
  setToistotPainotData,
  sarjatLength,
}) {
  const [currentItem, setCurrentItem] = useState([]);
  const [timerVisible, setTimerVisible] = useState(false);
  const actionSheetRef = useRef(null);
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  function initialState() {
    setToisto(''), setPaino(''), setLisatieto(''), setVisible(false);
  }

  const lisaaIcon = (
    <Entypo
      name="edit"
      size={26}
      style={{ position: 'relative', left: 200 }}
      color={colorScheme === 'dark' ? '#fff' : '#000'}
    />
  );
  const fabIcon = <Entypo name="edit" size={26} color="white" />;
  const notDoneIcon = (
    <Feather name="x" size={26} color="red" style={{ position: 'relative', left: 230 }} />
  );
  const doneIcon = (
    <Feather
      name="check-circle"
      style={{ position: 'relative', left: 230 }}
      size={26}
      color="green"
    />
  );

  const handlePresentModalPress = () => {
    actionSheetRef.current.show();
    Haptics.selectionAsync();
  };

  const handleToistotPainotData = () => {
    const newArr = [...toistotPainotData];

    try {
      if (toisto === '' || paino === '') {
        Alert.alert('Syötä molemmat tiedot!');
        return;
      }
      newArr.push({
        toistot: toisto,
        painot: paino,
        lisatiedot: lisatieto.trim(),
      });
    } catch (e) {
      console.error(e);
    }
    setToistotPainotData(newArr);
    initialState();
    setTimeout(() => {
      actionSheetRef.current.hide();
    }, 500);

    setTimeout(() => {
      setTimerVisible(true);
    }, 800);
  };

  const handlePress = (_, idx) => {
    setVisible(true);
    setCurrentItem([idx, ...currentItem]);
  };

  const renderIcon = (idx) => {
    let icon;
    if (!currentItem.includes(idx)) {
      icon = notDoneIcon;
    } else {
      icon = doneIcon;
    }
    return icon;
  };

  return (
    <View style={styles.container}>
      <FloatingActionButton
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
        }}
        onPress={handlePresentModalPress}
      >
        <Text>{fabIcon}</Text>
      </FloatingActionButton>

      <ActionSheet
        ref={actionSheetRef}
        eleavtion={3}
        headerAlwaysVisible="true"
        gestureEnabled="true"
        containerStyle={{
          backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Emoji name="dizzy" style={{ fontSize: 25, marginLeft: 15 }} />
          <Text left vinkkiTitle marginLeft="25px" marginBottom="10px" marginTop="10px">
            Syötä sarjojen tiedot
          </Text>
          <Emoji name="dizzy" style={{ fontSize: 25, marginLeft: 10 }} />
        </View>
        {Array.from(Array(parseInt(sarjatLength))).map((i, idx) => (
          <TouchableOpacity onPress={() => handlePress(i, idx)}>
            <View
              key={i}
              style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5' }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  padding: 26,
                }}
              >
                <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }} medium>
                  Sarja {idx + 1}
                </Text>
                {lisaaIcon}
                {renderIcon(idx)}
              </View>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  marginLeft: 20,
                  backgroundColor: 'grey',
                  opacity: 0.12,
                }}
              />
            </View>
          </TouchableOpacity>
        ))}

        <Dialog.Container visible={visible}>
          <Dialog.Title>Lisää sarjan tiedot</Dialog.Title>
          <Text medium center marginBottom="10px">
            Toistot
          </Text>
          <Dialog.Input keyboardType="numeric" onChangeText={(text) => setToisto(text)} />
          <Text medium center marginBottom="10px">
            Painot(kg)
          </Text>
          <Dialog.Input keyboardType="numeric" onChangeText={(text) => setPaino(text)} />
          <Text medium center marginBottom="10px">
            Lisätiedot
          </Text>
          <Dialog.Input multiline numberOfLines={5} onChangeText={(text) => setLisatieto(text)} />

          <Dialog.Button label="Lisää" onPress={handleToistotPainotData} />
          <Dialog.Button label="Peruuta" onPress={() => setVisible(false)} />
        </Dialog.Container>
      </ActionSheet>
      <Dialog.Container
        /* onBackdropPress={() => setTimerVisible(!timerVisible)} */
        visible={timerVisible}
      >
        <AloitusTimer />
      </Dialog.Container>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'flex-end', marginHorizontal: 15, marginVertical: 40 },
});
