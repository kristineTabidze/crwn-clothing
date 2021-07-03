import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCFY2OXrv_H5or0J3IU6DtLnVRwJBlTmKo",
  authDomain: "crown-db-20134.firebaseapp.com",
  projectId: "crown-db-20134",
  storageBucket: "crown-db-20134.appspot.com",
  messagingSenderId: "797316517704",
  appId: "1:797316517704:web:9e808149c26989a9366d7d",
  measurementId: "G-W6HD1BQN3J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
