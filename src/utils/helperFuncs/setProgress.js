import React from 'react';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';

export default function setProgress(
  item,
  index,
  tehdytTreenit,
  setTehdytTreenit,
  setPbProgress,
  setToistotPainotData,
  toistotPainotData,
  setDoneCount,
  doneCount,
  responseData,
  carousel
) {
  const treenit = { ...tehdytTreenit };

  if (!(item.nimi in treenit)) {
    treenit[item.nimi] = {
      nimi: item.nimi,
      sarjat: item.sarjat,
      id: index,
      suoritusStats: toistotPainotData,
    };

    // setDoneCount((prevCount) => doneCount + 1);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Toast.show({
      text2: `${item.nimi} tehty!`,
      type: 'success',
      visibilityTime: 1000,
    });
    if (index < responseData.length - 1) {
      setTimeout(() => {
        carousel.current.snapToNext();
      }, 1000);
    }
  } else {
    delete treenit[item.nimi];
    //setDoneCount((prevCount) => doneCount - 1);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Toast.show({
      text2: `${item.nimi} poistettu!`,
      type: 'error',
      visibilityTime: 1500,
    });
  }
  setTehdytTreenit(treenit);
  setToistotPainotData('');
  setPbProgress(Object.keys(treenit).length / responseData.length);
}
