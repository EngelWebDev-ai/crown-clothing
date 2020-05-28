import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBazN4JOzqUh63TzclWEugCgqsmSvS1_g0",
    authDomain: "crown-db-bb502.firebaseapp.com",
    databaseURL: "https://crown-db-bb502.firebaseio.com",
    projectId: "crown-db-bb502",
    storageBucket: "crown-db-bb502.appspot.com",
    messagingSenderId: "1080447521064",
    appId: "1:1080447521064:web:bfdfa776360adf029a801d",
    measurementId: "G-QMGEQTVCSL"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;