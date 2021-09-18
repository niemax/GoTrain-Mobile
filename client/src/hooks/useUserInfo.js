import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as firebase from 'firebase';

export default function useUserInfo() {
  const [username, setUsername] = useState('');
  const { currentUser } = firebase.auth();

  useEffect(() => {
    try {
      const doc = firebase.firestore().collection('users').doc(currentUser.uid).get();

      if (!doc.exists) {
        console.error('No user data found!');
      } else {
        const dataObj = doc.data();
        setUsername(dataObj.name);
      }
    } catch (err) {
      Alert.alert('There is an error.', err.message);
    }
  }, []);
  return { username };
}
