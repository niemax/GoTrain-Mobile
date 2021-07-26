import React from 'react';
import { Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SpeedDial } from 'react-native-elements';
import Dialog from 'react-native-dialog';
import Text from './Text';

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
}) {
  const lisaaIcon = <Feather name="plus" size={24} color="white" />;

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
  };
  return (
    <>
      <SpeedDial
        style={{
          shadowColor: 'black',
          shadowOpacity: 0.8,
          elevation: 6,
          shadowRadius: 3,
          shadowOffset: { width: 0, height: 3 },
        }}
        color="#054dd9"
        isOpen={open}
        overlayColor="transparent"
        icon={lisaaIcon}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={lisaaIcon}
          color="#054dd9"
          title="Lisää sarjan 1 tiedot"
          onPress={() => setVisible(true)}
        />
        <SpeedDial.Action
          icon={lisaaIcon}
          color="#054dd9"
          title="Lisää sarjan 2 tiedot"
          onPress={() => setVisible(true)}
        />
        <SpeedDial.Action
          icon={lisaaIcon}
          color="#054dd9"
          title="Lisää sarjan 3 tiedot"
          onPress={() => setVisible(true)}
        />
      </SpeedDial>

      <Dialog.Container visible={visible}>
        <Dialog.Title>Lisää sarjan tiedot</Dialog.Title>
        <Dialog.Description>Lisää toistot ja painot</Dialog.Description>
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
