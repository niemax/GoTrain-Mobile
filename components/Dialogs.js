import React, { useRef, useState, useCallback, useMemo } from 'react';
import { Alert, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';
import { FloatingActionButton } from '../utils/Styling';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from './Text';
import { ListItem } from 'react-native-elements';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

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
  const [done, setDone] = useState(done);
  const lisaaIcon = <Feather name="edit-2" size={26} style={{ marginLeft: 180 }} />;
  const fabIcon = <Feather name="edit-2" size={26} color="white" />;

  const notDoneIcon = (
    <Feather name="x" size={26} color="red" style={{ marginLeft: 45 }} ref={listItemRef} />
  );

  const doneIcon = (
    <Feather name="check-circle" size={26} color="green" style={{ marginLeft: 50 }} />
  );
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '40%'], []);
  const listItemRef = useRef(0);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

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
    setToisto(''), setPaino(''), setVisible(false);
    setDone(!done);
    refs();
  };
  const refs = () => {
    const r = listItemRef.current;
    console.log(r);
  };

  return (
    <>
      <BottomSheetModalProvider>
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

          <BottomSheetModal
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.46,
              shadowRadius: 11.14,

              elevation: 17,
            }}
            enableOverDrag={true}
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'black' }} large>
                Syötä Tiedot
              </Text>
            </View>
            <View style={styles.contentContainer}>
              {Array.from(Array(parseInt(sarjatLength))).map((i, idx) => (
                <TouchableOpacity onPress={() => setVisible(true)}>
                  <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <Text style={{ color: 'black' }} marginTop="25px" medium>
                          Sarja {idx + 1}
                        </Text>
                        {lisaaIcon}
                        {done ? doneIcon : notDoneIcon}
                      </View>
                    </ListItem.Content>
                  </ListItem>
                </TouchableOpacity>
              ))}
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>

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
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'flex-end',
  },
  contentContainer: {
    flex: 8,
    padding: 10,
  },
});
