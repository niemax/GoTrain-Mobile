import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function TehdytOtherStats() {
  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    db.collection('users')
      .doc(currentUser.uid)
      .collection('treenidata')
      .get()

      .then((snapshot) => {
        snapshot.docs.map((item) => {
          console.log(item.data());
        });
      });
  }, []);

  return null;
}
