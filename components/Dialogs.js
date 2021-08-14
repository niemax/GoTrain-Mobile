import React, { useRef, useState, createRef } from 'react';
import { Alert, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';
import { FloatingActionButton } from '../utils/Styling';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from './Text';
import * as Haptics from 'expo-haptics';
import { ListItem } from 'react-native-elements';
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
  open,
  setOpen,
  toistotPainotData,
  setToistotPainotData,
  sarjatLength,
}) {
  const [currentItem, setCurrentItem] = useState([]);
  const actionSheetRef = useRef(null);
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  const lisaaIcon = (
    <Entypo
      name="edit"
      size={26}
      color={colorScheme === 'dark' ? '#fff' : '#000'}
      style={{ position: 'relative', left: 200 }}
    />
  );
  const fabIcon = <Entypo name="edit" size={26} color="white" />;
  const notDoneIcon = (
    <Feather name="x" size={26} color="red" style={{ position: 'relative', left: 230 }} />
  );
  const doneIcon = (
    <Feather
      name="check-circle"
      size={26}
      color="green"
      style={{ position: 'relative', left: 230 }}
    />
  );

  const handlePresentModalPress = () => {
    actionSheetRef.current.setModalVisible();
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
    setToisto(''), setPaino(''), setLisatieto(''), setVisible(false);
  };

  const handlePress = (_, idx) => {
    setVisible(true);
    const currentItemArr = [...currentItem];
    setCurrentItem([idx, ...currentItemArr]);
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

      <ActionSheet ref={actionSheetRef}>
        {Array.from(Array(parseInt(sarjatLength))).map((i, idx) => (
          <TouchableOpacity onPress={() => handlePress(i, idx)}>
            <ListItem
              containerStyle={{ backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5' }}
              key={i}
              bottomDivider
            >
              <ListItem.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                  }}
                >
                  <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }} medium>
                    Sarja {idx + 1}
                  </Text>

                  {lisaaIcon}
                  {renderIcon(idx)}
                </View>
              </ListItem.Content>
            </ListItem>
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'flex-end', padding: 24 },
});
