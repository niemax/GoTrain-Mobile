import * as firebase from 'firebase';

const getUserInfo = async () => {
  const { currentUser } = firebase.auth();
  try {
    const doc = await firebase.firestore().collection('users').doc(currentUser.uid).get();

    if (!doc.exists) {
      console.error('No user data found!');
    } else {
      const dataObj = doc.data();
      setUsername(dataObj.name);
      console.log(dataObj.name);
    }
  } catch (err) {
    Alert.alert('There is an error.', err.message);
  }
};
