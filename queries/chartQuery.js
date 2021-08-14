import * as firebase from 'firebase';
import 'firebase/firestore';

export async function chartQuery() {
  const db = firebase.firestore();
  const { currentUser } = firebase.auth();
  await db
    .collection('users')
    .doc(currentUser.uid)
    .collection('treenidata')
    .get()

    .then((snapshot) => {
      snapshot.docs.map((item) => {
        console.log(item.data());
      });
    });
}
