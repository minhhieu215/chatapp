import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyD2WOJgPbxcX8GZh03JaftihQDGM_8qB9w",
    authDomain: "chatapp-fcf0e.firebaseapp.com",
    projectId: "chatapp-fcf0e",
    storageBucket: "chatapp-fcf0e.appspot.com",
    messagingSenderId: "604008611001",
    appId: "1:604008611001:web:c68ff8c72acda646e3af68",
    measurementId: "G-T0XMV9GNNZ"
  };
firebase.initializeApp(firebaseConfig)  
firebase.analytics();
const auth = firebase.auth()
auth.useEmulator('http://localhost:9099');
const db = firebase.firestore()
if(window.location.hostname ==='localhost'){
  db.useEmulator('localhost',"8080")
}
export { db , auth }
export default firebase;