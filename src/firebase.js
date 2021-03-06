import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATDpzkiKm0nVHx3VzkmKoF7_UpojB5DRk",
    authDomain: "slack-clone-proj-779f9.firebaseapp.com",
    projectId: "slack-clone-proj-779f9",
    storageBucket: "slack-clone-proj-779f9.appspot.com",
    messagingSenderId: "521627971913",
    appId: "1:521627971913:web:5f8891bb5cc46c502c2a98"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // For Google authentication
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider, db };