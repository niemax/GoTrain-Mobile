import React from 'react';
import { Alert } from 'react-native';
import moment from 'moment';
import * as firebase from 'firebase';

export function getCurrentDate(date = moment().locale('fi').format('LL')) {
  return { date };
}

export async function getUserInfo() {
  const { currentUser } = firebase.auth();
  let dataObj = '';

  try {
    const doc = await firebase.firestore().collection('users').doc(currentUser.uid).get();

    if (!doc.exists) {
      console.error('No user data found!');
    } else {
      dataObj = doc.data();
      return { dataObj };
    }
  } catch (err) {
    Alert.alert('There is an error.', err.message);
  }
}
